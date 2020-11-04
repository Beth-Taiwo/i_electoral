<template>
<div>
    <div class="title heading">
        <h3>Elections</h3>
    </div>
    <div class="container">
        <p v-show="loading" style="text-align: center; padding: 20px; color: rgb(73, 67, 67)">
            No election at this moment
        </p>
        <div v-if="election">
            <router-link class="router" to="/dashboard/elections"><i class='bx bx-chevron-left'></i><span>Back</span> </router-link>
            <div class="card">
                <div class="card-header">
                    <div>
                        <h2>{{ election.name }}</h2>
                        <p>Created at: {{ election.created_at }}</p>
                    </div>
                    <button :class="statusColor">{{ election.status }}</button>
                </div>
                <div class="card-body">
                    <h4 class="card-title">Description</h4>
                    <p class="card-text">{{ election.description }}</p>
                </div>

                <div class="card-body">
                    <h4 class="card-title">Available positions</h4>
                    <ul class="card-text" v-for="position in election.positions" :key="position.id">
                        <li>{{ position.title }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import {
    viewElection
} from '../../services/apiService';
export default {
    data() {
        return {
            loading: true,
            election: null,
        }
    },
    computed: {
        statusColor() {
            if (this.election.status == 'ongoing') {
                return 'btn btn-success';
            }
            if (this.election.status == 'ended') {
                return 'btn btn-danger';
            }
            return 'btn btn-warning';
        }
    },
    mounted() {
        const electionId = this.$route.params.id
        viewElection(electionId)
            .then((res) => {
                this.loading = false;
                this.election = res.data.data;
                this.positions = res.data.data.positions;
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
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
</style>
