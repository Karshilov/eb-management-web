<template>
  <q-page>
    <div class="page-center">
      <q-card style="width: 50%; height: 50%; box-sizing: border-box; padding: 30px;">
        <div class="echarts-container" id="city" />
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { defineComponent, ref } from 'vue';
import * as echarts from 'echarts';
import { api } from 'boot/axios';
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
  created() {
    /* */
  },
  async mounted() {
    await this.loadData();
    this.drawCity();
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
        cityChart.setOption({
          title: {
            text: '城市房源分布图',
            left: 'center',
          },
          tooltip: {
            trigger: 'item',
          },
          legend: {
            orient: 'vertical',
            left: 'left',
          },
          series: [
            {
              name: '房源归属地',
              type: 'pie',
              radius: '50%',
              data: cityData,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
              },
            },
          ],
        });
      }
    },
  },
});
</script>
