import { ref } from 'vue'

const getPost = (id)  =>{
  
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch('http://localhost:3000/post/'+ id);

      if (!data.ok) {
        throw Error('Post does not exist');
      }
      post.value = await data.json();
      //console.log(posts.value);
    } catch (err) {
      error.value = err.message;
      console.log(err.message);
    }
  }
  return { post, error, load }
}

export default getPost