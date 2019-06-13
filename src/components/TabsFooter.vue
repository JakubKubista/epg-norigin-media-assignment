<template>
  <div class="footer">
    <v-tabs v-model="tabs"
            fixed-tabs
            hide-slider
            grow
            dark
            color="#252525"
            @change="$emit('navigationChanged', $event)">

      <v-tab v-for="i in 5"
             :key="i"
             :href="'#mobile-tabs-5-' + i"
             class="primary--text">
        <v-icon v-if="tabs=='mobile-tabs-5-' + i"
                color="#E8A61D"> {{ icons[i-1] }} </v-icon>
        <v-icon v-else> {{ icons[i-1] }} </v-icon>
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
export default {
  name: "tabs-footer",
  data() {
    return {
      tabs: "mobile-tabs-5-3",
      icons: ["home", "live_tv", "list", "replay", "local_library"],
      text: "Element"
    };
  }
};
</script>
