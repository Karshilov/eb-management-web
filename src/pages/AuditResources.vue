<template>
  <q-page>
    <div></div>
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
        // 对象数组
        // 列对象定义
        {
          // 唯一的ID
          // 标识列
          //（由pagination.sortBy使用，“body-cell-[name]”插槽，...）
          name: 'desc',

          // 头部标签
          label: 'Dessert (100g serving)',

          // 行对象属性以确定此列的值
          field: 'name',
          // 或者field: row => row.some.nested.prop

          // （可选）如果我们使用可见列，这个列将始终可见
          required: true,

          // （可选）对齐
          align: 'left',

          // （可选）告诉QTable你想要这个列可排序
          sortable: true,

          // （可选）比较功能，如果你有
          //  一些自定义数据或想要一个特定的方式来比较两行
          //  sort: (a, b, rowA, rowB) => parseInt(a, 10) - parseInt(b, 10),
          // 函数返回值：
          // *小于0，然后将a排序为低于b的索引，即首先出现
          // *为0，则相对于彼此保持a和b不变，但相对于所有不同的元素进行排序
          // *大于0，则将b排序为低于a的索引，即b先到达

          // （可选）您可以使用函数格式化数据
          // format: (val, row) => `${val}%`
          // 另一个格式示例：
          // format: val => val
          //   ? /* 选中Unicode复选标记 */ "\u2611"
          //   : /* 未选中Unicode复选标记 */ "\u2610",

          // body td:
          style: 'width: 500px',
          classes: 'my-special-class',

          // (v1.3+) header th:
          headerStyle: 'width: 500px',
          headerClasses: 'my-special-class',
        },
        {
          name: 'calories',
          label: 'Calories',
          field: 'calories',
          sortable: true,
        },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        {
          name: 'calcium',
          label: 'Calcium (%)',
          field: 'calcium',
          sortable: true,
          sort: (a: string, b: string) => parseInt(a, 10) - parseInt(b, 10),
        },
        {
          name: 'iron',
          label: 'Iron (%)',
          field: 'iron',
          sortable: true,
          sort: (a: string, b: string) => parseInt(a, 10) - parseInt(b, 10),
        },
      ],
    };
  },
});
</script>
