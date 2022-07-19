<template>
<div class="container">
    <HeaderComponent/>
    <div>
        <div class="blogsectioncontainer">
            <p class="text">By Ryan Jackson 2 Months Ago</p>
            <h1 class="header">Optimizing CSS for faster page loads </h1>
            <p class="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, atque? 
                Praesentium soluta cumque, sit iure ab quis quaerat nemo deleniti ut eveniet ea 
                accusantium asperiores dignissimos aliquam accusamus voluptatum dolore! Lorem 
                ipsum dolor sit, amet consectetur adipisicing elit. Dolores ea quo, numquam nobis 
                vel fuga rerum, cumque distinctio maxime odit sed laudantium a magnam aut corrupti. 
                Et saepe dignissimos excepturi? Lorem ipsum dolor sit amet, consectetur adipisicing 
                elit. Vero earum minima maiores, nihil ducimus cupiditate. Dolorem laborum saepe 
                laudantium, facere sapiente officia nesciunt consectetur cupiditate temporibus optio 
                eveniet ducimus dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Temporibus et ab cum magnam beatae saepe velit consequuntur distinctio exercitationem 
                atque iusto quo eveniet soluta consequatur, ducimus officiis dignissimos unde doloribus! 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ullam ducimus suscipit 
                consectetur rem. Labore, reprehenderit, voluptas magnam dicta maiores illo voluptate 
                aperiam delectus voluptates, nam dolores quos perspiciatis esse.</p>
            <img alt="blogsectionimage" class="blogsectionimage" src="@/assets/Safari.png"/>
            <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quod iste deleniti 
                cupiditate rerum odit deserunt officia architecto dicta animi iusto fuga cum alias 
                quae nihil quos in perferendis quia? Lorem ipsum, dolor sit amet consectetur adipisicing 
                elit. Nihil quidem, iure, nemo commodi sequi et amet recusandae iste necessitatibus ipsa 
                vel eum quia nostrum officia tempora fugit facilis. Qui, optio. Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Rerum ea natus commodi expedita deleniti molestiae, consequatur 
                eum iure et in, aperiam consequuntur sed iste! Rerum odio ad exercitationem impedit magnam! 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cum earum totam nobis, 
                veritatis numquam cupiditate repellat qui quisquam suscipit dolore unde! Quos, aut dolore iusto 
                similique quis aliquid reprehenderit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Reprehenderit, illo recusandae officia dolor sed cum maiores optio amet, quos sapiente dicta 
                quam nulla autem quaerat inventore saepe, tenetur quia quibusdam. <br><br>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, maxime. Mollitia labore 
                suscipit cumque facilis non aut, tempore, quis harum nesciunt dolores voluptate accusantium 
                quasi odio velit porro rerum vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eum praesentium vero dolore ipsum. Accusamus, quod. Ad excepturi impedit eius? Cupiditate ipsa 
                ipsam reprehenderit pariatur repellat incidunt omnis esse suscipit nam?</p>
        </div>
        <h2>More Articles</h2>
        <ListContainer :items="items" />
        
    </div>
</div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import ListContainer from './ListContainer.vue';

export default {
  name: 'BlogComponent',
  components: {
    HeaderComponent,
    ListContainer,
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
        ]
    }
  }
}


</script>

<style scoped>
.container {
    margin: 0 100px 0 100px;
    font-family: Helvetica, sans-serif, Arial;
}
.blogsectioncontainer {
    display: flex;
    flex-direction: column;
    width: 700px;
    justify-content: center;
    padding: 50px 200px 50px 200px;
}
.header {
    font-size: 1.5rem;
}
.text {
    font-size: small;
    color: grey;
}
h2 {
    font-size: large;
    text-indent: 80px;
}
.blogsectionimage 
{
    width: 510px;
    height: 327px;
    align-self: center;
}

@media (max-width: 768px){
    .container{
        margin: 0 auto;
    }
    .blogsectioncontainer{
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    padding: 10px;
    }
    .blogsectionimage 
{
    width: 80%;
    height: 100%;
    align-self: center;
}
}    
</style>