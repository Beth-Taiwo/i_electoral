<template>
<div class="container">
    <table class="table table-bordered">
        <thead class="thead-light">
            <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th colspan="2" style="text-align: center">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="voter of voters" :key="voter.id">
                <td>{{ voter.full_name }}</td>
                <td>{{ voter.email }}</td>

                <td><button type="button" name="edit" class="btn btn-primary btn-xs edit" @click="()=> onManageVoter(voter)">Edit
                    </button>
                </td>
                <td>
                    <button type="button" name="delete" class="btn btn-danger btn-xs delete" @click="() => ondelete(voter.id)">
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
    data() {
        return {
            editShowModal: false,
            editVoter: {},
            voterdata: [],
        }
    },
    props: ["voters", "update", "onManageVoter", "ondelete"],
    methods: {
        closeModal() {
            this.editShowModal = false;
        },
    },
}
</script>
