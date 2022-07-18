<template>
<div>
    <HeaderComponent/>
    <div>
        <div class="blogsectioncontainer">
            <span>By Ryan Jackson 2 Months Ago</span>
            <h1 class="header">Optimizing CSSn for faster page loads </h1>
            <p class="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, atque? 
                Praesentium soluta cumque, sit iure ab quis quaerat nemo deleniti ut eveniet ea 
                accusantium asperiores dignissimos aliquam accusamus voluptatum dolore! Lorem 
                ipsum dolor sit, amet consectetur adipisicing elit. Dolores ea quo, numquam nobis 
                vel fuga rerum, cumque distinctio maxime odit sed laudantium a magnam aut corrupti. 
                Et saepe dignissimos excepturi? Lorem ipsum dolor sit amet, consectetur adipisicing 
                elit. Vero earum minima maiores, nihil ducimus cupiditate. Dolorem laborum saepe 
                laudantium, facere sapiente officia nesciunt consectetur cupiditate temporibus optio 
                eveniet ducimus dolor.</p>
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
                similique quis aliquid reprehenderit! <br><br>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, maxime. Mollitia labore 
                suscipit cumque facilis non aut, tempore, quis harum nesciunt dolores voluptate accusantium 
                quasi odio velit porro rerum vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eum praesentium vero dolore ipsum. Accusamus, quod. Ad excepturi impedit eius? Cupiditate ipsa 
                ipsam reprehenderit pariatur repellat incidunt omnis esse suscipit nam?</p>
        </div>
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
                    img: "./images/1.jpeg",
                    title: "Css Grid",
                    text: "The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.",
                },
                {
                    id: 2,
                    date: "Front-end:  1 Month ago",
                    img: "./images/2.jpeg",
                    title: "Colors in Css",
                    text: "Colors play a vital role in making a web page usable or not. In CSS, we can control the foreground and background color of an element with the color and background properties.",
                },
                {
                    id: 3,
                    date: "Front-end:  1 Month ago",
                    img: "./images/3.jpeg",
                    title: "Css Variables",
                    text: "CSS variables are custom properties that cascade normally and even inherit. They start with a reserved -- prefix, and there are no real rules about their value.",
                },
        ]
    }
  }
}


</script>

<style scoped>
.blogsectioncontainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 100px 0 100px;
    padding: 50px;
    font-family: Helvetica, sans-serif, Arial;
}
.header {
    font-size: larger;
}
.text {
    font-size: small;
    color: grey;
}
.blogsectionimage 
{
    width: 510px;
    height: 327px;align-self: center;
}
</style>