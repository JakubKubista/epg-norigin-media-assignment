<template>
  <div class="md-tab-date">
      {{ base.getDayOfWeekInOrder(order) }}
      <br />
      {{ base.getDayAndMonthInOrder(order) }}
  </div>
</template>

<script>
import Base from "@/utils/base/dates";

export default {
  name: "list-tab",
  props: {
    order: 0
  },
  computed: {
    base: () => Base,
  },
};
</script>
