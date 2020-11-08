<template>
<div>
    <p v-show="nodata" style="text-align: center; padding: 20px; color: rgb(73, 67, 67)">
        <slot name="nodata" />
    </p>

    <div v-show="isLoading">
        <div class="d-flex justify-content-center mt-5">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
    <div v-show="isLoadingError" class="alert alert-danger text-center mt-5 mx-5" role="alert">
        Unable to get data, please check your internet connection and refresh
    </div>

</div>
</template>

<script>
export default {
    props: ['isLoading', 'isLoadingError', 'nodata']
}
</script>
