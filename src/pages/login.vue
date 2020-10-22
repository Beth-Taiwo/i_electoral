<template>
<div class="container">
    <form>
        <h3>Welcome back!</h3>
        <p>Provide your credentials to continue.</p>
        <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Keep me signed in </label>
        </div>
        <button type="submit" class="btn btn-block">Login</button>
        <hr>
        <p><u>forgot password?</u></p>
    </form>

</div>
</template>

<script>
export default {
    name: "login"
}
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
    background: #29B6F6;
    color: white;
}

hr {
    margin-top: 50px;
}

p {

    color: #EF7F19;
}
</style>
