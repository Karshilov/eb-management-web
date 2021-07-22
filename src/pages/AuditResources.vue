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
          v-model:pagination="pagination"
          :loading="tableLoading"
          @request="loadData"
        >
          <template v-slot:body-cell-action="props">
            <q-tr :props="props">
              <q-td key="action" :props="props">
                <q-btn
                  label="通过"
                  color="primary"
                  :disable="loading"
                  style="margin-right: 10px"
                  @click="onApproval(props.row)"
                />
                <q-btn
                  label="拒绝"
                  color="primary"
                  outline
                  :disable="loading"
                />
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
import { api } from 'boot/axios';
import { RentDetailModel, columns } from '../utils/DataModel';

export default defineComponent({
  name: 'audit-resources',
  setup() {
    const tableLoading = ref(false);
    const pagination = ref({
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 100,
    });
    const list = ref<RentDetailModel[]>([]);
    const total = ref<number>(0);
    const loading = ref<boolean>(false);
    const visible = ref<boolean>(false);
    const reason = ref<string>('');
    return { tableLoading, pagination, columns, list, total, loading, visible, reason };
  },
  data() {
    return {};
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
      const res = await api.get('/admin/audit/rent', {
        params: {
          page_size: rowsPerPage as number,
          page_num: page as number,
        },
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
    async onApproval(props: RentDetailModel) {
      const { id } = props;
      this.loading = true;
      const res = await api.post('/admin/audit/rent', {
        house_id: id,
        approval: true,
        reason: '通过',
      });
      const success = res.data.success as boolean;
      const reason = res.data.reason as string;
      if (success) {
        this.$q.notify({
          type: 'positive',
          message: '审核成功',
        });
      } else {
        this.$q.notify({
          type: 'negative',
          message: reason,
        });
      }
      this.loading = false;
      await this.loadData({ pagination: this.pagination });
    },
    async onRefuse(props: RentDetailModel) {
      const { id } = props;
      this.loading = true;
      const res = await api.post('/admin/audit/rent', {
        house_id: id,
        approval: false,
        reason: this.reason,
      });
      const success = res.data.success as boolean;
      const reason = res.data.reason as string;
      if (success) {
        this.$q.notify({
          type: 'positive',
          message: '审核成功',
        });
      } else {
        this.$q.notify({
          type: 'negative',
          message: reason,
        });
      }
      this.reason = '';
      this.loading = false;
      await this.loadData({ pagination: this.pagination });
    }
  },
});
</script>
