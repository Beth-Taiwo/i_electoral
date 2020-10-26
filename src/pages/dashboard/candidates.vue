<template>
<div>
    <div class="title heading">
        <h3>All Candidates</h3>
        <button><i class='bx bx-plus-medical' @click="showAddModal"></i></button>
    </div>

    <modal :close="closeModal" v-show="showModal" @form-save="showCandidateData">
        <template v-slot:title>
            <h5 class="modal-title" id="exampleModalLabel">Add Candidate</h5>
        </template>
        <template v-slot:content>
            <form>
                <div class="form-group mb-0">
                    <label for="election-name" class="col-form-label">Candidate name</label>
                    <input v-model="candidate.fullname" type="text" class="form-control" id="election-name">
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
    <candidateTable :candidates="candidatedata" />
</div>
</template>

<script>
import modal from '../../components/modal';
import candidateTable from '../../components/candidateTable';
export default {
    components: {
        modal,
        candidateTable
    },
    data() {
        return {
            showModal: false,
            candidate: {
                fullname: "",
                Bio: "",
                position: "",
                img: "",

            },

            candidatedata: []
        }
    },
    methods: {
        showAddModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false
        },
        showCandidateData() {
            console.log(this.candidate);
            this.candidatedata.push({
                ...this.candidate
            });
            this.showModal = false;
        }
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
