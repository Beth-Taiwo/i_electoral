<template>
<div class="container">
    <table class="table table-bordered">
        <thead class="thead-light">
            <tr>
                <th colspan="2" style="text-align:center">Title</th>
                <th> </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="position of positions" :key="position.id">
                <td>{{ position.title }}</td>
                <td><button type="button" name="edit" class="btn btn-primary btn-xs edit" @click="()=> onManagePosition(position)">Manage
                    </button></td>
                <td><button type="button" name="addCandidate" class="btn btn-primary btn-xs edit" @click="fetchData()">
                        Add Candidate
                    </button></td>
            </tr>

        </tbody>
    </table>
</div>
</template>

<script>
export default {
    props: ["positions", "update", "onManagePosition"],
    data() {
        return {
            editShowModal: false,
            positiondata: [],
            editPosition: {}
        }
    },
    methods: {
        closeModal() {
            this.editShowModal = false;
            console.log("Working");
        }
    }
}
</script>
