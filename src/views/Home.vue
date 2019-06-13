<template>
  <div>
    <Toolbar />
    <ListDate />
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar";
import ListDate from "@/components/ListDate";

export default {
  name: "home",
  components: {
    Toolbar,
    ListDate
  }
};
</script>