<template>
<div>
    <div class="title heading">
        <h3>All Elections</h3>
        <button><i class='bx bx-plus-medical' @click="showAddModal"></i></button>
    </div>
    <modal :close="closeModal" v-show="showModal">
        <template v-slot:title>
            <h5 class="modal-title" id="exampleModalLabel">Add Election</h5>
        </template>
        <template v-slot:content>
            <form>
                <div class="form-group mb-0">
                    <label for="election-name" class="col-form-label" :v-model="name">Election name</label>
                    <input type="text" class="form-control" id="election-name">
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Tag line</label>
                    <textarea class="form-control" value="Election theme" id="message-text"></textarea>
                </div>
                <div class="form-group">
                    <label for="">Start Time</label>
                    <input type="time" name="startTime" id="startTime">
                </div>
                <div class="form-group">
                    <label for="">End Time</label>
                    <input type="time" name="endTime" id="endTime">
                </div>
            </form>
        </template>

    </modal>
    <!--<entityTable />-->
</div>
</template>

<script>
import modal from '../../components/modal';
/*import entityTable from '../../components/entityTable'*/
export default {
    components: {
        modal,
        /* entityTable*/
    },
    data() {
        return {
            showModal: false,
            name: ""
        }
    },
    methods: {
        showAddModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false
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
