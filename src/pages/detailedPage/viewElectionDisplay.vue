<template>
<div>
    <div class="title heading">
        <h3>Election</h3>
    </div>
    <notify :nodata="false" :isLoading="isLoading" :isLoadingError="isLoadingError">
        <template v-slot:nodata>
            No election at this moment
        </template>

    </notify>

    <div class="container">
        <div v-if="election">
            <router-link class="router" to="/dashboard/elections"><i class="bx bx-chevron-left"></i><span>Back</span>
            </router-link>
            <div class="card">
                <div class="card-header">
                    <div>
                        <h2>{{ election.name }}</h2>
                        <p>Created on: {{ createdTime }}</p>
                    </div>

                    <div>
                        <button :class="statusColor" v-if="election.status != 'ended'" disabled>{{ election.status }}</button>

                        <router-link v-else :class="statusColor" :to="`/dashboard/elections/${election.id}/results`"><span>view results</span></router-link>
                    </div>

                </div>
                <div class="card-body">
                    <h4 class="card-title">Description</h4>
                    <p class="card-text">{{ election.description }}</p>
                </div>

                <div class="card-body">
                    <div class="card-title-div">
                        <h4 class="card-title">Available positions</h4>
                        <button class="btn btn-secondary" @click="showAddModal" v-if="election.status != 'ended'">
                            Add
                        </button>
                    </div>

                    <ul class="card-text">
                        <li v-for="position in election.positions" :key="position.id" class="mt-2">
                            <span>{{ position.title }}</span>
                            <button class="btn btn-danger" @click="ondelete(position.id)">
                                Del</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <positionModal :closeModal="closeModal" :onPositionCreated="onPositionCreated" v-if="showModal" :electionId="election.id" />
</div>
</template>

<script>
import swal from '../../common/alert';
import notify from '../../components/notification';
import moment from "moment";
import {
    viewElection,
    deletePosition
} from "../../services/apiService";
import positionModal from "../../components/positionModal";
export default {
    components: {
        positionModal,
        notify
    },
    data() {
        return {
            election: null,
            createdTime: null,
            showModal: false,
            positiondata: [],
            isLoading: false,
            isLoadingError: false,
        };
    },
    computed: {
        statusColor() {
            if (this.election.status == "ongoing") {
                return "btn btn-success";
            }
            if (this.election.status == "ended") {
                return "btn btn-secondary";
            }
            return "btn btn-warning";
        },
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
            const electionId = this.$route.params.id;
            this.isLoading = true;
            viewElection(electionId)
                .then((res) => {
                    this.loading = false;
                    this.election = res.data.data;
                    this.positions = res.data.data.positions;
                    this.createdTime = moment(this.election.created_at).format(
                        "dddd, MMMM Do YYYY, h:mm:ss a"
                    );
                })
                .catch(() => {
                    this.isLoadingError = true;
                })
                .then(() => {
                    this.isLoading = false;
                });
        },
        showAddModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        onPositionCreated() {
            this.getData();
            this.closeModal();
        },
        ondelete(id) {
            swal.confirm("Are you sure?", (confirmed) => {
                if (confirmed) {
                    deletePosition(id)
                        .then(() => {
                            this.getData();
                            swal.success()
                        })
                        .catch((err) => {
                            console.log(err);
                            swal.error("Unable to delete election, this might be a connection problem. Try again after some time")
                        });

                }
            })

        },
    },
};
</script>

<style scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.router {
    display: flex;
    width: 52px;
    align-items: center;
    text-decoration: none;

}

.card-body>.card-title-div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

ul {
    padding: 0;
    list-style-type: initial;
}

ul li {
    display: flex;
    justify-content: space-between;
}

li span {
    display: block;
}

.card-text>button {
    margin-left: 50px;
    padding: 3px 6px;
}
</style>
