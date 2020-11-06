<template>
<div>
    <div class="title heading">
        <h3>All Voters</h3>
        <button><i class='bx bx-plus-medical' @click="showAddModal"></i></button>
    </div>
    <voterModal :editableVoter="editableVoter" :onVoterCreated="onVoterCreated" :onVoterUpdated="onVoterUpdated" :closeModal="closeModal" v-if="showModal" />
    <voterTable v-if="voterdata.length > 0" :voters="voterdata" :onManageVoter="manageVoter" :ondelete="deleteElection" />
    <p v-else style="text-align: center; padding: 20px; color: rgb(73, 67, 67)">
        No Voter at this moment
    </p>
</div>
</template>

<script>
import {
    listAllVoters,
    deleteVoterByID
} from "../../services/apiService";
import voterModal from '../../components/voterModal'
import voterTable from '../../components/voterTable';
export default {
    components: {
        voterTable,
        voterModal
    },
    data() {
        return {
            showModal: false,
            name: "",
            editableVoter: null,
            voterdata: []
        }
    },
    mounted() {
        listAllVoters()
            .then((response) => {
                if (response?.data.data) {
                    this.voterdata = response.data.data;
                }
            });
    },

    methods: {
        showAddModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
            this.editableVoter = null;
        },
        onVoterCreated(voter) {
            this.voterdata = [...this.voterdata, voter];
            this.closeModal();
        },

        onVoterUpdated(voter) {
            this.voterdata = this.voterdata.map(x_voter => {
                if (x_voter.id === voter.id) {
                    return voter;
                }
                return x_voter;
            });
            this.closeModal();
        },
        manageVoter(voter) {
            this.editableVoter = voter;
            this.showAddModal();
        },

        deleteVoter(id) {
            //delete request
            deleteVoterByID(id)
                .then((res) => {
                    return res
                })
                .catch((err) => {
                    console.log(err)
                })
            this.voterdata = this.voterdata.filter(voter => voter.id != id)
        }

    },
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
