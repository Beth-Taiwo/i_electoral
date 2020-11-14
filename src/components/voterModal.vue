<template>
<modal :close="closeModal" @formsave="addVoter">
    <template v-slot:title>
        <h5 class="modal-title" id="exampleModalLabel">{{formTitle}}</h5>
    </template>
    <template v-slot:content>
        <form>
            <div class="form-group mb-0">
                <label for="voter-name" class="col-form-label">Voter name</label>
                <input v-model="voter.full_name" type="text" placeholder="Enter your full name" class="form-control" id="voter-name" />
            </div>
            <div v-show="!editableVoter" class="form-group">
                <label for="message-text" class="col-form-label">Email</label>
                <input v-model="voter.email" type="email" class="form-control" id="email" />
            </div>

            <div v-show="!editableVoter" class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Election</label>
                </div>
                <select v-model="voter.election_id" class="custom-select" id="inputGroupSelect01">
                    <option value="" disabled>Choose...</option>
                    <option :value="election.id" :key="election.id" v-for="election in elections">{{ election.name}}</option>
                </select>
            </div>
        </form>
    </template>
</modal>
</template>

<script>
import modal from "../components/modal";
import {
    registerVoter,
    updateVoter,
    getElections
} from "../services/apiService";
export default {
    props: ["closeModal", "onVoterCreated", "onVoterUpdated", "editableVoter", "electionId"],
    components: {
        modal,
    },
    data() {
        return {
            voter: {},
            elections: [],
        };
    },
    computed: {
        formTitle() {
            return this.editableVoter ? 'Update Voter' : 'Add Voter'
        }
    },
    mounted() {
        if (this.editableVoter) {
            this.voter = {
                ...this.editableVoter
            }
        }
        getElections()
            .then(res => {
                if (res?.data) {
                    this.elections = res.data.data;
                }
            })
            .catch(err => {
                return err
            })
    },
    methods: {
        addVoter() {
            if (!this.editableVoter) {
                registerVoter(this.voter).then((res) => {
                    if (res?.data.data) {
                        this.onVoterCreated(res.data.data);
                    }
                });
            } else {
                updateVoter(this.voter.id, this.voter)
                    .then((res) => {
                        if (res?.data.data) {
                            this.onVoterUpdated(res.data.data);
                        }
                    });
            }
        },
    },
};
</script>
