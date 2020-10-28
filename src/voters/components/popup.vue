<template>
<div>
    <!-- Modal -->
    <div v-show="popUpModal" style="display: block !important" class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Enter your voting code</h5>
                    <button @click="onClose" type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <input type="text" class="form-control">
                </div>
                <div class="modal-footer">
                    <button @click="onClose" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        popUpModal: Boolean,
        onClose: Function
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.modal {
    background-color: rgba(0, 0, 0, 0.6);
}
</style>
