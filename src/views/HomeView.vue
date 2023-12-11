<template>
  <StartBlock title="Flame Тестовое фронт"/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import StartBlock from "@/components/StartBlock.vue";
import store from "@/store";

export default defineComponent({
  name: 'HomeView',
  components: {
    StartBlock,
  },
  computed: {
    people() {
      return store.getters.getFavorite;
    },
  },
});
</script>
