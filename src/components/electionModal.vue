<template>
<modal :close="closeModal" @formsave="addElection">
    <template v-slot:title>
        <h5 class="modal-title">{{formTitle}}</h5>
    </template>
    <template v-slot:content>
        <form>
            <div class="form-group mb-0">
                <label for="election-name" class="col-form-label">Election name</label>
                <input v-model="election.name" type="text" class="form-control" id="election-name" />
            </div>
            <div class="form-group">
                <label for="election-description" class="col-form-label">Description</label>
                <input v-model="election.description" type="text" class="form-control" />
            </div>

            <div class="form-group">
                <label for="">Start DateTime</label>
                <input v-model.lazy="election.start_period" type="datetime-local" name="startTime" id="startTime" />
            </div>
            <div class="form-group">
                <label for="">End DateTime</label>
                <input v-model.lazy="election.end_period" type="datetime-local" name="endTime" id="endTime" />
            </div>
        </form>
    </template>
</modal>
</template>

<script>
import Modal from '../components/modal';
import {
    createElection,
    updateElection
} from "../services/apiService";

export default {
    components: {
        Modal
    },
    data() {
        return {
            election: {}
        }
    },

    computed: {
        formTitle() {
            return this.editableElection ? 'Update Election' : 'Add Election'
        }
    },

    mounted() {
        this.editableElection ? this.election = {
            ...this.editableElection
        } : {};
    },
    methods: {
        addElection() {
            if (!this.editableElection) {
                createElection(this.election)
                    .then(response => {
                        if (response?.data.data) {
                            // this.onElectionCreated(response.data.data);
                        }
                    })
            } else {
                updateElection(this.election.id, this.election)
                    .then(response => {
                        if (response?.data) {
                            alert(response.message);
                            this.onElectionUpdated(response.data);
                        }
                    })
            }
        }
    },
    props: ['closeModal', 'onElectionCreated', 'onElectionUpdated', 'editableElection', 'onElectionDel']
}
</script>
