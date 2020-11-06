<template>
<div>
    <div class="title heading">
        <h3>All Positions</h3>
        <button><i class='bx bx-plus-medical' @click="showAddModal"></i></button>
    </div>
    <positionModal :editablePosition="editablePosition" :onPositionCreated="onPositionCreated" :onPositionUpdated="onPositionUpdated" :closeModal="closeModal" v-if="showModal" />
    <positionTable v-if="positiondata.length > 0" :positions="positiondata" :onManagePosition="managePosition" />
    <p v-else style="text-align: center; padding: 20px; color: rgb(73, 67, 67)">
        No position at this moment
    </p>
</div>
</template>

<script>
import {
    getPositions
} from "../../services/apiService";
import positionTable from '../../components/positionTable';
import positionModal from '../../components/positionModal';
export default {
    components: {
        positionModal,
        positionTable
    },
    data() {
        return {
            showModal: false,
            title: "",
            positiondata: [],
            editablePosition: null,
        }
    },
    mounted() {
        getPositions().then((res) => {
            if (res?.data.data) {
                this.positiondata = res.data.data;
            }
        })
    },
    methods: {
        showAddModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false
        },
        onPositionCreated(position) {
            this.positiondata = [...this.positiondata, position];
            this.closeModal();
        },

        onPositionUpdated(position) {
            this.positiondata = this.positiondata.map(x_position => {
                if (x_position.id === position.id) {
                    return position;
                }
                return x_position;
            });
            this.closeModal();
        },
        managePosition(position) {
            this.editablePosition = position;
            this.showAddModal();
        },
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
