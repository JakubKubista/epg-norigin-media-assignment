<template>
  <div class="md-content-program">
    <ButtonIcon @click="favourite = $event"
                :icon="icon" />
    <Tabs />
    <v-btn class="md-button-scrollbar"
           @click="setDefaultScrollPosition"> {{ now }} </v-btn>
  </div>
</template>

<script>
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
      icon: "star",
      favourite: false
    };
  },
  computed: {
    now: () => Labels.button.now
  },
  methods: {
    setDefaultScrollPosition() {
      Scrollbar.setDefaultScrollPosition();
    }
  }
};
</script>
