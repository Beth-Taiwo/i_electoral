<template>
<modal :close="closeModal" @formsave="addPosition">
    <template v-slot:title>
        <h5 class="modal-title">Add Position</h5>
    </template>
    <template v-slot:content>
        <form>
            <div class="form-group">
                <label for="election-name" class="col-form-label">Position Title</label>
                <input v-model="position.title" type="text" class="form-control" id="election-name">

                <label for="election-name" class="col-form-label">Description</label>
                <textarea v-model="position.description" class="form-control" id="election-description"></textarea>
            </div>
        </form>
    </template>

</modal>
</template>

<script>
import Modal from '../components/modal';
import {
    createPosition,
    // updatePosition
} from "../services/apiService";
export default {
    props: ['closeModal', 'onPositionCreated', 'onPositionUpdated', 'editablePosition', 'electionId'],
    components: {
        Modal
    },
    data() {
        return {
            position: {},
        }
    },
    // mounted() {

    //     if (this.editablePosition) {
    //         this.position = {
    //             ...this.editablePosition
    //         }
    //     }
    // },
    methods: {
        addPosition() {
            // if (!this.editablePosition) {
            //     console.log('Election id: ' + this.electionId)
            createPosition(this.electionId, this.position)
                .then(response => {
                    if (response?.data) {
                        this.onPositionCreated(response.data.data);
                        alert('Position created successfully')
                    }
                })
            // } else {
            //     updatePosition(this.position.id, this.position)
            //         .then(response => {
            //             if (response?.data) {
            //                 alert(response.message);
            //                 this.onPositionUpdated(response.data);
            //             }
            //         })
            // }
        }
    },
}
</script>
