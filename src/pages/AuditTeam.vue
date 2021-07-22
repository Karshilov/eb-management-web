<template>
  <q-page style="background: #fff">
    <q-dialog v-model="visible">
      <q-card style="width: 40vw; padding: 20px">
        <q-card-section
          class="cloumn"
          style="display: flex; justify-content: center"
        >
          <q-icon :name="matInfo" style="font-size: 18px" />
          <span>请简述拒绝理由（如团队名称含敏感词）</span>
        </q-card-section>

        <q-form
          @submit="onRefuse(currentSelected)"
          @reset="
            () => {
              this.reason = '';
            }
          "
          class="q-gutter-md"
        >
          <q-input
            filled
            v-model="reason"
            label="在此输入拒绝的理由"
            type="textarea"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || '原因不得为空',
              (val) => val.search(/[^\s]/) !== -1 || '原因不能全是空字符',
            ]"
          />
          <div>
            <q-inner-loading :showing="refuseLoading">
              <q-spinner-dots size="50px" color="primary" />
            </q-inner-loading>
            <q-btn
              label="确定"
              type="submit"
              color="primary"
              :v-close-popup="visible"
              :disable="refuseLoading"
            />
            <q-btn
              label="重置"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </q-card>
    </q-dialog>
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
            <q-td
              key="action"
              :props="props"
              style="text-align: center"
              auto-width
            >
              <q-btn
                label="通过"
                color="primary"
                :disable="loading"
                style="margin: 10px;"
                @click="onApproval(props.row)"
              />
              <q-btn
                label="拒绝"
                color="primary"
                outline
                :disable="loading"
                style="margin: 10px;"
                @click="
                  () => {
                    this.visible = true;
                    this.currentSelected = props.row;
                  }
                "
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
import { TeamDetailModel, teamColumns } from '../utils/DataModel';
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
    const list = ref<TeamDetailModel[]>([]);
    const total = ref<number>(0);
    const loading = ref<boolean>(false);
    const visible = ref<boolean>(false);
    const reason = ref<string>('');
    const refuseLoading = ref<boolean>(false);
    const currentSelected = ref<TeamDetailModel>(list.value[0]);
    return {
      tableLoading,
      pagination,
      columns: teamColumns,
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
      const res = await api.get('/admin/audit/team', {
        params: {
          page_size: rowsPerPage as number,
          page_num: page as number,
        },
      });
      const success = res.data.success as boolean;
      const reason = res.data.reason as string;
      if (success) {
        const total = res.data.result.total as number;
        const list = res.data.result.list as TeamDetailModel[];
        // for (let i = 0; i < list.length; i++) {
        //   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        //   const info = await api.get('/user', {
        //     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        //     params: { id: list[i].owner },
        //   });
        //   if (info.data.success) {
        //     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        //     list[i].owner = info.data.result;
        //   }
        // }
        // // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
    async onApproval(props: TeamDetailModel) {
      const { id } = props;
      this.loading = true;
      const res = await api.post('/admin/audit/team', {
        team_id: id,
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
    async onRefuse(props: TeamDetailModel) {
      const { id } = props;
      this.refuseLoading = true;
      const res = await api.post('/admin/audit/team', {
        team_id: id,
        approval: false,
        reason: this.reason,
      });
      const success = res.data.success as boolean;
      const reason = res.data.reason as string;
      if (success) {
        this.$q.notify({
          type: 'positive',
          message: '已拒绝并通知对方',
        });
      } else {
        this.$q.notify({
          type: 'negative',
          message: reason,
        });
      }
      this.reason = '';
      this.refuseLoading = false;
      this.visible = false;
      await this.loadData({ pagination: this.pagination });
    },
  },
});
</script>
