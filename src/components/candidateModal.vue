<template>
<modal :close="closeModal" @formsave="addCandidate">
    <template v-slot:title>
        <h5 class="modal-title">Add Candidate</h5>
    </template>
    <template v-slot:content>
        <form>
            <div class="form-group mb-0">
                <label for="candidate-name" class="col-form-label">Candidate name</label>
                <input v-model="candidate.full_name" type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="message-text" class="col-form-label">Bio</label>
                <textarea class="form-control" v-model="candidate.bio" id="message-text"></textarea>
            </div>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Position</label>
                </div>
                <select v-model="selectedPosition" class="custom-select" id="inputGroupSelect01">
                    <option value="">Choose...</option>
                    <option :value="position.id" :key="position.id" v-for="position in positions">{{ position.title}}</option>
                </select>
            </div>

            <div>
                <input :src="candidate.avatar" type="file" @change="previewImage">
                <div id="preview-area" v-if="photo">
                    <img :src="photo" alt="" width="100" height="100">
                    <p>
                        <button @click.prevent="removeImage">Remove</button>
                    </p>
                </div>
            </div>
        </form>
    </template>

</modal>
</template>

<script>
import Modal from '../components/modal';
import {
    createCandidate,
    getPositions,
    updateCandidate
} from "../services/apiService";
export default {
    props: ['closeModal', 'onCandidateCreated', 'onCandidateUpdated', 'editableCandidate', 'positionId', 'electionId'],
    components: {
        Modal
    },
    data() {
        return {
            candidate: {},
            positions: [],
            selectedPosition: '',
            photo: null,
            avatar: null
        }
    },
    mounted() {
        if (this.editableCandidate) {
            this.candidate = {
                ...this.editableCandidate
            }
        }
        getPositions()
            .then((res) => {
                if (res?.data) {
                    this.positions = res.data.data;
                    // this.onCandidateCreated(res.data.data)
                }
            })
            .catch((err) => {
                return err
            })
    },
    methods: {
        addCandidate() {
            if (!this.editableCandidate) {
                const data = new FormData();
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }
                data.append('avatar', this.candidate.avatar);
                data.append('full_name', this.candidate.full_name);
                data.append('bio', this.candidate.bio);

                createCandidate(this.selectedPosition, data, config)
                    .then(response => {
                        if (response?.data) {
                            console.log(response.data.data);
                            this.onCandidateCreated(response.data.data);
                        }
                    })
            } else {
                updateCandidate(this.candidate.id, this.candidate)
                    .then(response => {
                        if (response?.data) {
                            this.onCandidateUpdated(response.data.data);
                        }
                    })
            }
        },
        previewImage(e) {
            const file = e.target.files[0];
            this.candidate.avatar = file;
            let reader = new FileReader();
            reader.onload = (e) => {
                this.photo = e.target.result;
            }
            reader.readAsDataURL(file);
        },
        removeImage() {
            this.photo = null
        }
    },

}
</script>
