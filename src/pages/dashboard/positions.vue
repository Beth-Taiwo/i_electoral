<template>
<div>
    <div class="title heading">
        <h3>All Positions</h3>
        <button><i class='bx bx-plus-medical' @click="showAddModal"></i></button>
    </div>
</div>
</template>

<script>
import {
    getPositions
} from "../../services/apiService";
export default {
    components: {

    },
    data() {
        return {
            showModal: false,
            title: "",
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
