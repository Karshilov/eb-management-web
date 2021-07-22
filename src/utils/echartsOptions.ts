export const getCityOptions = (cityData: { value: number; name: string; }[]) =>({
  backgroundColor: '#29333a',
  textStyle: {
    color: 'rgba(255, 255, 255, 0.3)',
  },
  labelLine: {
    lineStyle: {
      color: 'rgba(255, 255, 255, 0.3)',
    },
  },
  title: {
    text: '城市房源分布图',
    left: 'center',
    textStyle: {
      color: 'rgba(255, 255, 255, 0.9)',
    },
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    textStyle: {
      color: 'rgba(255, 255, 255, 0.8)',
    },
  },
  series: [
    {
      name: '房源归属地',
      type: 'pie',
      radius: '55%',
      data: cityData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(255, 255, 255, 0.5)',
        },
      },
    },
  ],
})


export const getWholeOptions = (wholeData: number[]) => ({
  xAxis: {
    type: 'category',
    data: ['整租', '合租']
  },
  yAxis: {
    type: 'value',
  },
  backgroundColor: '#29333a',
  textStyle: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 24
  },
  title: {
    text: '整合租房源对比',
    left: 'center',
    textStyle: {
      color: 'rgba(255, 255, 255, 0.9)',
    },
  },
  tooltip: {
    trigger: 'item',
  },
  series: [{ data: wholeData, type: 'bar' }],
})

export const areaOptions = {
  xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {}
  }]
};
