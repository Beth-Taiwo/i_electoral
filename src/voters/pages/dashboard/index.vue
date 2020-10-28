<template>
<div style="width: inherit; height: inherit">
    <voternav />

    <section id="content">
        <router-view />
    </section>
    <footerView />
</div>
</template>

<script>
import voternav from '../../components/navbar';
import footerView from '../../../components/footer';
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
</style>
