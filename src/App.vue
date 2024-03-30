<template>
  <v-app>
    <v-main class="pt-0">
      <navigation :color="color" :flat="flat" />
      <home />
      <about />
      <contact />
      <foote />
    </v-main>
  </v-app>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");

.v-main {
  background: #fbdba3;
  font-family: "Outfit", sans-serif;
}
</style>

<script>
import navigation from "./components/Navigation";
import foote from "./components/Footer";
import home from "./components/HomeSection";
import about from "./components/AboutSection";
import download from "./components/DownloadSection";
import pricing from "./components/PricingSection";
import contact from "./components/ContactSection";

export default {
  name: "App",

  components: {
    navigation,
    foote,
    home,
    about,
    download,
    pricing,
    contact,
  },

  data: () => ({
    color: "#FBDBA3",
    flat: true,
  }),
};
</script>
