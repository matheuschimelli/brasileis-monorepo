<template>
  <v-row>
    <v-col cols="12" xl="12" sm="12" md="12" lg="6">
      <Advice />
      <Advice />
    </v-col>
    <v-col cols="12" xl="12" sm="12" md="12" lg="6">
      <v-tabs
        v-model="tab"
        color="#885ec6"
        background-color="transparent"
        centered
        grow
      >
        <v-tab> Quinta-feira </v-tab>
        <v-tab> Domingo </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <WeekMeeting />
        </v-tab-item>
      </v-tabs-items>
      <v-tabs-items v-model="tab">
        <v-tab-item>DOMINGO </v-tab-item>
      </v-tabs-items>
    </v-col>
    <!-- <v-divider vertical></v-divider> 
            <v-col cols="12" xl="12" sm="12" md="12" lg="6">
              <div class="talks dividerBorder">
                <div class="presidentandpray">
                  <li>
                    <span class="font-weight-black"> Presidente: </span> teste
                  </li>
                </div>
                <p class="treasures talkDivider font-weight-bold">
                  DISCURSO PÚBLICO
                </p>

                <div class="talkContainer">
                  <div class="talkTitle">
                    <b>“Tenha o mesmo conceito de Jeová sobre a vida”:</b> (10
                    min)
                  </div>
                  <div class="talkSpeecher">
                    <v-icon left color="#373737">mdi-account-tie</v-icon> Jacks
                    Evaristo
                  </div>
                </div>

                <p class="applyYourself talkDivider font-weight-bold">
                  A SENTINELA
                </p>

                <div class="talkContainer">
                  <div class="talkTitle">
                    <b>Leitor</b>
                  </div>
                  <div class="talkSpeecher">
                    <v-icon left color="#373737">mdi-account-tie</v-icon> Jacks
                    Evaristo
                  </div>
                </div>
              </div>
            </v-col>
            -->
  </v-row>
</template>
