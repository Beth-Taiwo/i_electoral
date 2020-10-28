<template>
<div class="container">
    <table class="table table-bordered">
        <thead class="thead-light">
            <tr>
                <th>Title</th>
                <th> </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post of positions" :key="positions.indexOf(post)">
                <td>{{ post.positionName }}</td>
                <td><button type="button" name="edit" class="btn btn-primary btn-xs edit" @click="fetchData()">
                        <router-link to="/dashboard/election/election-detail"></router-link>Edit / Manage
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
    props: ["positions"],
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
