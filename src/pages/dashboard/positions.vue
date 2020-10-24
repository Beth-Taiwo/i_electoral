<template>
<div>
    <div class="title heading">
        <h3>All Positions</h3>
        <button><i class='bx bx-plus-medical' @click="showAddModal"></i></button>
    </div>
    <modal :close="closeModal" v-show="showModal">
        <template v-slot:title>
            <h5 class="modal-title" id="exampleModalLabel">Add Position</h5>
        </template>
        <template v-slot:content>
            <form>
                <div class="form-group">
                    <label for="election-name" class="col-form-label">Position Title</label>
                    <input type="text" class="form-control" id="election-name">
                </div>

                <div class="input-group mb-3 form-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">Max candidate</label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
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
