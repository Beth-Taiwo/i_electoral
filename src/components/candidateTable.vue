<template>
<div class="container">
    <table class="table table-bordered">
        <thead class="thead-light">
            <tr>
                <th>Full name</th>
                <th>Position</th>
                <th colspan="3" style="text-align: center">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="candidate of candidates" :key="candidate.id">
                <td>{{ candidate.full_name }}</td>
                <td>{{ candidate.position_title }}</td>

                <td>
                    <router-link :to="`/dashboard/candidates/${candidate.id}`" style="text-decoration: underline">View details</router-link>

                </td>
                <td><button type="button" name="edit" class="btn btn-primary btn-xs edit" @click="()=> onManageCandidate(candidate)">Edit
                    </button>
                </td>
                <td>
                    <button type="button" name="delete" class="btn btn-danger btn-xs delete" @click="() => ondelete(candidate.id)">
                        Delete
                    </button>
                </td>

            </tr>

        </tbody>
    </table>
</div>
</template>

<script>
export default {
    props: ["candidates", "update", "onManageCandidate"],
    data() {
        return {
            editShowModal: false,
            candidatedata: [],
            editCandidate: {}
        }
    },
    methods: {
        closeModal() {
            this.editShowModal = false;
        }
    }
}
</script>
