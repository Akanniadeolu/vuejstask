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
            <div class="cardfoot">
                <p>{{item.time}}</p>
                <router-link to="/blog" class="router">{{item.route}}</router-link>
            </div>
    </div>
    <!-- </div> -->
</template>


<style scoped>
img {
    width: 100%;
}
.listitem {
    width: 300px;
    height: 400px;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0 10px 25px;
    background: #FFFFFF;
    border: 1px solid #F5F5F5;
    border-radius: 5px;
}
p {
    font-size: small;
    color: grey;
}
h2 {
    font-size: larger;
}
.cardfoot {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
}
.router {
    font-size: small;
    text-decoration: none;
    color: rgb(30, 120, 255);
}
</style>


<script>
export default {
    name: "ListItem",
    props: ['item']
}
</script>