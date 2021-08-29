<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    :return-value.sync="time"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="hourTime"
        label="Horário"
        prepend-inner-icon="mdi-clock-time-four-outline"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-time-picker
      v-if="menu"
      v-model="hourTime"
      full-width
      @click:minute="$refs.menu.save(hourTime)"
    ></v-time-picker>
  </v-menu>
</template>
<script>
export default {
  props: ['value'],
  data() {
    return {
      menu: false,
      time: null,
    }
  },
  computed: {
    hourTime: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
}
</script>
