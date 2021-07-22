<template>
  <q-page>
    <q-scroll-area
      style="position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px"
    >
      <div class="page-center">
        <div class="header-statistic">
          <span style="font-size: 1.5rem">{{ '全国共 ' }}</span>
          <span style="font-size: 2rem; font-weight: 600">{{
            whole.合租 + whole.整租
          }}</span>
          <span style="font-size: 1.5rem">{{ ' 处房源' }}</span>
        </div>
        <q-card class="echarts-card" v-for="type in keys" :key="type">
          <div class="echarts-container" :id="type" />
        </q-card>
        <q-page-scroller
          position="bottom-right"
          :scroll-offset="150"
          :offset="[18, 18]"
        >
          <q-btn fab icon="keyboard_arrow_up" color="accent" />
        </q-page-scroller>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { defineComponent, ref } from 'vue';
import * as echarts from 'echarts';
import { api } from 'boot/axios';
import { getCityOptions, getWholeOptions } from '../utils/echartsOptions';
interface City {
  city: string;
  count: number;
}

interface Whole {
  整租: number;
  合租: number;
}

interface Area {
  lower: number;
  count: number;
}

interface DataModel {
  city: City[];
  whole: Whole;
  area: Area[];
}

// const initData: DataModel = {
//   city: [],
//   whole: {
//     整租: 0,
//     合租: 0,
//   },
//   area: [],
// };

export default defineComponent({
  name: 'audit-resources',
  setup() {
    const city = ref<City[]>([]);
    const whole = ref<Whole>({
      整租: 0,
      合租: 0,
    });
    const area = ref<Area[]>([]);
    return { city, whole, area };
  },
  data() {
    return {
      keys: ['city', 'whole', 'area'],
    };
  },
  created() {
    /* */
  },
  async mounted() {
    await this.loadData();
    this.drawCity();
    this.drawWhole();
  },
  methods: {
    async loadData() {
      api.defaults.headers = {
        'x-api-token': this.$store.state.userModule.apiToken,
      };
      const res = await api.get('/rent/analysis');
      const success = res.data.success as boolean;
      const reason = res.data.reason as string;
      const result = res.data.result as DataModel;
      if (success) {
        this.city = result.city;
        this.whole = result.whole;
        this.area = result.area;
      } else {
        this.$q.notify({
          type: 'negative',
          message: reason,
        });
      }
      console.log(result);
    },
    drawCity() {
      const city = document.getElementById('city');
      const cityData = this.city.map((item) => ({
        value: item.count,
        name: item.city,
      }));
      if (city) {
        console.log(cityData);
        let cityChart = echarts.init(city);
        cityChart.setOption(getCityOptions(cityData));
      }
    },
    drawWhole() {
      const whole = document.getElementById('whole');
      const wholeData = [this.whole.整租, this.whole.合租];
      if (whole) {
        let wholeChart = echarts.init(whole);
        wholeChart.setOption(getWholeOptions(wholeData));
      }
    },
  },
});
</script>
