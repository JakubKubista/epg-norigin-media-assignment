<template>
  <v-card dark
          class="details">
    <v-img :src="program.images.icon"
           height="300px">
    </v-img>

    <v-card-title primary-title
                  class="margin-left">
      <v-img :src="program.channelImages.logo"
             :max-width="36" />
      <div class="margin-left">
        <span> {{ program.channelTitle }} </span>
        <div class="headline"> {{ program.title }} </div>
        <span class="grey--text padding-right"> {{ program.meta.year }} </span>
        <span v-for="(genre, i) in program.meta.genres"
              :key="i"
              class="grey--text padding-right">
          {{ genre }}
        </span>
      </div>
    </v-card-title>

    <v-slide-y-transition>
      <v-card-text class="md-card-content">
        {{ program.description }}
      </v-card-text>
    </v-slide-y-transition>

    <v-btn flat
           class="md-button-more"
           style="color:#E8A61D;">more</v-btn>

    <div class="md-card-content">
      <span class="grey--text padding-right"> Cast: </span>
      <span v-for="(person, i) in program.meta.cast"
            :key="i"
            class="grey--text">
        {{ person.name }}
        <span v-show="i<program.meta.cast.length-1">, </span>
      </span>
    </div>
    <div class="md-card-content">
      <span class="grey--text padding-right"> Creators: </span>
      <span v-for="(creator, i) in program.meta.creators"
            :key="i"
            class="grey--text">
        {{ creator.name }}
        <span v-show="i<program.meta.creators.length-1">, </span>
      </span>
    </div>
  </v-card>
</template>
<script>
import { mapState, mapActions } from "vuex";

import Api from "@/utils/config/api";

export default {
  name: "details-page",
  computed: {
    ...mapState("details", ["program"])
  },
  methods: {
    ...mapActions("details", ["updateProgram"]),
    getProgram() {
      Api.callService({ method: "get", service: "program/1" }).then(
        response => {
          this.updateProgram(response.data);
        }
      );
    }
  },
  mounted() {
    this.getProgram();
  }
};
</script>

<style lang="scss">
.details {
  background-color: #000000 !important;
}
.md-detail-card {
  color: #ffffff;
}
.margin-left {
  margin-left: 10px;
}
.padding-right {
  padding-right: 10px;
}
.md-card-content {
  padding-left: 32px;
}
.md-button-more {
  margin-top: 0px;
  margin-bottom: 20px;
}
</style>
