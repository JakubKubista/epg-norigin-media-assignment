<template>
  <div class="md-timeline">
    <div v-for="(n, i) in 24"
         :key="i"
         :value="'tab-' + i"
         class="md-timeline-element">
      {{ i }}:00
    </div>
  </div>
</template>

<script>
export default {
  name: "timeline"
}
</script>
