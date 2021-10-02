<template>
  <div class="heading mt-3 justify-content-center">
    <h1 class="mb-2 text-center">
      {{ $t('data_info') }}
    </h1>
    <div class="d-flex justify-content-center">
      <b-button type="submit" variant="primary" @click="showData">
        {{ isDataShown ? $t('hide_data') : $t('show_data') }}
      </b-button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Heading',
  props: {
    isDataShown: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    showData() {
      this.$emit('showData')
    }
  }
})
</script>
