<template>
  <v-btn depressed color="primary" block large @click="signinGoogle">
    <v-icon left color="white"> mdi-google </v-icon> Entrar com Google
  </v-btn>
</template>
<script>
export default {
  methods: {
    signinGoogle() {
      this.$auth.loginWith('social')
    },
  },
}
</script>

<style scoped>
.btnGoogle {
  display: flex;
  flex-direction: row;
  background-color: rgb(66, 133, 244);
  box-sizing: content-box;
  cursor: pointer;
  padding: 0 2px 0 0;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(66, 133, 244);
  border-image: initial;
  border-radius: 2px;
  width: 100%;
}
.btnGoogle:hover {
  background-color: rgb(53, 120, 231);
  border-color: rgb(53, 120, 231);
}
button svg {
  cursor: pointer;
  width: 40;
  height: 40;
}
.innerBtn {
  cursor: pointer;
  -webkit-box-flex: 1;
  flex-grow: 1;
  height: 40px;
}
.innerBtn .text {
  cursor: pointer;
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  line-height: 40px;
  height: 40px;
}
</style>
