<template>
    <!-- <div class="listitemcontainer"> -->
        <div class="listitem">
            <div class="card-img">
                <img :src="item.img" />
            </div>
            <div>
                <p>{{item.date}}</p>
                <h2>{{item.title}}</h2>
            </div>
            <div>
                <p>{{item.text}}</p>
            </div>
    </div>
    <!-- </div> -->
</template>


<style scoped>
img {
    width: 100%;
}

.listitem {
    width: 250px;
    height: 390px;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0 10px 25px;
    background: #FFFFFF;
    border: 1px solid #F5F5F5;
    border-radius: 5px;
}
</style>


<script>
export default {
    name: "ListItem",
    props: ['item']
}
</script>