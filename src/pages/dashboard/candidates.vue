<template>
<div>
    <div class="title heading">
        <h3>All Candidates</h3>
        <button><i class='bx bx-plus-medical' @click="showAddModal"></i></button>
    </div>

    <candidateModal :editableCandidate="editableCandidate" :onCandidateCreated="onCandidateCreated" :onCandidateUpdated="onCandidateUpdated" :closeModal="closeModal" v-if="showModal" />
    <candidateTable v-if="candidatedata.length > 0" :candidates="candidatedata" :onManageCandidate="manageCandidate" />
    <p v-else style="text-align: center; padding: 20px; color: rgb(73, 67, 67)">
        No candidate at this moment
    </p>
</div>
</template>

<script>
import {
    getCandidates
} from "../../services/apiService";
import candidateTable from '../../components/candidateTable';
import candidateModal from '../../components/candidateModal';

export default {
    components: {
        candidateModal,
        candidateTable
    },
    data() {
        return {
            showModal: false,
            fullname: "",
            editableCandidate: null,
            candidatedata: []
        }
    },
    mounted() {
        getCandidates().then((res) => {
            if (res?.data) {
                this.candidatedata = res.data;
            }
        })
    },
    methods: {
        showAddModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false
        },
        onCandidateCreated(candidate) {
            this.candidatedata = [...this.candidatedata, candidate];
            this.closeModal();
        },

        onCandidateUpdated(candidate) {
            this.candidatedata = this.candidatedata.map(x_candidate => {
                if (x_candidate.id === candidate.id) {
                    return candidate;
                }
                return x_candidate;
            });
            this.closeModal();
        },
        manageCandidate(candidate) {
            this.editableCandidate = candidate;
            this.showAddModal();
        },
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
