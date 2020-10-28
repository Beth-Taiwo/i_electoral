<template>
<modal :close="closeModal" v-show="showModal" @form-save="showPositionData">
    <template v-slot:title>
        <h5 class="modal-title" id="exampleModalLabel">Add Position</h5>
    </template>
    <template v-slot:content>
        <form>
            <div class="form-group">
                <label for="election-name" class="col-form-label">Position Title</label>
                <input v-model="position.positionName" type="text" class="form-control" id="election-name">
            </div>
        </form>
    </template>

</modal>
</template>

<script>
import Modal from '../components/modal';
export default {
    components: {
        Modal
    }
}
</script>
