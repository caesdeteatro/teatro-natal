<template>
  <div>
    <v-app-bar :color="color" :flat="flat" class="px-15 hidden-md-and-down">
      <div class="mainHeader">
        <div class="info-header">
          <span>Início</span>
          <span>Manifesto</span>
          <span>Grupos</span>
          <span>Contato</span>
        </div>

        <div>
          <v-btn
            rounded
            height="40"
            color="#64A289"
            large
            dark
            class="text-capitalize"
          >
            Enviar sugestão
          </v-btn>
        </div>
      </div>
    </v-app-bar>

    <v-app-bar class="d-md-flex" :color="color" :flat="flat">
      <div class="responsiveHeader">
        <div class="d-flex justify-space-between">
          <img src="../assets/icons/burger-menu.svg" height="30" />
          <v-btn
            rounded
            height="36"
            color="#64A289"
            dark
            class="text-capitalize font-weight-light"
            elevation="0"
          >
            Sugestão
          </v-btn>
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
.responsiveHeader {
  width: 100vw;
  margin-top: 22px;
}

.mainHeader {
  font-family: "Outfit", sans-serif;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  align-items: center;
  list-style: none;
  list-style-type: none;
  text-decoration-style: none;
}

.mainHeader img {
  height: 60px;
}

.info-header span {
  font-weight: 400;
  margin-right: 40px;
  font-size: 18px;
  cursor: pointer;
}
</style>

<script>
export default {
  props: {
    color: String,
    flat: Boolean,
  },
};
</script>
