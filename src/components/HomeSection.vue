<template>
  <section id="hero">
    <!-- <v-row align="center" justify="center" class="teste hidden-md-and-down">
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
    </v-row> -->

    <v-row align="center" justify="center" class="teste d-md-none">
      <v-col cols="12">
        <div class="testere ">
          <div>
            <Flicking
              :plugins="plugins"
              :options="{
                renderOnlyVisible: true,
                defaultIndex: 2,
                align: prev,
                circular: true,
              }"
            >
              <div
                class="responsiveImage"
                v-for="(data, index) in stage_plays"
                :key="index"
              >
                <img height="300" width="100" :src="data.img" />
              </div>
            </Flicking>
          </div>
        </div>

        <div class="onlyText">
          <h1 class="mb-6 mainText">Ta afim de consumir teatro?</h1>
          <span class="mb-10">
            A gente separou pra você as últimas atrações que estão rolando aqui
            em Natal, bora?
          </span>

        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { AutoPlay } from "@egjs/flicking-plugins";

const plugins = [new AutoPlay({ duration: 2300, direction: "NEXT" })];
export default {
  data() {
    return {
      plugins,
      dialog: false,
      stage_plays: [
        {
          name: "Jacy",
          description:
            "Em pesquisa para um espetáculo teatral, o diretor, ator e dramaturgo Henrique Fontes encontrou uma frasqueira jogada no lixo contendo vestígios de vida de uma mulher de noventa anos. Este fato real levou o grupo a conduzir uma pesquisa que duraria três anos e que, em 2013 resultou na peça de teatro documental intitulada “Jacy”.",
          img: "https://images.sympla.com.br/6603125c6bd7b-lg.jpg",
          purchase_link:
            "https://www.sympla.com.br/evento/espetaculo-jacy-no-teatro-alberto-maranhao/2391168",
          type: "STAGE",
          hasPurchaseLink: true,
        },
        {
          name: "Clenyldes e Clenôrys ou A IRRESOLUTA HISTÓRIA DE PARAÍSO, a maior pequena cidade do mundo",
          description:
            "A dramaturgia, escrita por César Ferrario com colaboração de Márcio Benjamin, narra a história de duas gêmeas bivitelinas de pais diferentes (fato cientificamente comprovado), trazendo consigo uma irônica representação da dualidade universal",
          img: "https://i.ibb.co/7rZRBVq/432930689-18271756081203496-6633073548869819199-n.jpg",
          purchase_link: "https://www.instagram.com/casadezoe/",
          type: "STAGE",
          hasPurchaseLink: false,
        },
        {
          name: "O Santo e a Porca",
          description:
            "O Santo e a Porca é uma adaptação da obra do mestre Ariano Suassuna, encenada pelo Grupo de Teatro Baobá e narra a trajetória de um velho avarento conhecido como Euricão Árabe. O protagonista é devoto de Santo Antônio e guarda as economias de toda a vida numa porca de madeira. Ao receber uma carta de Eudoro dizendo que este iria privá-lo de seu precioso tesouro, Euricão fica apreensivo achando que Eudoro irá pedir o dinheiro da porca. Caroba, a empregada da casa, entende a situação, e decide se aproveitar para arranjar algum dinheiro e se casar com Pinhão, seu noivo. E é aí que começa a confusão..",
          img: "https://images.sympla.com.br/6603376e26524-lg.jpg",
          purchase_link:
            "https://www.sympla.com.br/evento/espetaculo-o-santo-e-a-porca/2396853",
          type: "STAGE",
          hasPurchaseLink: true,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");

.testere {
  width: 100vw;
}

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
