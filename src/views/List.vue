<template>
  <div class="md-content-program">
    <SquareButton @click="favourite = $event"
                  :icon="icon" />
    <Tabs />
  </div>
</template>

<script>
import SquareButton from "@/components/base/SquareButton";
import Tabs from "@/components/modules/list/Tabs";

export default {
  name: "list",
  components: {
    SquareButton,
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
