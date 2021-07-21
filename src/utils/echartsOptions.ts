export const cityOptions = {
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
}


export const wholeOptions = {
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
}
