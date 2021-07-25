<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" />
  </div>
  
</template>

<script>
import PostList from '../components/PostList.vue'
import {ref} from 'vue'

export default {
  name:'Home',
  components:{PostList},
  setup() {
    const posts = ref([
      {title:'welcome tho this blog', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aperiam ipsum, error consectetur excepturi ipsa omnis tenetur, illo quos explicabo aspernatur quisquam non ab autem necessitatibus velit hic minima maxime ullam? Quod, praesentium totam, possimus ad quaerat odit deserunt, exercitationem quae inventore eveniet facilis odio non culpa commodi iure id delectus! Corrupti maxime at possimus nisi! Incidunt modi, dignissimos commodi soluta error alias et aperiam labore quas at eligendi molestiae temporibus! Unde, minus dolorum. Ea, nostrum mollitia? Doloremque rem officiis dolorum, quae corrupti harum consequuntur sequi, dolorem doloribus eum nam iure. Commodi modi, voluptatibus iste consequuntur sunt cupiditate possimus natus?', id:1},
      {title:'top 5 CSS tips', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aperiam ipsum, error consectetur excepturi ipsa omnis tenetur, illo quos explicabo aspernatur quisquam non ab autem necessitatibus velit hic minima maxime ullam? Quod, praesentium totam, possimus ad quaerat odit deserunt, exercitationem quae inventore eveniet facilis odio non culpa commodi iure id delectus! Corrupti maxime at possimus nisi! Incidunt modi, dignissimos commodi soluta error alias et aperiam labore quas at eligendi molestiae temporibus! Unde, minus dolorum. Ea, nostrum mollitia? Doloremque rem officiis dolorum, quae corrupti harum consequuntur sequi, dolorem doloribus eum nam iure. Commodi modi, voluptatibus iste consequuntur sunt cupiditate possimus natus?', id:2},
    ])
    return { posts }
   
  }
}
</script>

<style>
</style>