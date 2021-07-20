<template>
  <q-layout view="hHh lpR lFf">
    <q-header class="bg-white text-black shadow-2" style="height: 60px">
      <div>icon here</div>
    </q-header>

    <q-drawer show-if-above side="left" :width="200" :breakpoint="700">
      <div class="left-side">
        <div
          v-for="item in options"
          class="parallel-container item"
          :key="item.key"
          @click="onClick(item.key)"
          :style="judgeCurrent(item.key) ? 'background: linear-gradient(to right, #6EE7B7, #6EE7B7 4px, #6B7280 4px, #6B7280);' : ''"
        >
          <q-icon :name="item.icon" style="color: #9ca3af" class="icon" />
          <span style="color: #fff; font-size: 1.2rem; font-weight: 550">{{
            item.name
          }}</span>
        </div>
      </div>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer style="background: transparent; color: #9CA3AF; text-align: center;">HELLO</q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import options from '../utils/options';

export default defineComponent({
  name: 'MainLayout',
  data() {
    return {
      options,
      current: '',
    };
  },
  created: function () {
    this.current = this.$route.path
    console.log(this.current, this.current.split('/').reverse()[0])
  },
  methods: {
    async onClick(value: string) {
      await this.$router.push({ path: `/${value}` });
    },
    judgeCurrent(value: string) {
      if (this.current.split('/').reverse()[0] === value) return true;
      if (this.current === '/' && value === 'audit-resources') return true;
      return false;
    }
  },
});
</script>
