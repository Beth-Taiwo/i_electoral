<template>
<div class="container">
    <form @submit.prevent="attemptLogin">
        <h3>Welcome back!</h3>
        <p>Provide your credentials to continue.</p>
        <div v-show="errorMessage && !errorTarget" style="padding:8px;margin-bottom:12px;text-align:center;border:1px solid red;background-color:red;color:#fff;font-size:12px">
            {{errorMessage}}
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input :disabled="isLoading" id="email" type="email" class="form-control" :class="errorTarget == 'username' ? 'is-invalid' : null" name="email" required v-model="username" aria-describedby="emailHelp" />
            <span style="font-size: 10px; color: red" v-show="errorTarget == 'username'">{{ errorMessage }}</span>
        </div>
        <div class="form-group mb-4">
            <label for="password">Password</label>
            <input :disabled="isLoading" type="password" :class="errorTarget == 'password' ? 'is-invalid' : null" class="form-control" id="password" v-model="password" />
            <span style="font-size: 10px; color: red" v-show="errorTarget == 'password'">{{ errorMessage }}</span>
        </div>

        <button :disabled="isLoading" type="submit" class="btn btn-block mb-4">{{isLoading ? 'Please wait...' : 'Login'}}</button>

        <router-link v-show="!isLoading" to="/reset-password">Forgot password?</router-link>
    </form>
</div>
</template>

<script>
import {
    validEmail
} from "../common/utils";
import {
    adminLogin
} from '../services/apiService';

export default {
    name: "login",

    data() {
        return {
            username: null,
            password: null,
            errorMessage: null,
            errorTarget: null,
            isLoading: false,
        };
    },

    methods: {
        attemptLogin() {
            this.errorMessage = null;
            this.errorTarget = null;

            const username = this.username,
                password = this.password;

            if (!validEmail(username)) {
                this.errorMessage = "Provide valid email";
                this.errorTarget = "username";
            } else if (!password || password.length < 6) {
                this.errorMessage = "Password should be at least 6 characters";
                this.errorTarget = "password";
            }

            // if there was no error, attempt login
            if (!this.errorMessage) {
                this.isLoading = true;

                adminLogin({
                        email: username,
                        password
                    })
                    .then(response => {
                        if (response?.data) {
                            localStorage.setItem('token', response.data.token);
                            localStorage.setItem('user', JSON.stringify(response.data.user));
                            this.$router.replace('/dashboard');
                        }
                    }, error => {
                        this.errorMessage = error;
                        this.isLoading = false;
                    })
            }
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
}

form>h3,
form>p {
    text-align: center;
}

form {
    width: 350px;
    min-width: 380px;
}

h1 {
    text-align: center;
}

.btn {
    background: #29b6f6;
    color: white;
}

hr {
    margin-top: 50px;
}

p {
    color: #ef7f19;
}
</style>
