<template>
<div>
    <div class="title heading">
        <h3>Candidate</h3>
    </div>
    <!--notification component-->
    <notify :nodata="nodata" :isLoading="isLoading" :isLoadingError="isLoadingError">
        <template v-slot:nodata>
            No candidate at this moment
        </template>
    </notify>
    <div class="container">
        <div v-if="candidate">
            <router-link class="router" to="/dashboard/candidates"><i class="bx bx-chevron-left"></i><span>Back</span>
            </router-link>
            <div class="card">
                <div class="card-header">
                    <div class="rounded-img">

                        <img :src="candidate.avatar" alt="an image" class=" img-thumbnail" />

                    </div>
                    <div class="positionCard card-text">
                        <h2>{{ candidate.full_name }}</h2>
                        <div class="positionText">
                            <span>{{ candidate.position.title }}</span>
                        </div>

                    </div>

                </div>
                <div class="card-body">
                    <h4 class="card-title">Bio</h4>
                    <p class="card-text">{{ candidate.bio }}</p>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import notify from '../../components/notification';
import {
    viewCandidate
} from "../../services/apiService";

export default {
    components: {
        notify
    },
    data() {
        return {
            candidate: null,
            isLoading: false,
            isLoadingError: false,
            nodata: false
        }
    },
    mounted() {
        this.isLoading = true;
        const candidateId = this.$route.params.id;
        viewCandidate(candidateId).then((res) => {
            if (res?.data.data) {
                this.candidate = res.data.data;
                this.isLoading = false;
            }
        }).catch((err) => {
            console.log(err);
            this.isLoadingError = true;
            this.isLoading = false;
        })
    },

}
</script>

<style scoped>
.card-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.rounded-img>img {
    border-radius: 50%;
    margin-right: 16px;
    width: 200px;
}

.positionCard {
    margin-top: 7%;
}

.positionText {
    background-color: #27ae60;
    border-radius: 5px;
    color: cornsilk;
    margin-left: 0;
    margin-top: 12px;
    margin-bottom: 0;
    text-align: center;
    display: inline-block;
    padding: 8px;
    font-size: 16px;
}
</style>
