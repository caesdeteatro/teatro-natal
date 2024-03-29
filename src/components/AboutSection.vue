<template>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col
          cols="11"
          v-for="(play, index) in stage_plays"
          :key="index"
          class="mb-10"
        >
          <v-row align="center" justify="center" class="mb-10">
            <v-col class="d-flex d-md-none">
              <v-img :src="play.img" class="ml-auto mr-auto espetaculo_img" />
            </v-col>

            <v-col cols="12" md="7">
              <h1 class="mb-6">{{ play.name }}</h1>
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  <p>
                    {{ play.description }}
                  </p>
                  <font-awesome-icon icon="fa-light fa-calendar" />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="d-flex align-center mt-n6">
                  <div>
                    <v-icon>mdi-arrow-up</v-icon>
                  </div>
                </v-col>
              </v-row>
              <v-row class="buttonRow">
                <v-btn
                  rounded
                  height="40"
                  color="#64A289"
                  large
                  dark
                  class="text-capitalize buton"
                >
                  Ingressos
                </v-btn>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <v-img
                :src="play.img"
                class="d-block ml-auto mr-auto espetaculo_img"
                max-width="400px"
                min-height="400px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      stage_plays: [
        {
          name: "Jacy",
          description:
            "Em pesquisa para um espetáculo teatral, o diretor, ator e dramaturgo Henrique Fontes encontrou uma frasqueira jogada no lixo contendo vestígios de vida de uma mulher de noventa anos. Este fato real levou o grupo a conduzir uma pesquisa que duraria três anos e que, em 2013 resultou na peça de teatro documental intitulada “Jacy”.",
          img: "https://jornaldacidade.net/uploads/usuario/2019/10/09//Jacy_Grupo_Carmin_2_-_IAN_RASSARI.jpg",
          purchase_link: "https://instagram.com.br/caesdeteatro",
          type: "STAGE_PLAY",
        },
        {
          name: "II Amostra de Cenas Curtas",
          description:
            "Em pesquisa para um espetáculo teatral, o diretor, ator e dramaturgo Henrique Fontes encontrou uma frasqueira jogada no lixo contendo vestígios de vida de uma mulher de noventa anos. Este fato real levou o grupo a conduzir uma pesquisa que duraria três anos e que, em 2013 resultou na peça de teatro documental intitulada “Jacy”.",
          img: "https://jornaldacidade.net/uploads/usuario/2019/10/09//Jacy_Grupo_Carmin_2_-_IAN_RASSARI.jpg",
          purchase_link: "https://instagram.com.br/caesdeteatro",
          type: "STAGE_PLAY",
        },
        {
          name: "Clenyldes e Clenôrys ou A IRRESOLUTA HISTÓRIA DE PARAÍSO, a maior pequena cidade do mundo",
          description:
            "A dramaturgia, escrita por César Ferrario com colaboração de Márcio Benjamin, narra a história de duas gêmeas bivitelinas de pais diferentes (fato cientificamente comprovado), trazendo consigo uma irônica representação da dualidade universal",
          img: "https://i.ibb.co/7rZRBVq/432930689-18271756081203496-6633073548869819199-n.jpg",
          purchase_link: "https://instagram.com.br/caesdeteatro",
          type: "STAGE_PLAY",
        },
        {
          name: "O Santo e a Porca",
          description:
            "A dramaturgia, escrita por César Ferrario com colaboração de Márcio Benjamin, narra a história de duas gêmeas bivitelinas de pais diferentes (fato cientificamente comprovado), trazendo consigo uma irônica representação da dualidade universal",
          img: "https://i.ibb.co/7rZRBVq/432930689-18271756081203496-6633073548869819199-n.jpg",
          purchase_link: "https://instagram.com.br/caesdeteatro",
          type: "STAGE_PLAY",
        },
        {
          name: "Cães, o Espetáculo",
          description:
            "Quando um roubo dá errado, quatro assaltantes se veem presos em um armazém com um deles ferido, e em meio ao caos precisam descobrir quem é o traidor entre eles.",
          img: "https://i.ibb.co/RNK2pzy/espetaculo-caes.png",
          purchase_link: "https://instagram.com.br/caesdeteatro",
          type: "STAGE_PLAY",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 40px;
}

p {
  color: #4c4c4c;
  font-size: 20px;
  display: flex;
  width: 65%;
  font-weight: 400;

  @media (max-width: 1100px) {
    width: 100%;
  }
}

.espetaculo_img {
  border-radius: 16px;
}

.buttonRow {
  @media (max-width: 1100px) {
    justify-content: center;
  }
}
</style>
