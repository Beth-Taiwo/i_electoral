<template>
<div>
    <div class="title heading">
        <h3>All Positions</h3>
        <button><i class='bx bx-plus-medical' @click="showAddModal"></i></button>
    </div>
    <modal :close="closeModal" v-show="showModal" @form-save="showPositionData">
        <template v-slot:title>
            <h5 class="modal-title" id="exampleModalLabel">Add Position</h5>
        </template>
        <template v-slot:content>
            <form>
                <div class="form-group">
                    <label for="election-name" class="col-form-label">Position Title</label>
                    <input v-model="position.positionName" type="text" class="form-control" id="election-name">
                </div>
            </form>
        </template>

    </modal>
    <positionTable :positions="positiondata" />

</div>
</template>

<script>
import modal from '../../components/modal';
import positionTable from '../../components/positionTable';
export default {
    components: {
        modal,
        positionTable
    },
    data() {
        return {
            showModal: false,
            position: {
                positionName: "",

            },
            positiondata: []
        }
    },
    methods: {
        showAddModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false
        },
        showPositionData() {
            console.log(this.position);
            this.positiondata.push({
                ...this.position
            });
            this.showModal = false;
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
