<template>
<div class="sidebar">
    <div class="shape">
        <div class="circle"></div>
        <div>
            <span>Admin</span><br>
            <span>online</span>

        </div>
    </div>
    <div>
        <router-link to="/dashboard"><i class="bx bxs-dashboard"></i> Dashboard</router-link>
    </div>
    <div>
        <router-link to="/dashboard/election"><i class="material-icons">text_snippet</i>Election</router-link>
    </div>
    <div>
        <router-link to="/dashboard/positions"><i class="fa fa-fw fa-clipboard"></i> Positions</router-link>
    </div>
    <div>
        <router-link to="/dashboard/candidates"><i class="fa fa-fw fa-group"></i> Candidates</router-link>
    </div>
    <div>
        <router-link to="/dashboard/voters"><i class="fa fa-fw fa-user-plus"></i> voters</router-link>
    </div>
    <div>
        <router-link to="/dashboard/results"><i class="bx bx-poll bx-rotate-270"></i> Results</router-link>
    </div>
    <div>
        <router-link to="/dashboard/setting"><i class="material-icons"> settings </i> Settings</router-link>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.shape {
    margin-bottom: 20px;
}

.sidebar {
    height: 85.6%;
    width: 160px;
    position: fixed;
    z-index: 1;
    top: 54px;
    left: 0;
    border-right: 1px solid rgb(0 0 0 / 10%);
    background-color: #fbfbfb;
    overflow-x: hidden;
    padding-top: 16px;
}

.sidebar a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    color: #818181;
    display: flex;
    position: relative;
    align-items: center;
}

.sidebar a i {
    margin-right: 8px;
}

.material-icons {
    font-size: 14px;
}

.sidebar a:hover,
.router-link-active.router-link-exact-active {
    color: #EF7F19;
    background: #ebebeb;
}

.sidebar>div:not(:first-of-type) {
    position: relative;
    margin-bottom: 8px;
    font-size: 14px;
}

.sidebar>div:not(:first-of-type):hover::after,
.router-link-active.router-link-exact-active::after {
    content: "";
    position: absolute;
    right: 0;
    top: 5px;
    border: 10px solid transparent;
    border-right-color: #EF7F19;
    z-index: 0;
}

.shape {
    display: flex;
    padding: 6px 8px 6px 16px;
}

.circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #EF7F19;
}
</style>
