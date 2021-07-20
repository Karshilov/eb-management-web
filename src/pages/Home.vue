<template>
  <div class="basement">
    <div class="left-side">
      <div v-for="(item) in options" class="parallel-container item" :key="item.key">
        <q-icon :name="item.icon" style="color: #fff;" class="icon" />
        <span style="color: #fff; font-size: 1.2rem; font-weight: bold;">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue';
import options from '../utils/options'

export default defineComponent({
  name: 'PageIndex',
  props: {
    title: String
  },
  setup(props) {
    console.log(props)
  },
  data() {
    return {
      options,
    }
  }
});
</script>
