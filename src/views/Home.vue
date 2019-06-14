<template>
  <div>
    <ButtonToggle @click="favourite = $event"
                  :icon="toggleIcon" />
    <TabsDate />
  </div>
</template>

<script>
import ButtonToggle from "@/components/ButtonToggle";
import TabsDate from "@/components/TabsDate";

export default {
  name: "home",
  components: {
    ButtonToggle,
    TabsDate
  },
  data() {
    return {
      toggleIcon: "star",
      favourite: false
    };
  }
};
</script>
