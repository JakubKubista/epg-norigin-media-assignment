<template>
  <v-tabs :value="tabActiveId"
          show-arrows
          dark
          hide-slider
          centered
          color="#252525"
          @change="updateTabActiveId($event)">

    <v-tab v-for="i in count"
           :key="i"
           :href="'#tab-' + i">
      <Tab :order="i" />
    </v-tab>

    <!-- It would be better to have epg service with a day parameter,
    because like this we would send very large amount of data. Then
    we can use lazyloading for each day and the app will be faster. -->
    <v-tabs-items v-dragscroll
                  class="md-tab-date-content">
      <v-tab-item v-for="i in count"
                  :key="i"
                  :value="'tab-' + i">
        <Content v-if="i===tabMiddleNumber" />
        <h2 v-else
            class="md-message-content-centred">
          {{ notAvailable }}
        </h2>
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Dates from "@/utils/constants/dates";
import Labels from "@/utils/constants/labels";
import Content from "@/components/modules/list/TabsContent";
import Tab from "@/components/modules/list/TabsTab";
import { dragscroll } from "vue-dragscroll";

export default {
  name: "tabs-date",
  components: {
    Content,
    Tab
  },
  computed: {
    ...mapState("list", ["tabActiveId", "tabMiddleNumber"]),
    count: () => Dates.count,
    notAvailable: () => Labels.message.fullScreen.notAvailable
  },
  methods: {
    ...mapActions("list", ["updateTabActiveId"]),
  },
  directives: {
    dragscroll: dragscroll
  },
};
</script>
