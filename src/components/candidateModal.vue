<template>
<modal :close="closeModal" @formsave="addCandidate">
    <template v-slot:title>
        <h5 class="modal-title">Add Candidate</h5>
    </template>
    <template v-slot:content>
        <form>
            <div class="form-group mb-0">
                <label for="candidate-name" class="col-form-label">Candidate name</label>
                <input v-model="candidate.fullname" type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="message-text" class="col-form-label">Bio</label>
                <textarea class="form-control" v-model="candidate.Bio" id="message-text"></textarea>
            </div>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Position</label>
                </div>
                <select v-model="candidate.position" class="custom-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value="President">President</option>
                    <option value="Secretary">Secretary</option>
                    <option value="Treasurer">Treasurer</option>
                </select>
            </div>
            <div>
                <input :src="candidate.img" type="file" name="image" id="image">
            </div>

        </form>
    </template>

</modal>
</template>

<script>
import Modal from '../components/modal';
import {
    createCandidate,
    updateCandidate
} from "../services/apiService";
export default {
    props: ['closeModal', 'onCandidateCreated', 'onCandidateUpdated', 'editableCandidate'],
    components: {
        Modal
    },
    data() {
        return {
            candidate: {},
        }
    },
    mounted() {
        if (this.editableCandidate) {
            this.candidate = {
                ...this.editableCandidate
            }
        }
    },
    methods: {
        addCandidate() {
            if (!this.editableCandidate) {
                createCandidate(this.candidate)
                    .then(response => {
                        if (response?.data) {
                            alert(response.message);
                            this.onCandidateCreated(response.data);
                        }
                    })
            } else {
                updateCandidate(this.candidate.id, this.candidate)
                    .then(response => {
                        if (response?.data) {
                            alert(response.message);
                            this.onCandidateUpdated(response.data);
                        }
                    })
            }
        }
    },
}
</script>
