<template>
  <v-app>
    <SnackBar
      :color="snackbar.color"
      :message="snackbar.message"
      :showsnack="snackbar.show"
    />
    <ErrorAlert v-show="alert.error" :message="alert.message" />
    <AlertUser
      :show="alertDialog.show"
      :title="alertDialog.title"
      :message="alertDialog.message"
      :confirm="removeCrawler"
      :close="cancelDialog"
    />
    <div>
      <v-btn
        class="ma-2"
        tile
        outlined
        color="success"
        :loading="loadingBtn"
        @click="update"
      >
        <v-icon left>mdi-content-save-edit-outline</v-icon> Salvar crawler
      </v-btn>

      <v-btn
        class="ma-2"
        tile
        outlined
        color="red"
        :loading="loadingBtn"
        @click="confirmDelete"
      >
        <v-icon left>mdi-content-save-edit-outline</v-icon> Deletar Crawler
      </v-btn>
    </div>
    <div class="talks dividerBorder">
      <p class="mechanical-designation talkDivider font-weight-bold">
        Criar uma nova Página de Categoria
      </p>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="6">
          <v-text-field
            v-model="pageSettings.title"
            outlined
            label="Título da página"
          />
        </v-col>
        <v-col cols="12" sm="12" md="3" lg="3">
          <v-checkbox
            v-model="pageSettings.master"
            :label="`Página mestre ${pageSettings.master.toString()}`"
          ></v-checkbox>
        </v-col>
        <v-col cols="12" sm="12" md="3" lg="3">
          <v-checkbox
            v-model="pageSettings.grid"
            :label="`Página Grid ${pageSettings.grid.toString()}`"
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="12">
          <v-textarea
            v-model="pageSettings.content"
            outlined
            label="Descrição da página"
            placeholder="A descrição aparecerá para os usuários"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="3">
          <v-select
            v-model="pageSettings.categories"
            :items="fetchedCategories"
            attach
            item-value="id"
            item-text="name"
            outlined
            chips
            label="Categorias"
            multiple
            small-chips
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="3">
          <v-select
            v-model="pageSettings.subCategories"
            :items="fetchedSubCategories"
            attach
            item-value="id"
            item-text="name"
            outlined
            chips
            label="Sub Categorias"
            multiple
            small-chips
          ></v-select>
        </v-col>

        <v-col cols="12" sm="12" md="12" lg="3">
          <v-select
            v-model="pageSettings.parent"
            :items="fetchedPages"
            attach
            item-value="id"
            item-text="title"
            outlined
            label="Pagina superior"
          ></v-select>
        </v-col>

        <v-col cols="12" sm="12" md="12" lg="3">
          <v-select
            v-model="pageSettings.children"
            :items="fetchedPages"
            attach
            item-value="id"
            item-text="title"
            outlined
            chips
            label="Sub páginas"
            multiple
            small-chips
          ></v-select>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>
<script>
import ErrorAlert from '@/components/shared/ErrorAlert'
import SnackBar from '@/components/shared/SnackBar'
import AlertUser from '@/components/shared/AlertUser'

export default {
  components: {
    ErrorAlert,
    SnackBar,
    AlertUser,
  },
  layout: 'admin',
  middleware: 'admin',
  data() {
    return {
      loadingBtn: false,
      alert: {
        message: null,
        error: false,
      },
      alertDialog: {
        show: false,
        title: null,
        message: null,
      },
      snackbar: {
        show: false,
        color: 'success',
        message: '',
      },
      pageSettings: {
        master: false,
        grid: false,
      },
      fetchedCategories: null,
      fetchedSubCategories: null,
      fetchedPages: null,
    }
  },

  mounted() {
    this.fetchItems()
  },
  methods: {
    async fetchItems() {
      try {
        const { data: pageData } = await this.$axios.get(
          `/v1/category-pages/${this.$route.params.id}`
        )
        this.pageSettings = pageData
        console.log(this.pageSettings)
        const { data: categories } = await this.$axios.get('/categories')
        const { data: subCategores } = await this.$axios.get('/sub-categories')
        const { data: pages } = await this.$axios.get('/category-pages/list')

        this.fetchedSubCategories = subCategores
        this.fetchedCategories = categories
        this.fetchedPages = pages
      } catch (error) {
        console.log(error)
      }
    },
    async update() {
      this.alert.error = false
      this.loadingBtn = true

      try {
        await this.$axios.put(`/category-pages/${this.$route.params.id}`, {
          ...this.pageSettings,
        })

        this.snackbar.show = true
        this.snackbar.color = 'success'
        this.snackbar.message = 'Salvo'
        this.loadingBtn = false
      } catch (error) {
        this.loadingBtn = false
        this.alert.error = true
        this.alert.message = error.response.data.message
      }
    },
    confirmDelete() {
      this.alertDialog.show = true
      this.alertDialog.title = 'Apagar Crawler'
      this.alertDialog.message =
        'Se você deletar esse crawler todas as páginas indexadas por ele também serão deletadas'
    },
    cancelDialog() {
      this.alertDialog.show = false
    },

    async removeCrawler() {
      try {
        await this.$axios.delete(`/category-pages/${this.$route.params.id}`)
        this.alertDialog.false = false

        this.snackbar.show = true
        this.snackbar.color = 'success'
        this.snackbar.message = 'Salvo'
        this.loadingBtn = false

        return this.$router.push(`/admin/category-pages`)
      } catch (error) {
        this.alertDialog.false = false

        this.loadingBtn = false
        this.alert.error = true
        this.alert.message = error.response.data.message
      }
      console.log('deleted')
      this.alertDialog.show = false
    },
  },
}
</script>
<style lang="scss">
.customFab {
  margin-bottom: 50px !important;
}
</style>
