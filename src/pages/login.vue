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
            <input :disabled="isLoadingText" id="email" type="email" class="form-control" :class="errorTarget == 'email' ? 'is-invalid' : null" name="email" required v-model="email" aria-describedby="emailHelp" />
            <span style="font-size: 10px; color: red" v-show="errorTarget == 'email'">{{ errorMessage }}</span>
        </div>
        <div class="form-group mb-4">
            <label for="password">Password</label>
            <input :disabled="isLoadingText" type="password" :class="errorTarget == 'password' ? 'is-invalid' : null" class="form-control" id="password" v-model="password" />
            <span style="font-size: 10px; color: red" v-show="errorTarget == 'password'">{{ errorMessage }}</span>
        </div>

        <button :disabled="isLoadingText" type="submit" class="btn btn-block mb-4">{{isLoadingText ? 'Please wait...' : 'Login'}}</button>

        <router-link v-show="!isLoadingText" to="/reset-password">Forgot password?</router-link>
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
            email: null,
            password: null,
            errorMessage: null,
            errorTarget: null,
            isLoadingText: false,
        };
    },

    methods: {
        attemptLogin() {
            this.errorMessage = null;
            this.errorTarget = null;

            if (!validEmail(this.email)) {
                this.errorMessage = "Provide valid email";
                this.errorTarget = "email";
            } else if (!this.password || this.password.length < 6) {
                this.errorMessage = "Password should be at least 6 characters";
                this.errorTarget = "password";
            }

            // if there was no error, attempt login
            if (!this.errorMessage) {
                this.isLoadingText = true;
                const credentials = {
                    email: this.email,
                    password: this.password

                };
                adminLogin(credentials)
                    .then((response) => {
                        const data = response.data.data;
                        const accessToken = {
                            'token': data.access_token,
                            'expiration': data.token_expiration
                        };

                        localStorage.setItem('access_token', JSON.stringify(accessToken));
                        localStorage.setItem('user', JSON.stringify(data.user));
                        // this.$router.replace('/dashboard');
                        this.$router.push('/dashboard');

                    })
                    .catch((error) => {
                        console.log(error)
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
