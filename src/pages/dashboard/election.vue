<template>
<div>
    <div class="title heading">
        <h3>All Elections</h3>
        <button><i class='bx bx-plus-medical' @click="showAddModal"></i></button>
    </div>
    <modal :close="closeModal" v-show="showModal" @form-save="showElectionData">
        <template v-slot:title>
            <h5 class="modal-title" id="exampleModalLabel">Add Election</h5>
        </template>
        <template v-slot:content>
            <form>
                <div class="form-group mb-0">
                    <label for="election-name" class="col-form-label">Election name</label>
                    <input v-model="election.electionName" type="text" class="form-control" id="election-name">
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Tag line</label>
                    <textarea v-model="election.tagline" class="form-control" id="message-text"></textarea>
                </div>
                <div class="form-group">
                    <label for="">Start Time</label>
                    <input v-model.lazy="election.startTime" type="time" name="startTime" id="startTime">
                </div>
                <div class="form-group">
                    <label for="">End Time</label>
                    <input v-model.lazy="election.endTime" type="time" name="endTime" id="endTime">
                </div>
            </form>
        </template>

    </modal>

    <entityTable :elections="electiondata" />

</div>
</template>

<script>
import modal from '../../components/modal';
import entityTable from '../../components/entityTable';
export default {
    components: {
        modal,
        entityTable
    },
    data() {
        return {
            showModal: false,
            name: "",
            election: {
                electionName: "",
                tagline: "",
                startTime: "",
                endTime: "",
            },
            electiondata: []
        }
    },
    methods: {
        showAddModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false
        },
        showElectionData() {
            console.log(this.election);
            this.electiondata.push({
                ...this.election
            });
            this.showModal = false;
            this.election.electionName = "";
            this.election.tagline = "";
            this.election.startTime = "";
            this.election.endTime = "";

        }
    },
    beforeCreate() {
        // alert("Before created")
    },
    created() {
        // alert("Created")
    },
    beforeMount() {
        // alert("Before mounted")
    },
    mounted() {
        alert("mounted");
    },
    beforeUpdate() {
        alert("before updated")
    },
    beforeUnmount() {
        alert("before unmounted")
        console.log(this.electiondata);
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
