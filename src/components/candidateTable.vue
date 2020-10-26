<template>
<div class="container">
    <table class="table table-bordered">
        <thead class="thead-light">
            <tr>
                <th>Img</th>
                <th>Full name</th>
                <th>Bio</th>
                <th>Position</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="candidate of candidates" :key="candidates.indexOf(candidate)">
                <td>{{ candidate.img }}</td>
                <td>{{ candidate.fullname }}</td>
                <td>{{ candidate.Bio }}</td>
                <td>{{ candidate.position }}</td>

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
    props: ["candidates"],
    data() {
        return {

        }
    },
    methods: {
        fetchData() {
            console.log("Working");
        }
    }
}
</script>
