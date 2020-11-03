<template>
<div>
    <div class="title">
        <h3>Dashboard</h3>
        <!-- <p>
            <router-link to='/dashboard'>dashboard</router-link>
        </p> -->
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
                        <router-link to="/list-election"><button class="btn btn-block">View</button></router-link>
                        <!--<a href="#" class="btn btn-block disabled">View / manage</a> -->
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
                        <a href="#" class="btn btn-block disabled">View / manage</a>
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
                        <a href="#" class="btn btn-block disabled">View / manage</a>
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
                        <a href="#" class="btn btn-block disabled">View / manage</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-lg-4 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div>
                            <i class="bx bx-poll bx-rotate-270"></i>
                            <h4>Results</h4>
                        </div>
                        <a href="#" class="btn btn-block disabled">View / manage</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-lg-4 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div>
                            <i class="material-icons"> settings </i>
                            <h4>Setting</h4>
                        </div>
                        <a href="#" class="btn btn-block disabled">View / manage</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn {
    background: #29B6F6;
    color: white;
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
</style>
