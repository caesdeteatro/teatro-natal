<template>
  <section id="hero" class="mt-6">
    <v-row align="center" justify="center" class="teste hidden-md-and-down">
      <v-col cols="10">
        <v-row align="center" justify="center">
          <v-col cols="6" md="12" xl="6" lg="6">
            <h1 class="mb-4 mainText">Ta afim de consumir teatro?</h1>
            <span>
              A gente separou pra você as últimas atrações que estão rolando
              aqui em Natal, bora?
            </span>
            <span class="mdi mdi-checkbox-blank-circle"></span>
          </v-col>

          <v-col cols="6" md="12" xl="6" lg="6" class="">
            <img
              height="700px"
              src="../assets/img/foto-peças.png"
              class="mainImage"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row align="center" justify="center" class="teste d-md-none">
      <v-col cols="12">
        <div class="responsiveImage">
          <img height="220px" src="https://i.ibb.co/7rZRBVq/432930689-18271756081203496-6633073548869819199-n.jpg" />
        </div>

        <div class="onlyText">
          <h1 class="mb-6 mainText">Ta afim de consumir teatro?</h1>
          <span>
            A gente separou pra você as últimas atrações que estão rolando aqui
            em Natal, bora?
          </span>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");

.teste {
  height: 90vh;
  margin-bottom: 60px;
  width: 100vw;
}

.mainText {
  font-family: "Outfit", sans-serif;
  font-size: 96px;
  line-height: 100px;
  display: flex;
  width: 65%;

  @media (max-width: 1400px) {
    width: 100%;
  }

  @media (max-width: 1180px) {
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 960px) {
    line-height: 50px;
    font-size: 50px;
  }
}

.onlyText {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  text-align: center;
  align-items: center;
}

.mainImage {
  @media (max-width: 1400px) {
    height: 460px;
    margin-top: 24px;
  }

  @media (max-width: 1180px) {
    display: none;
  }
}

.responsiveImage {
  width: 100vw;
  padding: 20px;
  img {
    width: 100%;
    border-radius: 16px;
  }
}

span {
  font-size: 24px;
  color: #4c4c4c;
  width: 60%;
  display: flex;
  line-height: 28px;

  @media (max-width: 1400px) {
    width: 85%;
  }

  @media (max-width: 960px) {
    line-height: 28px;
    width: 100%;
    font-size: 20px;
    justify-content: center;
  }
}
</style>
