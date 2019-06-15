<template>
  <div class="md-content-program">
    <ButtonToggle @click="favourite = $event"
                  :icon="toggleIcon" />
    <Tabs />
  </div>
</template>

<script>
import ButtonToggle from "@/components/base/ButtonToggle";
import Tabs from "@/components/modules/list/Tabs";

export default {
  name: "list",
  components: {
    ButtonToggle,
    Tabs
  },
  data() {
    return {
      toggleIcon: "star",
      favourite: false
    };
  }
};
</script>
