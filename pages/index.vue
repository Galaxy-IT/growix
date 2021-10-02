<template>
  <div>
    <header-info />
    <introduction-form>
      <div class="mb-4">
        <h1>{{ $t('introduction_form') }}</h1>
      </div>
    </introduction-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderInfo from '~/components/HeaderInfo.vue'
import IntroductionForm from '~/components/IntroductionForm.vue'
export default Vue.extend({
  name: 'Home',
  components: {
    HeaderInfo,
    IntroductionForm
  }
})
</script>
