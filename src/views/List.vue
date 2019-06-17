<template>
  <div class="md-content-program">
    <ButtonIcon @click="favourite = $event"
                :icon="star" />
    <Tabs />
    <v-btn class="md-button-scrollbar"
           v-show="tabActiveId==='tab-'+tabMiddleNumber"
           @click="setDefaultScrollPosition"> {{ now }} </v-btn>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Dates from "@/utils/constants/dates";
import Icons from "@/utils/constants/icons";
import Labels from "@/utils/constants/labels";
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
      favourite: false
    };
  },
  computed: {
    ...mapState("list", ["tabActiveId", "tabMiddleNumber"]),
    star: () => Icons.star,
    now: () => Labels.button.now
  },
  methods: {
    setDefaultScrollPosition() {
      Scrollbar.setDefaultScrollPosition();
    }
  }
};
</script>
