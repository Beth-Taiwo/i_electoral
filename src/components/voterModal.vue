<template>
<modal :close="closeModal" @form-save="addVoter">
    <template v-slot:title>
        <h5 class="modal-title" id="exampleModalLabel">Add Voter</h5>
    </template>
    <template v-slot:content>
        <form>
            <div class="form-group mb-0">
                <label for="voter-name" class="col-form-label">Voter name</label>
                <input v-model="voter.fullName" type="text" placeholder="Full Name" class="form-control" id="voter-name">
            </div>
            <div class="form-group">
                <label for="message-text" class="col-form-label">Email</label>
                <input v-model="voter.email" type="email" class="form-control" id="email">
            </div>
        </form>
    </template>

</modal>
</template>

<script>
export default {

}
</script>
