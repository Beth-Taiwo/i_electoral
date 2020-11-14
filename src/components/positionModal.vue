<template>
<modal :close="closeModal" @formsave="addPosition">
    <template v-slot:title>
        <h5 class="modal-title">Add Position</h5>
    </template>
    <template v-slot:content>
        <form>
            <div class="form-group">
                <label for="election-name" class="col-form-label">Position Title</label>
                <input v-model="position.title" type="text" class="form-control" id="election-name" />

                <label for="election-name" class="col-form-label">Description</label>
                <textarea v-model="position.description" class="form-control" id="election-description"></textarea>
            </div>
        </form>
    </template>
</modal>
</template>

<script>
import swal from '../common/alert';
import Modal from "../components/modal";
import {
    createPosition
} from "../services/apiService";
export default {
    props: ["closeModal", "electionId", "onPositionCreated"],
    components: {
        Modal,
    },
    data() {
        return {
            position: {},
        };
    },
    methods: {
        addPosition() {
            createPosition(this.electionId, this.position).then((response) => {
                if (response?.data) {
                    this.onPositionCreated(response.data.data);
                    swal.success()

                }
            });
        },
    },
};
</script>
