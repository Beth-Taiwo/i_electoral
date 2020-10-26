<template>
<div>
    <div class="title heading">
        <h3>All Voters</h3>
        <button><i class='bx bx-plus-medical' @click="showAddModal"></i></button>
    </div>
    <modal :close="closeModal" v-show="showModal" @form-save="showVoterData">
        <template v-slot:title>
            <h5 class="modal-title" id="exampleModalLabel">Add Voter</h5>
        </template>
        <template v-slot:content>
            <form>
                <div class="form-group mb-0">
                    <label for="election-name" class="col-form-label">Voter name</label>
                    <input v-model="voter.fullName" type="text" placeholder="Full Name" class="form-control" id="voter-name">
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Email</label>
                    <input v-model="voter.email" type="email" class="form-control" id="email">
                </div>
            </form>
        </template>

    </modal>
    <voterTable :voters="voterdata" />
</div>
</template>

<script>
import modal from '../../components/modal';
import voterTable from '../../components/voterTable';
export default {
    components: {
        modal,
        voterTable
    },
    data() {
        return {
            showModal: false,
            voter: {
                fullName: "",
                email: "",
                status: "not voted"
            },
            voterdata: []
        }
    },
    methods: {
        showAddModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false
        },
        showVoterData() {
            console.log(this.voter);
            this.voterdata.push({
                ...this.voter
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
