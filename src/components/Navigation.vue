<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary dark>
      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :color="color" :flat="flat" class="px-15">
      <div class="mainHeader">
        <div class="info-header">
          <span>Início</span>
          <span>Manifesto</span>
          <span>Grupos</span>
          <span>Contato</span>
        </div>

        <!--   <img src="../assets/img/LOGO_CAES.png" /> -->

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
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
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
