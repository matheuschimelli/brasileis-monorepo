<template>
  <v-card outlined class="featuredCard">
    <v-card-title class="realTimeTitle">
      <v-icon left color="#b82f00">mdi-rss</v-icon>
      Leis em Tempo Real
      <div class="boxPooling"><div class="realTimePooling"></div></div>
    </v-card-title>
    <v-card-text>
      <v-card outlined>
        <v-card-subtitle>Decreto Lei 1101/2005</v-card-subtitle>
      </v-card>
    </v-card-text>
    <v-divider></v-divider>
  </v-card>
</template>
<style>
.realTimePooling {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgb(184 47 0);
  box-shadow: rgb(184 47 0 / 40%) 0 0 0;
  animation: 2s ease 0s infinite normal none running poolingCircle;
}
.boxPooling {
  width: 20px;
  height: 20px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}
@keyframes poolingCircle {
  from {
    background-color: rgb(184 47 0);
  }
  to {
    background-color: rgb(184 47 0 / 50%);
    width: 12px;
    height: 12px;
  }
}
</style>
