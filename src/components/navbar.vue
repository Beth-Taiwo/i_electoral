<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a href="#" class="navbar-brand text-white">iElectoral</a>

    <ul class="navbar-nav ml-auto">

        <li class="nav-item dropdown text-white">
            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class='bx bxs-user'></i>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <button class="btn btn-link text-dark dropdown-item">Profile</button>
                <div class="dropdown-divider"></div>
                <button @click="logOut" class="btn btn-link text-dark dropdown-item">Logout</button>
            </div>
        </li>
    </ul>
</nav>
<!--
<nav class="navbar-expand-lg navbar-light">
    <h3>iElectoral</h3>
    <div class="dropdown">
        <button class="dropbtn">
            <i class='bx bxs-user'></i>
        </button>
        <div class="dropdown-content">
            <a href="#">Profile</a>
            <a @click.prevent="logOut" href="#">Log out</a>
        </div>
    </div>
</nav> -->
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        logOut() {
            localStorage.clear();
            this.$router.push("/login");
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.dropdown-menu {
    position: absolute;
    left: -120px;

}

nav {
    background: #EF7F19 !important;
    position: relative;
    z-index: 100;
}

/*
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px 24px;
    background: #EF7F19;
    color: #ffffff;
}

nav h3 {
    font-size: 18px;
    margin: 0;
}

.dropdown {
    position: relative;
}

.dropdown .dropbtn {
    font-size: 16px;
    outline: none;
    color: white;
    border: 2px solid #EF7F19;

}

.dropdown:hover .dropbtn {
    background-color: black;
}

.dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    top: 130%;
    background-color: #EF7F19;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-content a {
    color: #ffffff;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
}

.dropdown-content a:hover {
    background-color: #000;
}
*/
/*.dropdown:hover .dropdown-content,
.dropdown>button:focus+.dropdown-content {
    display: block;
}*/
/*
.dropdown>button:focus+.dropdown-content {
    display: block;
}*/
</style>
