<template>
<div>
    <div class="title heading">
        <h3>All Elections</h3>
        <button><i class='bx bx-plus-medical' @click="showAddModal"></i></button>
    </div>

    <electionModal :onElectionCreated="onElectionCreated" :closeModal="closeModal" v-if="showModal" />

    <entityTable v-if="electiondata.length > 0" :elections="electiondata" />
    <p v-else style="text-align:center;padding:20px;color:rgb(73, 67, 67)">No election at this moment</p>
</div>
</template>

<script>
import {
    getElections
} from '../../services/apiService';

import entityTable from '../../components/entityTable';
import electionModal from '../../components/electionModal';

export default {
    components: {
        // modal,
        entityTable,
        electionModal
    },
    //props: ["showModal"],
    data() {
        return {
            showModal: false,
            name: "",
            electiondata: []
        }
    },

    mounted() {
        getElections()
            .then(response => {
                if (response?.data) {
                    this.electiondata = response.data;
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
        onElectionCreated(election) {
            this.electiondata.push(election);
            this.closeModal();
        }
    },
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
