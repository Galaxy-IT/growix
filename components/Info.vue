<template>
  <div>
    <div v-if="postList.length">
      <table class="table">
        <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="post in postList"
          :key="post.id"
        >
          <td>{{ post.id }}</td>
          <td>{{ post.title | capitalize }}</td>
          <td>{{ post.body }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      $t('no_posts')
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue'
import PostInterface from '@/interfaces/post'
export default Vue.extend({
  name: 'Info',
  props: {
    postList: {
      required: true
    } as PropOptions<PostInterface>
  }
})
</script>
