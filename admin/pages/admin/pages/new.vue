<template>
  <v-app>
    <v-container>
      <SnackBar
        :color="snackbar.color"
        :message="snackbar.message"
        :showsnack="snackbar.show"
      />
      <ErrorAlert v-show="alert.error" :message="alert.message" />

      <div>teste</div>
    </v-container>
  </v-app>
</template>
<script>
import moment from 'moment'
import ErrorAlert from '@/components/shared/ErrorAlert'
import SnackBar from '@/components/shared/SnackBar'
moment.locale('pt-br')
export default {
  components: {
    ErrorAlert,
    SnackBar,
  },

  layout: 'admin',
  middleware: 'admin',
  data() {
    return {
      announcementModel: false,
      loadingBtn: false,
      menu1: false,
      date: '',
      announcement: {
        title: null,
        content: null,
      },
      alert: {
        message: null,
        error: false,
      },
      snackbar: {
        show: false,
        color: 'success',
        message: '',
      },
    }
  },
  computed: {
    computedDateFormattedMomentjs() {
      return this.date ? moment(this.date).format('LL') : ''
    },
  },

  methods: {
    async create() {
      console.log(this.date)
      console.log(this.weekMeetingDesignations)
      this.alert.error = false

      this.loadingBtn = true
      try {
        const { data } = await this.$axios.post(`/weekdesignations`, {
          date: moment(this.date).toISOString(),
          ...this.weekMeetingDesignations,
        })
        this.snackbar.show = true
        this.snackbar.color = 'success'
        this.snackbar.message = 'Designações criadas!'
        this.loadingBtn = false
        return this.$router.push(
          `/admin/designacoes/meio-de-semana/${data._id}`
        )
      } catch (error) {
        this.loadingBtn = false
        this.alert.error = true
        this.alert.message = error.response.data.message
      }
    },
  },
}
</script>
<style lang="scss">
.content {
  position: relative;
  line-height: 1.5em;
  padding-top: 113px;
  padding-right: 75px;
  padding-bottom: 75px;
  padding-left: 113px;
}
</style>
