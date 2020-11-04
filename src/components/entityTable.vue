<template>
<div class="container">
    <table class="table table-bordered">
        <thead class="thead-light">
            <tr>
                <th>Name</th>
                <th colspan="4" style="text-align: center">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="election of elections" :key="election.id">
                <td>{{ election.name }}</td>
                <td>
                    <router-link :to="`/dashboard/elections/${election.id}`" style="text-decoration: underline"> click for details</router-link>
                </td>
                <td style="text-align: center">
                    <button v-if="election.status != 'ended'" type="button" style="color:#fff;" class="btn green-btn btn-xs" @click="startStopElection(election.id, election.status)">
                        {{ election.status == 'ongoing' ? 'Stop': 'Start' }}
                    </button>
                    <p v-else>{{election.status}}</p>
                </td>
                <td>
                    <button type="button" style="color:#fff;" name="edit" class="btn btn-primary btn-xs edit" @click="() => onManageElection(election)">
                        Manage
                    </button>

                </td>
                <td>
                    <button type="button" name="delete" class="btn btn-danger btn-xs delete" @click="() => ondelete(election.id)">
                        Delete
                    </button>
                </td>
            </tr>
        </tbody>
    </table>

</div>
</template>

<script>
import {
    updateElection
} from '../services/apiService';
export default {
    props: ["elections", "update", "onManageElection", "ondelete"],
    components: {

    },
    data() {
        return {
            editShowModal: false,
            editElection: {},
            electiondata: [],
            electionStatus: {}
        };
    },
    methods: {
        closeModal() {
            this.editShowModal = false;
        },

        updatedfield() {
            this.electiondata = this.electiondata.map((election) => {
                if (
                    election.id == this.editElection.id ||
                    election.electionName == this.editElection.electionName
                ) {
                    return this.editElection;
                }
                return election;
            });

            this.editElection = {};
        },
        startStopElection(id, status) {

            updateElection(id, {
                    status: status === 'ongoing' ? 'ended' : 'ongoing'
                })
                .then((res) => {
                    return res

                })
                .catch((err) => {
                    console.log(err)
                });
        },
        statusBtnText(item) {
            if (item.status == 'ongoing') {
                return 'End';
            }
            return 'Start';
        }
    },
};
</script>

<style scoped>
.green-btn {
    background: #27ae60;
}

.orange-btn {
    background: #EF7F19;
}
</style>
