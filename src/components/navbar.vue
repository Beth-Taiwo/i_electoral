<template>
<nav>
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
</nav>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        logOut() {
            this.$router.push("/login");
            console.log("Logout");
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
nav {
    /* position: relative;*/
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

/*.dropdown:hover .dropdown-content,
.dropdown>button:focus+.dropdown-content {
    display: block;
}*/

.dropdown>button:focus+.dropdown-content {
    display: block;
}
</style>
