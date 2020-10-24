<template>
<div>
    <div class="title heading">
        <h3>All Voters</h3>
        <button><i class='bx bx-plus-medical' @click="showAddModal"></i></button>
    </div>
    <modal :close="closeModal" v-show="showModal">
        <template v-slot:title>
            <h5 class="modal-title" id="exampleModalLabel">Add Voter</h5>
        </template>
        <template v-slot:content>
            <form>
                <div class="form-group mb-0">
                    <label for="election-name" class="col-form-label">Voter name</label>
                    <input type="text" placeholder="First Name" class="form-control" id="voter-name">
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Email</label>
                    <input type="email" class="form-control" id="email">

                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">Status</label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">Voted</option>
                        <option value="2">Not voted</option>
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
