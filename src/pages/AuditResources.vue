<template>
  <q-page style="background: #fff">
    <q-scroll-area
      style="position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px"
    >
      <div class="list-page-center">
        <q-table
          v-if="list.length !== 0"
          :columns="columns"
          row-key="id"
          :rows="list"
          title="待审核房源"
          class="header-table"
        >
          <template v-slot:body-cell-action="props">
            <q-tr :props="props">
              <q-td key="action" :props="props">
                <q-btn label="通过" color="primary" :disable="loading" style="margin-right: 10px;" />
                <q-btn label="拒绝" color="primary" outline :disable="loading" />
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { defineComponent, ref } from 'vue';
import moment from 'moment';
import { api } from 'boot/axios';
import { RentDetailModel, columns } from '../utils/DataModel';

export default defineComponent({
  name: 'audit-resources',
  data() {
    return {
      moment,
      list: ref<RentDetailModel[]>([]),
      columns,
      pageSize: 10,
      pageNum: 1,
      total: 0,
      loading: false,
    };
  },
  async created() {
    api.defaults.headers = {
      'x-api-token': this.$store.state.userModule.apiToken,
    };
    await this.loadData();
  },
  methods: {
    async loadData() {
      const res = await api.get('/admin/audit/rent', {
        params: { page_size: this.pageSize, page_num: this.pageNum },
      });
      const success = res.data.success as boolean;
      const reason = res.data.reason as string;
      if (success) {
        const total = res.data.result.total as number;
        const list = res.data.result.list as any[];
        for (let i = 0; i < list.length; i++) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const info = await api.get('/user', {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            params: { id: list[i].owner },
          });
          if (info.data.success) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            list[i].owner = info.data.result;
          }
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this.list = list;
        this.total = total;
      } else {
        this.$q.notify({
          type: 'negative',
          message: reason,
        });
      }
    },
  },
});
</script>
