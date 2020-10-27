<template>
<div class="container">
    <table class="table table-bordered">
        <thead class="thead-light">
            <tr>
                <th>Name</th>
                <th>Tagline</th>
                <th>Start Date-Time</th>
                <th>End Date-Time</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(elect, index) of elections" :key="index">
                <td>{{ elect.electionName }}</td>
                <td>{{ elect.tagline }}</td>
                <td>{{ elect.startDateTime }}</td>
                <td>{{ elect.endDateTime }}</td>

                <td><button type="button" class="btn green-btn btn-xs start">Start</button></td>
                <td>
                    <button type="button" name="edit" class="btn btn-primary btn-xs edit" @click="fetchData(elect)">Manage
                    </button>
                    <!--<router-link class="btn btn-primary btn-xs edit" to="/dashboard/election/election-detail">Manage</router-link> -->
                </td>
                <td><button type="button" name="delete" class="btn btn-danger btn-xs delete" @click="deleteData(elections.indexOf('elect'))">Delete</button></td>
            </tr>

        </tbody>
    </table>

    <!--Update Modal -->
    <!-- <updateModal :close="closeModal" v-show="editShowModal" @updateform-save="updatedfield"> -->
    <updateModal :close="closeModal" v-show="editShowModal">
        <template v-slot:title>
            <h5 class="modal-title" id="exampleModalLabel">Update Election</h5>
        </template>
        <template v-slot:content>
            <form>
                <div class="form-group mb-0">
                    <label for="election-name" class="col-form-label">Election name</label>
                    <input v-model="editElection.electionName" type="text" class="form-control" id="election-name">
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Tag line</label>
                    <textarea v-model="editElection.tagline" class="form-control" id="message-text"></textarea>
                </div>
                <div class="form-group">
                    <label for="">Start DateTime</label>
                    <input v-model.lazy="editElection.startDateTime" type="datetime-local" name="startTime" id="startTime">
                </div>
                <div class="form-group">
                    <label for="">End DateTime</label>
                    <input v-model.lazy="editElection.endDateTime" type="datetime-local" name="endTime" id="endTime">
                </div>
            </form>
        </template>

    </updateModal>

</div>
</template>

<script>
import updateModal from './updateModal'
export default {
    props: ["elections", "update"],
    components: {
        updateModal
    },
    data() {
        return {
            // electionD: []
            editShowModal: false,
            editElection: {},
            electiondata: []
        }
    },
    methods: {
        fetchData(election) {
            console.log("Working");
            this.editShowModal = true;
            this.editElection = {
                ...election
            }
        },
        closeModal() {
            this.editShowModal = false
        },
        showElectionData() {
            console.log(this.editElection);
            this.electiondata.push({
                ...this.editElection
            });
            this.showModal = false;

        },
        updatedfield() {
            this.electiondata = this.electiondata.map(election => {
                if (election.id == this.editElection.id || election.electionName == this.editElection.electionName) {
                    return this.editElection
                }
                return election
            });

            this.editElection = {};
        }
    }
}
</script>

<style scoped>
.green-btn {
    background: #27AE60;
}
</style>
