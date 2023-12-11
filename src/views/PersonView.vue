<template>
  <div>
    <h1 class="mb-3">{{ person && person.name }}</h1>
    <div>
      <template v-if="typeof person !== 'undefined'">
        <PersonBlock :person="person" />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import store from "@/store";
import PersonBlock from "@/components/PersonBlock.vue";

export default defineComponent({
  components: {
    PersonBlock,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      personId: parseInt(this.id, 10),
    };
  },
  computed: {
    person() {
      return this.getPerson();
    },
  },
  created() {
    if (typeof this.getPerson() === 'undefined') {
      store.dispatch('addPerson', this.personId);
    }
  },
  methods: {
    getPerson() {
      return store.state.people.find(item => item && item.id === this.personId);
    },
  },
});
</script>
