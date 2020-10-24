<template>
<div>
    <div class="title heading">
        <h3>All Candidates</h3>
        <button><i class='bx bx-plus-medical' @click="showAddModal"></i></button>
    </div>

    <modal :close="closeModal" v-show="showModal">
        <template v-slot:title>
            <h5 class="modal-title" id="exampleModalLabel">Add Candidate</h5>
        </template>
        <template v-slot:content>
            <form>
                <div class="form-group mb-0">
                    <label for="election-name" class="col-form-label">Candidate name</label>
                    <input type="text" class="form-control" id="election-name">
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Manifesto</label>
                    <textarea class="form-control" value="Election theme" id="message-text"></textarea>
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">Position</label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">President</option>
                        <option value="2">Secretary</option>
                        <option value="3">Treasurer</option>
                    </select>
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                </div>
                <div>
                    <input type="file" name="image" id="image">
                </div>

            </form>
        </template>

    </modal>
</div>
</template>

<script>
import modal from '../../components/modal'
export default {
    components: {
        modal
    },
    data() {
        return {
            showModal: false
        }
    },
    methods: {
        showAddModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false
        }
    }
}
</script>

<style scoped>
.heading>button {
    margin-right: 25px;
    outline: none;
    border: none;

}

button {
    height: 25px;
    background: #27AE60;
    color: #ffffff;
}
</style>
