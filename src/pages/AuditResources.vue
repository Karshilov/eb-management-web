<template>
  <q-page>
    <q-scroll-area
      style="position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px"
    >
      <div class="page-center">
        <q-table :columns="columns"></q-table>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'audit-resources',
  data() {
    return {
      list: [],
      columns: [
        {
          name: 'title',
          label: '房源标题',
          field: 'title',
          required: true,
          align: 'center',
        },
        {},
      ],
    };
  },
});
</script>
