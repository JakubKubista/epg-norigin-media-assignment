<template>
  <div>
    <Toolbar />
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
  }
};
</script>