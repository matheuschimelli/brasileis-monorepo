<template>
  <v-row>
    <v-col cols="12" sm="12" md="9" lg="9">
      <v-expansion-panels>
        <v-expansion-panel>
          <!-- Basic Crawler Settings-->
          <v-expansion-panel-header>
            <h2>
              <v-icon color="primary" left>mdi-cogs</v-icon> Configurações
              Básicas
            </h2>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-text-field
              v-model="data.crawlerName"
              placeholder="Utilize um nome descritivo"
              label="Nome do Crawler"
              prepend-inner-icon="mdi-rename-box"
              outlined
            />
            <v-row>
              <v-col cols="12" sm="12" md="6" lg="6">
                <v-text-field
                  v-model="data.baseUrl"
                  placeholder="URL que deve ser seguida. Deixe em branco para todos"
                  label="URL Base"
                  prepend-inner-icon="mdi-link"
                  outlined
                />
              </v-col>
              <v-col cols="12" sm="12" md="6" lg="6">
                <CrawlerTypeInput v-model="data.crawlerType" />
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- URLs List-->
        <v-expansion-panel>
          <v-expansion-panel-header>
            <h2>
              <v-icon color="primary" left>mdi-view-list</v-icon> Lista de URLs
            </h2>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-textarea
              v-model="urlsListLine"
              outlined
              placeholder="Lista de URLs a serem visitados. Somente 1 URL por linha"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>

        <!--Page Content HTML Selectors ---->
        <v-expansion-panel>
          <v-expansion-panel-header>
            <h2>
              <v-icon left color="primary">mdi-view-dashboard-outline</v-icon>
              Seletores HTML
            </h2>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <v-col cols="12" sm="12" md="4" lg="4">
                <v-text-field
                  v-model="data.htmlSelectors.urlListEl"
                  outlined
                  label="Seletor HTML lista de links"
                  placeholder="Tag Lista Links"
                  prepend-inner-icon="mdi-view-list"
                  value="body"
                />
              </v-col>
              <v-col cols="12" sm="12" md="4" lg="4">
                <v-text-field
                  v-model="data.htmlSelectors.titleEl"
                  outlined
                  label="Seletor HTML título da página"
                  placeholder="Tag Título"
                  value="title"
                  prepend-inner-icon="mdi-format-title"
                />
              </v-col>
              <v-col cols="12" sm="12" md="4" lg="4">
                <v-text-field
                  v-model="data.htmlSelectors.contentEl"
                  outlined
                  label="Seletor HTML conteudo página"
                  placeholder="Tag Conteúdo"
                  prepend-inner-icon="mdi-view-compact"
                  value="body"
                />
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <!--Update Time Selectors ---->
        <v-expansion-panel>
          <v-expansion-panel-header>
            <h2>
              <v-icon left color="primary">mdi-briefcase-clock-outline</v-icon>
              Tarefa Agendada
            </h2>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <v-col cols="12" sm="12" md="6" lg="6">
                <v-checkbox
                  v-model="crawlerDays"
                  label="Todos os Dias"
                  @click="setAllDaysJob"
                />
              </v-col>
              <v-col cols="12" sm="12" md="6" lg="6">
                <v-checkbox
                  label="Mesmo Horário de Segunda para todos"
                  @click="setMondayTimeToAll"
                />
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12" sm="6" md="6" lg="6">
                <v-row>
                  <v-col cols="6" sm="6" md="6" lg="6">
                    <v-checkbox
                      v-model="data.updateTime.monday"
                      label="Segunda"
                      prepend-icon="mdi-calendar"
                    ></v-checkbox>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" lg="6">
                    <TimeSelector v-model="data.updateTime.updateMondayTime" />
                  </v-col>
                </v-row>
                <v-divider></v-divider>

                <v-row>
                  <v-col cols="6" sm="6" md="6" lg="6">
                    <v-checkbox
                      v-model="data.updateTime.tuesday"
                      label="Terça"
                      prepend-icon="mdi-calendar"
                    ></v-checkbox>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" lg="6">
                    <TimeSelector v-model="data.updateTime.updateTuesdayTime" />
                  </v-col>
                </v-row>
                <v-divider></v-divider>

                <v-row>
                  <v-col cols="6" sm="6" md="6" lg="6">
                    <v-checkbox
                      v-model="data.updateTime.wednesday"
                      label="Quarta"
                      prepend-icon="mdi-calendar"
                    ></v-checkbox>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" lg="6">
                    <TimeSelector
                      v-model="data.updateTime.updateWednesdayTime"
                    />
                  </v-col>
                </v-row>
                <v-divider></v-divider>

                <v-row>
                  <v-col cols="6" sm="6" md="6" lg="6">
                    <v-checkbox
                      v-model="data.updateTime.thursday"
                      label="Quinta"
                      prepend-icon="mdi-calendar"
                    ></v-checkbox>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" lg="6">
                    <TimeSelector
                      v-model="data.updateTime.updateThursdayTime"
                    />
                  </v-col>
                </v-row>
              </v-col>
              <v-divider></v-divider>

              <v-col cols="12" sm="6" md="6" lg="6">
                <v-row>
                  <v-col cols="6" sm="6" md="6" lg="6">
                    <v-checkbox
                      v-model="data.updateTime.friday"
                      label="Sexta"
                      prepend-icon="mdi-calendar"
                    ></v-checkbox>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" lg="6">
                    <TimeSelector v-model="data.updateTime.updateFridayTime" />
                  </v-col>
                </v-row>
                <v-divider></v-divider>

                <v-row>
                  <v-col cols="6" sm="6" md="6" lg="6">
                    <v-checkbox
                      v-model="data.updateTime.saturday"
                      label="Sábado"
                      prepend-icon="mdi-calendar"
                    ></v-checkbox>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" lg="6">
                    <TimeSelector
                      v-model="data.updateTime.updateSaturdayTime"
                    />
                  </v-col>
                </v-row>
                <v-divider></v-divider>

                <v-row>
                  <v-col cols="6" sm="6" md="6" lg="6">
                    <v-checkbox
                      v-model="data.updateTime.sunday"
                      label="Domingo"
                      prepend-icon="mdi-calendar"
                    ></v-checkbox>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" lg="6">
                    <TimeSelector v-model="data.updateTime.updateSundayTime" />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
    <v-col cols="12" sm="12" md="3" lg="3">
      <v-card>
        <v-card-title>Categorias</v-card-title>
        <v-card-text>
          <CategoriesInput v-model="data.categories" />
        </v-card-text>
      </v-card>
      <v-card class="mt-5">
        <v-card-title>Sub Categorias</v-card-title>
        <v-card-text>
          <SubCategoriesInput v-model="data.subCategories" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from '@nuxtjs/composition-api'
import ArticleTitleInput from '@/components/Inputs/ArticleTitleInput.vue'
import TextEditor from '@/components/Inputs/TextEditor.vue'
import CategoriesInput from '@/components/Inputs/CategoriesInput.vue'
import SubCategoriesInput from '@/components/Inputs/SubCategoriesInput.vue'
import CrawlerTypeInput from '@/components/Inputs/CrawlerTypeInput.vue'
import TimeSelector from '@/components/shared/TimeSelector.vue'

export default defineComponent({
  props: {
    value: Object,
  },
  components: {
    ArticleTitleInput,
    TextEditor,
    CategoriesInput,
    SubCategoriesInput,
    CrawlerTypeInput,
    TimeSelector,
  },
  setup(props, { emit }) {
    const crawlerDays = ref(false)
    const data = computed({
      get: () => props.value,
      set: (value) => emit('input', value),
    })

    const urlsListLine = computed({
      get: () => {
        if (props.value) {
          if (props.value.urlsToVisit) {
            return props.value.urlsToVisit.toString().replaceAll(',', '\n')
          }
        }
      },
      set: (value) => {
        if (props.value) {
          if (props.value.urlsToVisit) {
            props.value.urlsToVisit = value.split('\n')

            return value
          }
        }
      },
    })

    const setAllDaysJob = () => {
      if (data.value) {
        if (data.value.updateTime) {
          if (crawlerDays.value === true) {
            data.value.updateTime.monday = true
            data.value.updateTime.tuesday = true
            data.value.updateTime.wednesday = true
            data.value.updateTime.thursday = true
            data.value.updateTime.friday = true
            data.value.updateTime.saturday = true
            data.value.updateTime.sunday = true
          } else {
            data.value.updateTime.monday = false
            data.value.updateTime.tuesday = false
            data.value.updateTime.wednesday = false
            data.value.updateTime.thursday = false
            data.value.updateTime.friday = false
            data.value.updateTime.saturday = false
            data.value.updateTime.sunday = false
          }
        }
      }
    }

    const setMondayTimeToAll = () => {
      if (data.value) {
        if (
          data.value.updateTime.updateMondayTime !== null ||
          data.value.updateTime.updateMondayTime !== ''
        ) {
          data.value.updateTime.updateTuesdayTime =
            data.value.updateTime.updateMondayTime

          data.value.updateTime.updateWednesdayTime =
            data.value.updateTime.updateMondayTime

          data.value.updateTime.updateThursdayTime =
            data.value.updateTime.updateMondayTime

          data.value.updateTime.updateFridayTime =
            data.value.updateTime.updateMondayTime

          data.value.updateTime.updateSaturdayTime =
            data.value.updateTime.updateMondayTime

          data.value.updateTime.updateSundayTime =
            data.value.updateTime.updateMondayTime
        }
      }
    }

    return {
      data,
      urlsListLine,
      setAllDaysJob,
      crawlerDays,
      setMondayTimeToAll,
    }
  },
})
</script>
