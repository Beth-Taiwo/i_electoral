<template>
<div style="width: inherit; height: inherit">
    <navbar />
    <sideBar />
    <section id="content">
        <router-view />
    </section>
    <footerView />
</div>
</template>

<script>
import navbar from '../../components/navbar';
import footerView from '../../components/footer';
import sideBar from '../../components/sidebar';
export default {
    components: {
        navbar,
        sideBar,
        footerView
    }
}
</script>

<style scoped>
#content {
    background: #ffffff;
    width: calc(100% - 160px);
    position: relative;
    left: 160px;
    height: calc(100% - 90px);
    overflow-y: auto;
    overflow-x: hidden;
}
</style>
