<template>
<div>
    <div class="title heading">
        <h3>Positions</h3>
    </div>
    <div class="container">
        <p v-show="loading" style="text-align: center; padding: 20px; color: rgb(73, 67, 67)">
            No position at this moment
        </p>
        <div v-if="position">
            <router-link class="router" to="/dashboard/positions"><i class='bx bx-chevron-left'></i><span>Back</span> </router-link>
            <div class="card">
                <div class="card-header">
                    <div>
                        <h2>{{ position.name }}</h2>
                        <p>Created on: {{ createdTime }}</p>
                    </div>
                    <button :class="statusColor">{{ position.status }}</button>
                </div>
                <div class="card-body">
                    <h4 class="card-title">Description</h4>
                    <p class="card-text">{{position.description }}</p>
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
// import moment from 'moment';
import {
    viewPosition
} from '../../services/apiService';
export default {
    data() {
        return {
            loading: true,
            position: null,
            createdTime: null
        }
    },
    computed: {
        statusColor() {
            if (this.position.status == 'ongoing') {
                return 'btn btn-success';
            }
            if (this.position.status == 'ended') {
                return 'btn btn-danger';
            }
            return 'btn btn-warning';
        }
    },
    mounted() {
        const positionId = this.$route.params.id
        viewPosition(positionId)
            .then((res) => {
                this.loading = false;
                console.log(res)
                // this.position = res.data.data;
                // this.positions = res.data.data.positions;
                // this.createdTime = moment(this.position.created_at).format("dddd, MMMM Do YYYY, h:mm:ss a")
            })
            .catch((error) => {
                console.log(error)
            })
    },
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
