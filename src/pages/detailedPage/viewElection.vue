<template>
<div>
    <div class="title heading">
        <h3>Election</h3>
    </div>
    <div class="container">
        <p v-show="loading" style="text-align: center; padding: 20px; color: rgb(73, 67, 67)">
            No election at this moment
        </p>
        <div v-if="election">
            <router-link class="router" to="/dashboard/elections"><i class="bx bx-chevron-left"></i><span>Back</span>
            </router-link>
            <div class="card">
                <div class="card-header">
                    <div>
                        <h2>{{ election.name }}</h2>
                        <p>Created on: {{ createdTime }}</p>
                    </div>
                    <button :class="statusColor">{{ election.status }}</button>
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
                            <button class="btn btn-danger">Del</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!--<positionModal :editablePosition="editablePosition" :onPositionCreated="onPositionCreated" :onPositionUpdated="onPositionUpdated" :closeModal="closeModal" v-if="showModal" :electionId="election.id" />-->
    <positionModal :closeModal="closeModal" v-if="showModal" :electionId="election.id" />
</div>
</template>

<script>
import moment from "moment";
import {
    viewElection
} from "../../services/apiService";
import positionModal from "../../components/positionModal";
export default {
    components: {
        positionModal,
    },
    data() {
        return {
            loading: true,
            election: null,
            createdTime: null,
            showModal: false,
        };
    },
    computed: {
        statusColor() {
            if (this.election.status == "ongoing") {
                return "btn btn-success";
            }
            if (this.election.status == "ended") {
                return "btn btn-danger";
            }
            return "btn btn-warning";
        },
    },
    mounted() {
        const electionId = this.$route.params.id;
        viewElection(electionId)
            .then((res) => {
                this.loading = false;
                this.election = res.data.data;
                this.positions = res.data.data.positions;
                this.createdTime = moment(this.election.created_at).format(
                    "dddd, MMMM Do YYYY, h:mm:ss a"
                );
            })
            .catch((error) => {
                console.log(error);
            });
    },
    methods: {
        showAddModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
            // this.editablePosition = null;
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
    margin-bottom: 16px;
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
