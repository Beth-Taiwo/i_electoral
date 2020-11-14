<template>
<div>
    <div class="title heading">
        <h3>All Voters</h3>
        <button><i class='bx bx-plus-medical' @click="showAddModal"></i></button>
    </div>
    <voterModal :editableVoter="editableVoter" :onVoterCreated="onVoterCreated" :onVoterUpdated="onVoterUpdated" :closeModal="closeModal" v-if="showModal" />
    <voterTable v-if="voterdata.length > 0" :voters="voterdata" :onManageVoter="manageVoter" :ondelete="deleteVoter" />

    <notify :nodata="nodata" :isLoading="isLoading" :isLoadingError="isLoadingError">
        <template v-slot:nodata>
            No Voter at this moment
        </template>

    </notify>
</div>
</template>

<script>
import swal from '../../common/alert';
import notify from '../../components/notification';
import {
    listAllVoters,
    deleteVoterByID
} from "../../services/apiService";
import voterModal from '../../components/voterModal';
import voterTable from '../../components/voterTable';
export default {
    components: {
        voterTable,
        voterModal,
        notify
    },
    data() {
        return {
            showModal: false,
            name: "",
            editableVoter: null,
            voterdata: [],
            isLoading: false,
            isLoadingError: false,
            nodata: false
        }
    },
    mounted() {
        this.getData()
    },

    methods: {
        getData() {
            this.isLoading = true;
            listAllVoters()
                .then((response) => {
                    if (response?.data.data) {
                        this.voterdata = response.data.data;
                    }
                }).catch(() => {
                    this.isLoadingError = true;
                })
                .then(() => {
                    this.isLoading = false;
                    this.nodata = this.voterdata.length <= 0 && !this.isLoading && !this.isLoadingError;
                });
        },
        showAddModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
            this.editableVoter = null;
        },
        onVoterCreated() {
            this.getData();
            this.closeModal();
            swal.success();
        },

        onVoterUpdated(voter) {
            this.voterdata = this.voterdata.map(x_voter => {
                if (x_voter.id === voter.id) {
                    return voter;
                }
                return x_voter;
            });
            this.closeModal();
            swal.success();
        },
        manageVoter(voter) {
            this.editableVoter = voter;
            this.showAddModal();
        },

        deleteVoter(id) {
            swal.confirm("Are you sure?", (confirmed) => {
                if (confirmed) {
                    //delete request
                    deleteVoterByID(id)
                        .then(() => {
                            swal.success();
                            this.getData();
                        })
                        .catch((err) => {
                            console.log(err);
                            swal.error("Unable to delete voter, this might be a connection problem. Try again after some time");
                        })
                }
            })
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
