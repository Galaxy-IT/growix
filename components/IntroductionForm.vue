<template>
  <div class="container mt-2">
    <div class="info d-flex justify-content-center align-items-center">
      <b-form class=" mx-auto info__form" @submit.prevent="onSubmit">
        <slot />
        <b-form-group id="email" :label="$t('email_address')" label-for="email">
          <b-form-input
            id="email"
            v-model="email"
            type="text"
            :placeholder="$t('enter_email')"
            class="info__input"
            :class="{
              invalid:
                ($v.email.$dirty && !$v.email.required) ||
                ($v.email.$dirty && !$v.email.minLength) ||
                ($v.email.$dirty && !$v.email.maxLength) ||
                isEmailErrorShown,
            }"
            @input="inputHandler"
          />
          <small
            v-if="$v.email.$dirty && !$v.email.required"
            class="invalid-message"
          >
            {{ $t('filed_required') }}
          </small>
          <small
            v-else-if="$v.email.$dirty && !$v.email.minLength"
            class="invalid-message"
          >
            {{ $t('min') }} {{ $v.email.$params.minLength.min }}
            {{ $t('symbols') }}
          </small>
          <small
            v-else-if="$v.email.$dirty && !$v.email.maxLength"
            class="invalid-message"
          >
            {{ $t('max') }} {{ $v.email.$params.maxLength.max }}
            {{ $t('symbols') }}
          </small>
          <small v-else-if="isEmailErrorShown" class="invalid-message">
            {{ $t('email_validation') }}
          </small>
        </b-form-group>
        <b-button type="submit" variant="primary" :disabled="!isEmailValid">
          {{ $t('submit') }}
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
export default Vue.extend({
  name: 'IntroductonForm',
  mixins: [validationMixin],
  data () {
    return {
      email: '',
      isEmailValid: false,
      isEmailErrorShown: false
    }
  },
  methods: {
    validEmail(email: string): boolean {
      // eslint-disable-next-line
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    inputHandler() {
      const validation = this.validEmail(this.email)
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      if (validation) {
        this.isEmailValid = true
        this.isEmailErrorShown = false
        return
      }
      this.isEmailValid = false
      this.isEmailErrorShown = true
    },
    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const validation = this.validEmail(this.email)
      if (!validation) {
        this.isEmailValid = false
        this.isEmailErrorShown = true
        return
      }
      this.$router.push('/result')
    }
  },

  validations: {
    email: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(100)
    }
  }
})
</script>
<style scoped>
.info {
  height: calc(100vh - 80px);
}
.info__form {
  width: 100%;
  max-width: 50%;
}
.info__input.invalid {
  transition: all 0.3s ease;
  border: 1px solid red !important;
}
.invalid-message {
  color: red;
}
</style>
