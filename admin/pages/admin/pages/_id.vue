<template>
  <v-app>
    <v-container>
      <SnackBar
        :color="snackbar.color"
        :message="snackbar.message"
        :showsnack="snackbar.show"
      />
      <ErrorAlert v-show="alert.error" :message="alert.message" />

      <v-btn
        v-show="$vuetify.breakpoint.mdAndUp"
        class="ma-2"
        tile
        outlined
        color="success"
        :loading="loadingAnnouncementeButton"
        @click="update"
      >
        <v-icon left>mdi-content-save-edit-outline</v-icon> Atualizar anúncio
      </v-btn>

      <v-row>
        <v-col cols="12" sm="12" md="12">
          <v-text-field
            v-model="announcement.title"
            label="Título"
            required
            solo
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <TextEditor
            v-model="announcement.content"
            :load-content="announcement.content"
          />
        </v-col>
      </v-row>
    </v-container>

    <v-btn
      v-show="$vuetify.breakpoint.smAndDown"
      color="primary"
      depressed
      fab
      dark
      fixed
      bottom
      right
      class="customFab"
      :loading="loadingAnnouncementeButton"
      @click="update"
    >
      <v-icon>mdi-content-save-edit-outline</v-icon>
    </v-btn>
  </v-app>
</template>
<script>
import ErrorAlert from '@/components/shared/ErrorAlert'
import TextEditor from '@/components/Inputs/TextEditor'
import SnackBar from '@/components/shared/SnackBar'
export default {
  components: {
    TextEditor,
    ErrorAlert,
    SnackBar,
  },

  layout: 'admin',
  middleware: 'admin',
  data() {
    return {
      announcementModel: false,
      loadingAnnouncementeButton: false,
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
  async created() {
    await this.loadDoc()
  },
  methods: {
    async loadDoc() {
      try {
        const { data } = await this.$axios.get(
          `/announcements/${this.$route.params.id}`
        )
        this.announcement = data
      } catch (error) {
        console.log(error)
        this.alert.error = true
        this.alert.message = error.response.data.message
      }
    },
    async update() {
      this.loadingAnnouncementeButton = true
      try {
        await this.$axios.put(`/announcements/${this.$route.params.id}`, {
          ...this.announcement,
        })
        this.loadingAnnouncementeButton = false
        this.announcementModel = false
        this.alert.error = false
        this.snackbar.show = true
        this.snackbar.color = 'success'
        this.snackbar.message = 'Anúncio atualizado.'
      } catch (error) {
        this.loadingAnnouncementeButton = false
        this.alert.error = true
        this.alert.message = error.response.data.message
      }
    },
  },
}
</script>
<style lang="scss">
.customFab {
  margin-bottom: 50px !important;
}
</style>
