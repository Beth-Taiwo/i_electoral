<template>
<div>
    <div class="title">
        <h3>Dashboard</h3>
    </div>
    <div class="container">

        <div class="row">
            <div class="col-sm-12 col-lg-4 col-md-6">
                <div class="card mb-4">
                    <div class="card-body">
                        <div>
                            <i class="material-icons">text_snippet</i>
                            <h4>Elections</h4>
                        </div>
                        <h1>{{elections.length}}</h1>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-lg-4 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div>
                            <i class="fa fa-fw fa-clipboard"></i>
                            <h4>Positions</h4>
                        </div>
                        <h1>{{positions.length}}</h1>

                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-lg-4 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div>
                            <i class="fa fa-fw fa-group"></i>
                            <h4>Candidates</h4>
                        </div>
                        <h1>{{candidates.length}}</h1>

                    </div>
                </div>
            </div>

            <div class="col-sm-12 col-lg-4 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div>
                            <i class="fa fa-fw fa-user-plus"></i>
                            <h4>Voters</h4>
                        </div>
                        <h1>{{voters.length}}</h1>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    getElections,
    getPositions,
    listAllCandidates,
    listAllVoters
} from '../../services/apiService';
export default {
    data() {
        return {
            elections: [],
            positions: [],
            candidates: [],
            voters: []
        }
    },
    mounted() {
        getElections()
            .then((res) => {
                this.elections = res.data.data;
            })
            .catch((err) => {
                console.log(err)
            })
        getPositions()
            .then((res) => {
                this.positions = res.data.data;
            })
            .catch((err) => {
                return err
            })
        listAllCandidates()
            .then((res) => {
                this.candidates = res.data.data;
            })
            .catch((err) => {
                return err
            })
        listAllVoters()
            .then((res) => {
                this.voters = res.data.data;
            })
            .catch((err) => {
                return err
            })
    }
}
</script>

<style scoped>
.btn {
    background: #29B6F6;
    color: white;
}

.card {
    padding: 0;

}

.card-body>div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;

}

.card-body h4 {
    margin: 0 0 0 8px;

}

.card-body>div>i {
    font-size: 52px;
    color: #c4c4c4;
}

.card-body>h1 {
    text-align: center;
    font-weight: bolder;
}
</style>
