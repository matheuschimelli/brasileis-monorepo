<template>
  <article>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" md="8" lg="8">
        <v-card outlined tile>
          <v-card-text class="text--primary">
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
<style scoped>
article {
  margin-top: 70px !important;
}
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
  border-left: 10px solid black;
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
}
.lawHeader {
  margin-bottom: 50px;
}
.lawBox {
  position: absolute;
  z-index: 1000;
}
.lawContent {
  font-size: 15px;
  line-height: 1.5em;
  font-family: 'Roboto', sans-serif;
  color: #171717;
  text-align: justify;
  text-indent: 3rem;
  padding: 10px;
}
.sidebar {
  position: sticky;
  top: 100px;
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
