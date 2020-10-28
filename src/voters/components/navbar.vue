<template>
<div>
    <nav>
        <h3>iElectoral</h3>
    </nav>
    <section id="list">
        <ul>
            <li>Dashboard</li>
            <li>Logout</li>
        </ul>
    </section>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
nav {
    /* position: relative;*/
    width: 100%;
    padding: 24px 24px;
    background: #EF7F19;
    color: #ffffff;
}

nav h3 {
    font-size: 18px;
    margin: 0;
}

#list {
    border-bottom: 1px solid rgb(0 0 0 / 10%);
}

ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0px;
    margin-right: 64px;
}

ul>li {
    text-align: center;
    padding: 6px 12px;
    list-style: none;
    letter-spacing: 1px;
    color: #666;
    cursor: pointer;
}

ul>li:hover {
    background: #aaa;
    color: #fff;
}
</style>
