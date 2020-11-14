<template>
<div>
    <div class="title heading">
        <h3>Results</h3>
    </div>
    <!--notification component-->
    <notify :nodata="nodata" :isLoading="isLoading" :isLoadingError="isLoadingError">
        <template v-slot:nodata>
            No result at this moment
        </template>
    </notify>
    <div class="container">
        <div class="card mb-2" v-for="(result,index) of results" :key="index">
            <div class="card-header text-center">
                <strong><span> {{ result[0].position_name }} </span></strong>
            </div>
            <div class="card-body d-flex justify-content-center mb-2">
                <div class="candidate-details text-center mx-2" v-for="candidate in result" :key="candidate.id">
                    <div class="rounded-img">
                        <img :src="candidate.avatar_url" alt="candidate image">
                    </div>
                    <h4>{{ candidate.full_name}}</h4>
                    <span>Votes: <b>{{ candidate.vote_count }}</b></span>
                </div>

                <!--
                    <ul>
                        <li v-for="candidate in result" :key="candidate.id">
                            <div>
                                <h4>{{ candidate.full_name}}</h4>
                                <span>Votes: {{ candidate.vote_count }}</span>
                            </div>

                        </li>
                    </ul>
                    -->
            </div>

        </div>

    </div>
</div>
</template>

<script>
import notify from '../../components/notification';
import {
    listResults
} from "../../services/apiService";

export default {
    components: {
        notify
    },
    data() {
        return {
            results: null,
            isLoading: false,
            isLoadingError: false,
            nodata: false
        }
    },
    mounted() {
        this.isLoading = true;
        const electionId = this.$route.params.id;
        listResults(electionId).then((res) => {
            if (res?.data.data) {
                this.results = res.data.data;
                console.log(res.data.data)
            }
            this.isLoading = false;
        })
    },
}
</script>

<style scoped>
.rounded-img>img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
}
</style>
