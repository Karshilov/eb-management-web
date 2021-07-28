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
          title="VR扫描申请"
          class="header-table"
          v-model:pagination="pagination"
          :loading="tableLoading"
          @request="loadData"
        >
        <template v-slot:body-cell-action="props">
            <q-td
              key="action"
              :props="props"
              style="text-align: center"
              auto-width
            >
              <q-btn
                label="联系房东"
                color="primary"
                :disable="loading"
                style="margin: 10px;"
                @click="gotoMail(props.row)"
              />
            </q-td>
          </template>
        </q-table>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { defineComponent, ref } from 'vue';
import { api } from 'boot/axios';
import { vrColumns, VRDetailModel } from '../utils/DataModel';
import { matInfo } from '@quasar/extras/material-icons';

export default defineComponent({
  name: 'audit-resources',
  setup() {
    const tableLoading = ref(false);
    const pagination = ref({
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 100,
    });
    const list = ref<VRDetailModel[]>([]);
    const total = ref<number>(0);
    const loading = ref<boolean>(false);
    const visible = ref<boolean>(false);
    const reason = ref<string>('');
    const refuseLoading = ref<boolean>(false);
    const currentSelected = ref<VRDetailModel>(list.value[0]);
    return {
      tableLoading,
      pagination,
      columns: vrColumns,
      list,
      total,
      loading,
      visible,
      reason,
      refuseLoading,
      currentSelected,
    };
  },
  data() {
    return {
      matInfo,
    };
  },
  async created() {
    api.defaults.headers = {
      'x-api-token': this.$store.state.userModule.apiToken,
    };
    await this.loadData({ pagination: this.pagination });
  },
  methods: {
    async loadData(props: any) {
      this.tableLoading = true;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { page, rowsPerPage } = props.pagination;
      const res = await api.get('/admin/realsee', {
        params: {
          page_size: rowsPerPage as number,
          page_num: page as number,
        },
      });
      console.log(res.data.result)
      const success = res.data.success as boolean;
      const reason = res.data.reason as string;
      if (success) {
        const total = res.data.result.total as number;
        const list = res.data.result.list as VRDetailModel[];
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this.list = list;
        this.pagination.page = page as number;
        this.pagination.rowsPerPage = rowsPerPage as number;
        this.pagination.rowsNumber = total;
      } else {
        this.$q.notify({
          type: 'negative',
          message: reason,
        });
      }
      this.tableLoading = false;
    },
    gotoMail(props: VRDetailModel) {
      console.log(props)
      window.location.assign(`mailto:${props.user.email}`);
    }
  },
});
</script>
