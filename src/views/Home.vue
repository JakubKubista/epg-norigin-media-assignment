<template>
  <div>
    <Toolbar :iconLeft="iconLeft"
             :background="background" />
    <TabsDate />
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar";
import TabsDate from "@/components/TabsDate";

export default {
  name: "home",
  components: {
    Toolbar,
    TabsDate
  },
  data() {
    return {
      iconLeft: "person",
      background: "#000000"
    };
  }
};
</script>