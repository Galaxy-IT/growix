<template>
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
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Info',
  props: {
    postList: {
      type: Array,
      required: true
    }
  }
})
</script>
