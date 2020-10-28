<template>
<div class="container">
    <table class="table table-bordered">
        <thead class="thead-light">
            <tr>
                <th>Name</th>
                <th>Start period</th>
                <th>End period</th>
                <th colspan="3">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="election of elections" :key="election.id">
                <td>{{ election.name }}</td>
                <td>{{ election.start_time }}</td>
                <td>{{ election.end_time }}</td>

                <td>
                    <button type="button" class="btn green-btn btn-xs start">
                        Start
                    </button>
                </td>
                <td>
                    <button type="button" name="edit" class="btn btn-primary btn-xs edit" @click="() => onManageElection(election)">
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
// import updateModal from './updateModal'
export default {
    props: ["elections", "update", "onManageElection", "ondelete"],
    components: {
        // updateModal
    },
    data() {
        return {
            // electionD: []
            editShowModal: false,
            editElection: {},
            electiondata: [],
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
    },
};
</script>

<style scoped>
.green-btn {
    background: #27ae60;
}
</style>
