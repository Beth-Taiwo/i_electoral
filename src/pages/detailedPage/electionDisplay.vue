<template>
<div>
    <div class="title heading">
        <h3>All Elections</h3>
        <button><i class="bx bx-plus-medical" @click="showAddModal"></i></button>
    </div>

    <electionModal :editableElection="editableElection" :onElectionCreated="onElectionCreated" :onElectionUpdated="onElectionUpdated" :closeModal="closeModal" v-if="showModal" />

    <entityTable v-if="electiondata.length > 0" :elections="electiondata" :onManageElection="manageElection" :ondelete="deleteElection" />

    <!--Using components for displaying notification -->
    <notify :nodata="nodata" :isLoading="isLoading" :isLoadingError="isLoadingError">
        <template v-slot:nodata>
            No election at this moment
        </template>

    </notify>
</div>
</template>

<script>
import swal from 'sweetalert';
import {
    getElections,
    deleteElectionByID
} from "../../services/apiService";

import entityTable from "../../components/entityTable";
import electionModal from "../../components/electionModal";
import notify from '../../components/notification';
export default {
    components: {
        entityTable,
        electionModal,
        notify
    },
    data() {
        return {
            showModal: false,
            name: "",
            electiondata: [],
            editableElection: null,
            isLoading: false,
            isLoadingError: false,
            nodata: false,
        };
    },

    mounted() {
        this.getData();
    },

    methods: {
        getData() {
            this.isLoading = true;
            this.nodata = this.electiondata.length <= 0 && !this.isLoading;
            getElections()
                .then((response) => {
                    if (response?.data.data) {
                        this.electiondata = response.data.data;
                    }
                })
                .catch(() => {
                    this.isLoadingError = true;
                })
                .then(() => {
                    this.isLoading = false;
                    this.nodata = this.electiondata.length <= 0 && !this.isLoading && !this.isLoadingError;

                });
        },
        showAddModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
            this.editableElection = null;
        },
        onElectionCreated() {
            this.getData();
            this.closeModal();
            swal({
                title: "All Good!",
                text: "Operation successfull",
                icon: "success"
            })
        },

        onElectionUpdated(election) {
            this.electiondata = this.electiondata.map(x_election => {
                if (x_election.id === election.id) {
                    return election;
                }
                return x_election;
            });
            this.closeModal();
            this.getData();
            swal({
                title: "All Good!",
                text: "Operation successfull",
                icon: "success"
            })
        },
        manageElection(election) {
            this.editableElection = election;
            this.showAddModal();
        },

        deleteElection(id) {
            swal("Are you sure?", {
                dangerMode: true,
                icon: "warning",
                buttons: true,
            }).then((confirmed) => {
                if (confirmed) {
                    //delete request
                    deleteElectionByID(id)
                        .then(() => {
                            this.getData();
                            swal({
                                title: "All Good!",
                                text: "Operation successfull",
                                icon: "success"
                            })

                        })
                        .catch((err) => {
                            console.log(err);
                            swal({
                                text: "Unable to delete,try again after some time",
                                icon: "error"
                            })
                        })
                }
            })
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
