<template>
  <div>
    <div class="d-flex flex-column px-6 testess">
      <div class="border-t mb-6"></div>
      <div class="mb-6">
        <h1 class="mb-2">Newsletter</h1>
        <span
          >Seja o primeiro a ficar por dentro das próximas estreias,
          apresentações e receba avisos com todas as informações sobre o nosso
          teatro natalense!</span
        >
      </div>
      <div class="d-flex align-baseline">
        <v-text-field
          type="email"
          outlined
          dense
          background-color="white"
          color="#4c4c4c"
          placeholder="Insira seu e-mail"
          height="46"
          class="mr-4 rounded-lg"
        />
        <v-btn
          height="46"
          color="#64A289"
          dark
          class="rounded-lg text-capitalize font-weight-light"
          elevation="0"
          >Quero receber!</v-btn
        >
      </div>
      <div class="border-t mt-4 mb-10"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
span {
  font-size: 20px;
  color: #4c4c4c;
  display: flex;
}
.border-t {
  border-top: 1px solid #070707 !important;
}
</style>

<script>
// import {db} from '@/main'

export default {
  data: () => ({}),
  methods: {},
};
</script>
