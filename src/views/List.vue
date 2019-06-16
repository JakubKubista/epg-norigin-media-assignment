<template>
  <div class="md-content-program">
    <ButtonIcon @click="favourite = $event"
                :icon="icon" />
    <Tabs />
    <v-btn class="md-button-scrollbar">Now</v-btn>
  </div>
</template>

<script>
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
  }
};
</script>
