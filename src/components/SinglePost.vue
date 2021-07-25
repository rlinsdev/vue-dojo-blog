<template>
  <div class="post">
    <h3>{{post.title}}</h3>
    <h3>{{snippet}}</h3>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
  props:['post'],
  setup(props){
    const snippet = computed(()=>{
      return props.post.body.substring(0, 100)+'...'
    })
    return {snippet}
  }
}

</script>

<style>

</style>