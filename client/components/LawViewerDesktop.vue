<template>
  <article class="post">
    <v-row align="start" justify="center">
      <v-col cols="12" sm="12" md="8" lg="8">
        <v-card outlined tile>
          <v-card-text>
            <h1>{{ law.title }}</h1>
            <div
              class="lawContent"
              @click="closeBox"
              @mouseover="openReferences"
              @mouseout="closeReferences"
              v-html="htmlContent"
            ></div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="4" class="sidebar">
        <v-tabs v-model="tab" fixed-tabs>
          <v-tabs-slider color="#b82f00"></v-tabs-slider>

          <v-tab> <v-icon>mdi-information-outline</v-icon></v-tab>

          <v-tab> <v-icon>mdi-link-variant</v-icon></v-tab>
          <v-tab> <v-icon>mdi-comment-quote-outline</v-icon></v-tab>
        </v-tabs>
        <v-sheet
          id="scrolling-techniques-2"
          class="overflow-y-auto"
          max-height="450"
        >
          <div style="height: 100%">
            <v-tabs-items v-model="tab">
              <v-tab-item>
                <v-card tile outlined>
                  <v-card-text class="text--primary">
                    <v-card-title class="sidebarTitle">{{
                      law.title
                    }}</v-card-title>
                    <v-list>
                      <v-list-item three-line>
                        <v-list-item-icon>
                          <v-icon color="#b82f00"> mdi-tag</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title>Categorias</v-list-item-title>
                          <v-list-item-subtitle>
                            <v-chip
                              v-for="category of law.categories"
                              :key="category.id"
                              :to="
                                '/busca?q=' +
                                category.name +
                                '&categories=' +
                                category.name
                              "
                              outlined
                              color="#b82f00"
                              small
                              class="ma-2"
                              label
                              >{{ category.name }}
                            </v-chip>
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item three-line>
                        <v-list-item-icon>
                          <v-icon color="#b82f00"> mdi-tag-multiple</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title>Sub Categorias</v-list-item-title>
                          <v-list-item-subtitle>
                            <v-chip
                              v-for="subCategory of law.subCategories"
                              :key="subCategory.id"
                              :to="
                                '/busca?q=' +
                                subCategory.name +
                                '&subcategories=' +
                                subCategory.name
                              "
                              outlined
                              color="#b82f00"
                              small
                              class="ma-2"
                              label
                              >{{ subCategory.name }}
                            </v-chip>
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item three-line>
                        <v-list-item-icon>
                          <v-icon color="warning">
                            mdi-alert-circle-outline</v-icon
                          >
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title> Atenção </v-list-item-title>
                          <v-list-item-subtitle>
                            Confirme a informação atualizada junto à fonte
                            oficial
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item three-line>
                        <v-list-item-icon>
                          <v-icon color="success">
                            mdi-clock-check-outline</v-icon
                          >
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title> Indexado em: </v-list-item-title>
                          <v-list-item-subtitle>
                            <time
                              itemprop="datePublished"
                              :datetime="law.createdAt"
                            >
                              {{ formatDate(law.updatedAt) }} -
                              {{ lastTimeUpdated(law.updatedAt) }}
                            </time>
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item :href="law.url" target="_blank" three-line>
                        <v-list-item-icon>
                          <v-icon color="primary"> mdi-web</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title> Fonte </v-list-item-title>
                          <v-list-item-subtitle>{{
                            law.url
                          }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card outlined tile>
                  <v-card-text>Links e referencias</v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card outlined tile>
                  <v-card-text
                    >Nenhum comentário sobre essa lei foi
                    encontrado.</v-card-text
                  >
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </article>
</template>
<script>
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import weekday from 'dayjs/plugin/weekday'
import pt from 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(weekday)
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

dayjs.locale({
  ...pt,
})

export default {
  props: {
    law: {
      type: Object,
      default: Object,
    },
    htmlContent: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      tab: null,
    }
  },
  methods: {
    formatDate(datetime) {
      return dayjs(datetime).format('l LT')
    },
    lastTimeUpdated(datetime) {
      return dayjs(datetime).startOf('hour').fromNow()
    },
    async openReferences(e) {
      const self = this
      if (e.target.matches('#lawReference')) {
        self.showLawRef = true
        self.lawBoxY = e.pageY - 300
        self.lawBoxX = e.pageX - 150
        try {
          const { data } = await self.$axios.get(
            `/finder?q=${e.target.outerText}`
          )
          this.referenceBoxData = data.result
        } catch (error) {
          console.log(error)
        }
      }
    },
    closeReferences(e) {
      // const self = this
      // console.log({ closeReference: e })
      // if (e.target.matches('#lawReference')) {
      // console.log('closing ref')
      // self.showLawRef = false
      // }
    },
    closeBox(e) {
      const self = this
      if (!e.target.matches('#lawReference')) {
        e.preventDefault()
        self.showLawRef = false
        self.referenceBoxData = {}
      }
    },
  },
}
</script>
<style lang="scss">
.theme--light.v-card > .v-card__text,
.theme--light.v-card .v-card__subtitle {
  font-size: 18px;
  line-height: 2rem;
  font-family: 'Roboto', sans-serif;
  color: black !important;
}

.summary {
  color: #838383;
  font-size: 24px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  margin: 0;
}

u {
  font-weight: bold;
  font-style: normal;
  color: #111;
  letter-spacing: 0.1em;
  text-decoration: none;
  box-shadow: 0 1px 0 white, 0 4px 0 #111;
  text-transform: uppercase;
}
blockquote {
  margin: 2em 0;
  font-weight: 500;
  font-style: normal;
  font-size: 25px;
  line-height: 1.15385;
  color: #111;
  box-shadow: none;
  border-left: 5px solid black;
  padding: 10px;
}
table {
  border: 3px solid #000;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
}
table td,
table th {
  border: 1px solid #000;
  padding: 5px 4px;
}
table tbody td {
  font-size: 13px;
}
table thead {
  background: #cfcfcf;
  background: -moz-linear-gradient(top, #dbdbdb 0%, #d3d3d3 66%, #cfcfcf 100%);
  background: -webkit-linear-gradient(
    top,
    #dbdbdb 0%,
    #d3d3d3 66%,
    #cfcfcf 100%
  );
  background: linear-gradient(to bottom, #dbdbdb 0%, #d3d3d3 66%, #cfcfcf 100%);
  border-bottom: 3px solid #000;
}
table thead th {
  font-size: 15px;
  font-weight: bold;
  color: #000;
  text-align: left;
}
table tfoot {
  font-size: 14px;
  font-weight: bold;
  color: #000;
  border-top: 3px solid #000;
}
table tfoot td {
  font-size: 14px;
}
h1 {
  word-break: break-word;
  text-align: center;
}
.lawHeader {
  margin-bottom: 50px;
}
.lawBox {
  position: absolute;
  z-index: 1000;
}
.lawContent {
  color: #171717;
  padding: 10px;
  text-align: justify;
  p,
  span,
  div,
  b,
  i,
  strong {
    font-size: 15px !important;
    line-height: 1.5em !important;
    font-family: 'Roboto', sans-serif !important;
    text-indent: 3rem !important;
  }
  .revogado,
  .sefazElement-TextoRevogado {
    text-align: justify;
    font-size: 10px;
    color: #c92525;
    font-style: italic;
    padding-top: 2px !important;
    margin-bottom: 2px !important;
    text-decoration: line-through !important;
  }
  table,
  p.revogado::before {
    content: '(Revogado) ';
  }
}

.sidebar {
  position: sticky;
  top: 77px;
}

.sidebarTitle {
  word-break: break-word;
}

@media (max-width: 620px) {
  .sidebar {
    position: relative;
    top: 0;
  }
  .lawContent {
    padding: 0;
  }
}
</style>
