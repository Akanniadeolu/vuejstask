<template>
<div class="container">
    <HeaderComponent/>
    <div class="landingpagecontainer">
        <div class="image">
        <img alt="firstsectionimage" class="firstsectionimage" src="@/assets/large.png" /> 
        </div>
        <div class="firstsectiontext">
            <p>Front-end:  1 hour ago</p>
        <h1>Optimizing CSS for faster page loads </h1>

        <p>
            Not long ago I decided to improve the loading times of my website. It already loads pretty fast, but I knew there was still room for improvement and one of them was CSS loading. I will walk you through the process and show you how you can improve your load times as well.<br><br>
            To see how CSS affects the load time of a webpage we first have to know how the browser converts an HTML document into a functional webpage...
        </p>
        <div class="bottom-text">
            <p>3 mins read</p>   
            <router-link to="/blog" class="router">Read Full</router-link>
        </div>
        </div>
    </div>
    <div>

        <ListContainer :items="items" />
        <FooterComponent />
    </div>
</div>
</template>



<script>
import HeaderComponent from './HeaderComponent.vue';
import ListContainer from './ListContainer.vue';
import FooterComponent from "./FooterComponent.vue";

export default {
  name: 'LandingPage',
  components: {
        HeaderComponent,
        ListContainer,
        FooterComponent,
    },
    data () {
        return {
            items: [
                {
                    id: 1,
                    date: "Front-end:  1 Month ago",
                    img: "./images/2.jpeg",
                    title: "Colors in Css",
                    text: "Colors play a vital role in making a web page usable or not. In CSS, we can control the foreground and background color of an element with the color and background properties.",
                    time: "12 Min Read",
                    route: "Read Full",
                },
                {
                    id: 2,
                    date: "Front-end:  2 Month ago",
                    img: "./images/1.jpeg",
                    title: "Css Grid",
                    text: "The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.",
                    time: "8 Min Read",
                    route: "Read Full",
                },
                {
                    id: 3,
                    date: "Front-end:  2 Month ago",
                    img: "./images/3.jpeg",
                    title: "Css Variables",
                    text: "CSS variables are custom properties that cascade normally and even inherit. They start with a reserved -- prefix, and there are no real rules about their value.",
                    time: "10 Min Read",
                    route: "Read Full",
                },
                {
                    id: 4,
                    date: "Front-end:  1 Month ago",
                    img: "./images/2.jpeg",
                    title: "Colors in Css",
                    text: "Colors play a vital role in making a web page usable or not. In CSS, we can control the foreground and background color of an element with the color and background properties.",
                    time: "12 Min Read",
                    route: "Read Full",
                },
                {
                    id: 5,
                    date: "Front-end:  2 Month ago",
                    img: "./images/1.jpeg",
                    title: "Css Grid",
                    text: "The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.",
                    time: "8 Min Read",
                    route: "Read Full",
                },
                {
                    id: 6,
                    date: "Front-end:  2 Month ago",
                    img: "./images/3.jpeg",
                    title: "Css Variables",
                    text: "CSS variables are custom properties that cascade normally and even inherit. They start with a reserved -- prefix, and there are no real rules about their value.",
                    time: "10 Min Read",
                    route: "Read Full",
                }
                
            ] 
        }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    margin: 0 100px 0 100px;
    font-family: Helvetica, sans-serif, Arial;
}
.landingpagecontainer{
    display: flex;
    padding: 50px 0 50px 0;
}
.firstsectiontext {
    display: flex;
    flex-direction: column;
}
h1 {
    font-size: larger;
}
p {
    font-size: small;
    color: grey;
}

img {
        margin-right: 2rem;
    }
.bottom-text{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
}
.router {
    font-size: small;
    text-decoration: none;
    color: rgb(30, 120, 255);
}

@media (max-width: 768px){
    .container{
        margin: 0 auto;
    }
    .landingpagecontainer{
        flex-direction: column;
    }

    img {
        width: 100%;
    }

    .firstsectiontext{
        margin-top: 5px;
        font-size: 14px;
    }
    
}

@media (min-width: 768px){
    .landingpagecontainer{
        flex-direction: row;
        gap: 1em;
    }

    .image, .firstsectiontext{
        width: 50%;
        height: 280;
    }

    /* img {
        width: 100%;
        height: 100%;
        background-position:center;
        background-repeat:no-repeat;
    } */
}


</style>
