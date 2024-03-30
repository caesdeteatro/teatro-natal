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
              <v-row class="buttonRow">
                <v-btn
                  height="48"
                  width="120"
                  color="#64A289"
                  dark
                  class="rounded-lg text-capitalize font-weight-light"
                  elevation="0"
                  @click="gotToLink(play.link)"
                >
                  {{ play.hasPurchaseLink ? "Ingressos" : "Saiba mais" }}
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
          img: "https://images.sympla.com.br/6603125c6bd7b-lg.jpg",
          link:
            "https://www.sympla.com.br/evento/espetaculo-jacy-no-teatro-alberto-maranhao/2391168",
          type: "STAGE",
          hasPurchaseLink: true,
          isFree: true,
        },
        {
          name: "II Festival de Cenas Curtas",
          description:
            "Os nossos alunos do curso Mestres da Cenas vão subir no palco do Teatro Alberto Maranhão no II Festival de Cenas Curtas do Mestres da Cena! 🎭",
          img: "https://imagens.outgo.com.br/events/53007/thumb_lg_8af3821c-713b-414a-b5ac-9f781e9828f8.jpeg",
          link:
            "https://outgo.com.br/ii-festival-de-cenas-curtas-do-mestres-da-cena137",
          type: "STAGE",
          hasPurchaseLink: true,
          isFree: false,
        },
        {
          name: "Clenyldes e Clenôrys ou A IRRESOLUTA HISTÓRIA DE PARAÍSO, a maior pequena cidade do mundo",
          description:
            "A dramaturgia, escrita por César Ferrario com colaboração de Márcio Benjamin, narra a história de duas gêmeas bivitelinas de pais diferentes (fato cientificamente comprovado), trazendo consigo uma irônica representação da dualidade universal",
          img: "https://i.ibb.co/7rZRBVq/432930689-18271756081203496-6633073548869819199-n.jpg",
          link: "https://www.instagram.com/p/C5EnyUROCdS/",
          type: "STAGE",
          hasPurchaseLink: false,
          isFree: true,
        },
        {
          name: "O Santo e a Porca",
          description:
            "O Santo e a Porca narra a trajetória de um velho avarento conhecido como Euricão Árabe. O protagonista é devoto de Santo Antônio e guarda as economias de toda a vida numa porca de madeira. Ao receber uma carta de Eudoro dizendo que este iria privá-lo de seu precioso tesouro, Euricão fica apreensivo achando que Eudoro irá pedir o dinheiro da porca. Caroba, a empregada da casa, entende a situação, e decide se aproveitar para arranjar algum dinheiro e se casar com Pinhão, seu noivo. E é aí que começa a confusão..",
          img: "https://images.sympla.com.br/6603376e26524-lg.jpg",
          link:
            "https://www.sympla.com.br/evento/espetaculo-o-santo-e-a-porca/2396853",
          type: "STAGE",
          hasPurchaseLink: true,
          isFree: false,
        },
        {
          name: "TOURO {BULL}",
          description:
            "TOURO {BULL} É um espetáculo que aborda o tema da ancestralidade feminina a partir do ponto de vista da cultura nordestina. A partir das memórias da dançarina e coreógrafa Valéria Pinheiro, reconstruímos alguns dos arquétipos do imaginário nordestino em formato de uma sinfonia de sapateado, sapateios identitários brasileiros: Brinquedos e folguedos têm passos ritmados e batidas de pé.",
          img: "https://images.sympla.com.br/6604514090600-lg.jpg",
          link:
            "https://www.sympla.com.br/evento/touro-bull-em-natal/2399912",
          type: "STAGE",
          hasPurchaseLink: true,
          isFree: false,
        },
        {
          name: "Fábulas de Nossas Fúrias",
          description:
            "Fabulas de Nossas Fúrias, o espetáculo, ensaia um manifesto pelo direito de sentir raiva. Rodeados de cães, quatro pessoas esgotam seus instintos e expõe modos de ver o mundo. A Fábula é metáfora para a condição eminente de suas existências que em jogo de observação mútua, camadas de raiva são expostas para revelar a crueldade de ser gente. Aurora, uma mulher negra, resiste ao eminente ataque e asa suas palavras para escapar e resistir. Em um diálogo direto com a idéia de Justa Raiva defendida por Paulo Freire, uma mulher e três homens apontam caminhos para não sucumbir ante o horror e resistir aos fetiches da desumanização. ",
          img: "https://imagens.outgo.com.br/events/53582/thumb_lg_63d9e0af-6d96-41c0-907f-95ac023a6806.jpeg",
          link: "https://outgo.com.br/fabulas-de-nossas-furias111",
          type: "STAGE",
          hasPurchaseLink: true,
          isFree: false,
        },
        {
          name: "Lab CoCria - O projeto PARA o edital: uma questão de estratégia",
          description:
            "O Lab Cocria, é uma iniciativa que busca descentralizar e democratizar o acesso à formação cultural e à economia criativa, mais que um laboratório de capacitação cultural; é uma oportunidade para os jovens se envolverem em processos participativos inovadores, utilizando o saber cultural como uma ferramenta para gerar emprego, renda e desenvolvimento em suas comunidades.",
          img: "https://i.ibb.co/d5H77BK/labCria.jpg",
          link:
            "https://docs.google.com/forms/d/e/1FAIpQLSfUALM0GjAs0hESdg9IcpiSUIHXCqy8FPInxYFFSAE8s4POxA/viewform",
          type: "WORKSHOP",
          isFree: false,
        },
        {
          name: "Circuito Urbio",
          description:
            "Será uma experiência de imersão na cidade que a gente habita e que habita a gente, pra quem disposto a explorar as possibilidades de passado, presente e futuro em Natal.",
          img: "https://i.ibb.co/PmsR0cG/urbio.png",
          link:
            "https://docs.google.com/forms/d/e/1FAIpQLSeYagkV57rwKotRcT_BlxvIpihDqHRjJwrMLKe68OOovPw2Cg/viewform",
          type: "WORKSHOP",
          isFree: false,
        },
      ],
    };
  },
  methods: {
    gotToLink(link) {
      window.open(link, "_blank");
    },
  },
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
