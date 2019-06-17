<template>
  <div class="md-message-centred">
    <h2>
      {{ notImplemented }}
    </h2>
  </div>
</template>

<script>
import Labels from "@/utils/constants/labels";

export default {
  name: "not-implemented",
  computed: {
    notImplemented: () => Labels.message.fullScreen.notImplemented
  }
};
</script>
