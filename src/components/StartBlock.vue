<template>
  <div class="start-box">
    <h1 class="mb-3">{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    title: String,
  },
});
</script>
