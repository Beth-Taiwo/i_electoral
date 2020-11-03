<template>
<div>
    <div class="title heading">
        <h3>All Elections</h3>
        <button><i class="bx bx-plus-medical" @click="showAddModal"></i></button>
    </div>
    <electionModal :editableElection="editableElection" :onElectionCreated="onElectionCreated" :onElectionUpdated="onElectionUpdated" :onElectionDel="onElectionDel" :closeModal="closeModal" v-if="showModal" />

    <entityTable v-if="electiondata.length > 0" :elections="electiondata" :onManageElection="manageElection" :ondelete="deleteElection" />
    <p v-else style="text-align: center; padding: 20px; color: rgb(73, 67, 67)">
        No election at this moment
    </p>
</div>
</template>

<script>
import {
    getElections
} from "../../services/apiService";

import entityTable from "../../components/entityTable";
import electionModal from "../../components/electionModal";
export default {
    components: {
        entityTable,
        electionModal,
    },
    data() {
        return {
            showModal: false,
            name: "",
            electiondata: [],
            editableElection: null,
        };
    },

    mounted() {
        getElections().then((response) => {
            if (response?.data.data) {
                this.electiondata = response.data.data;
            }
        });
    },

    methods: {
        showAddModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
            this.editableElection = null;
        },
        onElectionCreated(election) {
            this.electiondata = [...this.electiondata, election];
            this.closeModal();
        },

        onElectionUpdated(election) {
            this.electiondata = this.electiondata.map(x_election => {
                if (x_election.id === election.id) {
                    return election;
                }
                return x_election;
            });
            this.closeModal();
        },
        manageElection(election) {
            this.editableElection = election;
            this.showAddModal();
        },

        onElectionDel(election) {
            this.electiondata = this.electiondata.map(del_election => {
                if (del_election.id === election.id) {
                    return election;
                }
                return del_election;
            });
        },
        deleteElection(id) {
            this.electiondata = this.electiondata.filter(election => election.id != id)
        }

    },
};
</script>

<style scoped>
.heading>button {
    margin-right: 25px;
    outline: none;
    border: none;
}

button {
    height: 25px;
    background: #27ae60;
    color: #ffffff;
}
</style>
