<template>
  <div class="md-content-program">
    <ButtonIcon @click="favourite = $event"
                :icon="icon" />
    <Tabs @changed="tabActive=$event" />
    <v-btn class="md-button-scrollbar"
           v-show="tabActive===tabMiddle"
           @click="setDefaultScrollPosition"> {{ now }} </v-btn>
  </div>
</template>

<script>
import Labels from "@/utils/constants/labels";
import Dates from "@/utils/constants/dates";
import Scrollbar from "@/utils/base/scrollbar";
import ButtonIcon from "@/components/base/ButtonIcon";
import Tabs from "@/components/modules/list/Tabs";

export default {
  name: "list",
  components: {
    ButtonIcon,
    Tabs
  },
  data() {
    return {
      icon: "star",
      favourite: false,
      tabActive: ""
    };
  },
  computed: {
    now: () => Labels.button.now,
    tabMiddle: () => "tab-" + Dates.count / 2
  },
  methods: {
    setDefaultScrollPosition() {
      Scrollbar.setDefaultScrollPosition();
    }
  },
  mounted() {
    this.tabActive = this.tabMiddle;
  }
};
</script>
