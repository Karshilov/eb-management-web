<template>
  <q-page>
    <q-scroll-area
      style="position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px"
    >
      <div class="page-center">
        <div class="q-pa-md">
          <q-table
            :columns="columns"
            row-key="title"
            :data="list"
            title="待审核房源"
          ></q-table>
        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { defineComponent, ref } from 'vue';
import moment from 'moment';
import { api } from 'boot/axios';
import { RentDetailModel } from '../utils/DataModel';

export default defineComponent({
  name: 'audit-resources',
  data() {
    return {
      list: ref<RentDetailModel[]>([]),
      columns: [
        {
          name: 'title',
          label: '房源标题',
          field: 'title',
          required: true,
          align: 'center',
        },
        {
          name: 'create_time',
          label: '上传时间',
          field: 'create_time',
          format: (val: number) => moment(val).format('YYYY-MM-DD'),
          required: true,
          align: 'center',
        },
        {
          name: 'area',
          label: '面积（㎡）',
          field: 'area',
          required: true,
          align: 'center',
        },
        {
          name: 'floor',
          label: '楼层信息',
          field: 'floor',
          required: true,
          align: 'center',
        },
      ],
      pageSize: 10,
      pageNum: 1,
      total: 0,
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
      const result = res.data.result as {
        total: number;
        list: RentDetailModel[];
      };
      if (success) {
        console.log(result);
        this.list = result.list;
        this.total = result.total;
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
