<template>
<div class="container">
    <table class="table table-bordered">
        <thead class="thead-light">
            <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="voter of voters" :key="voter.id">
                <td>{{ voter.fullName }}</td>
                <td>{{ voter.email }}</td>
                <td>{{ voter.status }}</td>

                <td><button type="button" name="edit" class="btn btn-primary btn-xs edit" @click="fetchData()">
                        <router-link to="/dashboard/election/election-detail"></router-link>Edit / Manage
                    </button></td>

            </tr>

        </tbody>
    </table>

</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: ["voters"],
    methods: {
        fetchData() {
            console.log("Working");
        }
    }
}
</script>
