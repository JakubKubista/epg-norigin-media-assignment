<template>
  <div class="md-tab-date">
    {{ dates.getDayOfWeekInOrder(order) }}
    <br />
    {{ dates.getDayAndMonthInOrder(order) }}
  </div>
</template>

<script>
import Dates from "@/utils/base/dates";

export default {
  name: "list-tab",
  props: {
    order: 0
  },
  computed: {
    dates: () => Dates
  }
};
</script>
