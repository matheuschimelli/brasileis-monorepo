<template>
  <div>
    <DeleteModal
      :is-open="deleteModal"
      title="Deletar petição"
      content="Se você deletar a petição não poderá recuperá-la. Essa ação não poderá ser desfeita."
      @onClose="deleteModal = false"
      @onConfirmDelete="deleteDocument"
    />
    <DocumentSettingsModal
      v-model="peticaoSettings"
      :is-open="documentModal"
      :document="peticao"
      @closeModal="documentModal = !documentModal"
      @onDeleteDocument="deleteModal = !deleteModal"
    />
    <EscritorioLayout
      logo
      doc-settings
      @docSettings="documentModal = !documentModal"
    >
      <div id="br-editor">
        <TextEditor
          v-model="peticao.content"
          :load-content="peticao.content"
          @updateDocument="saveUpdate"
        />
      </div>
    </EscritorioLayout>
  </div>
</template>
<script>
import EscritorioLayout from '../../../components/EscritorioVirtual/EscritorioLayout'
import DocumentSettingsModal from '../../../components/EscritorioVirtual/Peticao/DocumentSettingsModal'
import TextEditor from '../../../components/TextEditor/TextEditor'
import DeleteModal from '../../../components/DeleteModal'

export default {
  middleware: ['auth', 'hasEscritorio'],
  fetchOnServer: false,
  loading: false,
  layout: 'escritorioEditor',
  components: {
    EscritorioLayout,
    TextEditor,
    DocumentSettingsModal,
    DeleteModal,
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get(
        `/escritorio/peticoes/${this.$route.params.id}`
      )
      console.log(data)
      this.peticao = data.peticao
    } catch (error) {
      console.log(error)
      this.error = error.response.data.message
    }
  },
  data() {
    return {
      error: null,
      peticao: {},
      timer: null,
      errorMsg: null,
      toast: {
        visible: false,
        color: 'success',
        text: '',
      },
      documentModal: false,
      deleteModal: false,
      peticaoSettings: {},
    }
  },
  watch: {
    peticaoSettings: {
      deep: true,
      handler: 'updatePeticaoSettings',
    },
  },
  mounted() {
    this.$nuxt.$on('openSettingsDialog', () => {
      console.log('openSettingsDialog')
      this.documentModal = true
    })
  },

  methods: {
    sleep(ms) {
      return new Promise((resolve, reject) => {
        if (this.timer) {
          clearTimeout(this.timer)
          this.timer = null
        }
        this.timer = setTimeout(() => {
          resolve()
        }, ms)
      })
    },
    async saveUpdate(doc) {
      await this.sleep(2000)
      try {
        await this.$axios.put(`/escritorio/peticoes/${this.$route.params.id}`, {
          content: doc,
        })
      } catch (error) {
        console.log(error)
        this.errorMsg =
          error.response.data.message ||
          'Não foi possível salvar as alterações. Tente mais tarde'
      }
    },
    async updatePeticaoSettings(val) {
      try {
        await this.sleep(2000)
        await this.$axios.put(`/escritorio/peticoes/${this.$route.params.id}`, {
          titulo: val.titulo,
          private: val.private,
        })
      } catch (error) {
        console.log(error)
        this.errorMsg =
          error.response.data.message ||
          'Não foi possível salvar as alterações. Tente mais tarde'
      }
    },
    async deleteDocument() {
      try {
        await this.$axios.delete(
          `/escritorio/peticoes/${this.$route.params.id}`
        )

        return this.$router.push('/escritorio/peticoes')
      } catch (error) {
        console.log(error)
        this.errorMsg =
          error.response.data.message ||
          'Não foi possível deletar a petição. Tente mais tarde'
      }
    },
  },
  head() {
    return {
      title: this.peticao.titulo,
    }
  },
}
</script>
<style scoped>
#brEditor {
  height: 100% !important;
  overflow: hidden !important;
}
.navBar {
  border-bottom: 1px solid #ddd !important;
}
.container {
  margin-left: 0 !important;
  padding-left: 0 !important;
}
</style>
