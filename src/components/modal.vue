<template>
<div @click.self="close" class="modal fade show" style="display: block!important" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <slot name="title" />
                <button @click="close" type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <slot name="content" />
            </div>
            <div class="modal-footer">
                <button @click="close" type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="modalSaved">Save</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['close'],
    data() {
        return {
            name: "",
            content: ""
        }
    },
    methods: {
        modalSaved(event) {
            event.preventDefault();
            this.$emit("formsave")
        }
    }
}
</script>

<style scoped>
.modal.show {
    background-color: rgba(0, 0, 0, 0.6);
}
</style>
