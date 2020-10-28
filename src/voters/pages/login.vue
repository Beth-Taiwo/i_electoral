<template>
<div class="container">
    <form>
        <h3>iElectoral</h3>
        <p>Provide your credentials to continue.</p>
        <div class="form-group">
            <label for="fullName">Full Name</label>
            <input type="text" class="form-control" id="fullName">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <button type="submit" class="btn btn-block">Let me in</button>
        <hr>
        <p><i>By clicking, You agree with our terms of use</i></p>
    </form>
    <div class="image">
        <!-- <img width="50px" height="50px" src="../assets/display-pic.jpg" alt="display picture"> -->
    </div>
</div>
</template>

<script>
export default {
    name: "voterlogin"
}
</script>

<style scoped>
.container {
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    padding: 0;
}

form>h3,
form>p {
    text-align: center;
}

form {
    width: 350px;
    min-width: 380px;
    padding-right: 20px;
}

h1 {
    text-align: center;
}

.btn {
    background: #29B6F6;
    color: white;
}

hr {
    margin-top: 30px;
}

p {

    color: #EF7F19;
}

.image {
    width: 100%;
    height: 100%;
    background-image: url(https://cdn.pixabay.com/photo/2020/10/08/14/11/vote-5638088_960_720.jpg);
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 0;
}
</style>
