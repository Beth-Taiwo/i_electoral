<template>
<div>
    <div class="container">
        <div class="display-card">
            <h1>2020 Presidential Election</h1>
            <p>Your vote count</p>

            <div class="content-wrapper">

                <div class="text-wrapper">
                    <p><b>0</b> people voted</p>
                    <p>From: October 31st 2020 to October 31st 2020</p>
                </div>
                <div class="btn-wrapper">
                    <button class="btn">VOTE</button>
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
.container {
    width: 70%;
}

.display-card {
    border: 1px solid rgb(0 0 0 / 10%);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 3px 3px 5px 0px #c6c6c6;
    margin-top: 28px;
}

.btn {
    background: #29B6F6;
    color: white;
}

.content-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text-wrapper>p:first-of-type {
    margin-bottom: 0;
}
</style>
