<template>
<div style="width: inherit; height: inherit">
    <navbar />
    <section id="content">
        <router-view />
    </section>
    <footerView />
</div>
</template>

<script>
import navbar from '../../components/navbar';
import footerView from '../../components/footer';
export default {
    components: {
        navbar,
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
