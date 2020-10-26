<template>
<div class="container">
    <table class="table table-bordered">
        <thead class="thead-light">
            <tr>
                <th>Title</th>
                <th>No of candidates</th>
                <th> </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post of positions" :key="positions.indexOf(post)">
                <td>{{ post.positionName }}</td>
                <td>{{ post.noOfCandidates }}</td>

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
