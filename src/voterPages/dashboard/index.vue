<template>
<div style="width: inherit; height: inherit">
    <voternav />
    <section id="list">
        <ul>
            <li>Dashboard</li>
            <li>Logout</li>
        </ul>
    </section>
    <section id="content">
        <router-view />
    </section>
    <footerView />
</div>
</template>

<script>
import voternav from '../../components/voterNav';
import footerView from '../../components/footer';
export default {
    components: {
        voternav,
        footerView
    }
}
</script>

<style scoped>
#content {
    background: #ffffff;
    width: calc(100% - 160px);
    width: 100%;
    position: relative;
    left: 0;
    height: calc(100% - 40px);
    height: 78%;
    overflow-y: auto;
    overflow-x: hidden;
}

#list {
    border-bottom: 1px solid rgb(0 0 0 / 10%);
}

ul {
    display: flex;
    justify-content: flex-end;
    margin-right: 64px;
}

ul>li {
    text-align: center;
    padding-right: 36px;
    list-style: none;

}
</style>
