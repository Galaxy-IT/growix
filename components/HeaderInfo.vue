<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/">
      Growix
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-item href="/">
        {{ $t('home') }}
      </b-nav-item>
      <b-nav-item href="/result">
        {{ $t('result') }}
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'HeaderInfo'
})
</script>
