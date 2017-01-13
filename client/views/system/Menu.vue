<template>
  <div class="box">
    <grid-panel :columns="columns" :tree-structure=true :data-source="dataSource"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import {GridPanel} from '../../components/treeTable/index'
  export default {
    props: [],
    data () {
      return {
        columns: [
          {
            text: '测试',
            dataIndex: 'name'
          },
          {
            text: '测试2',
            dataIndex: 'age'
          },
          {
            text: '测试3',
            dataIndex: 'age'
          }
        ],
        dataSource: [
          {
            name: 'A',
            age: 23
          },
          {
            name: 'B',
            age: 24,
            children: [
              {
                name: 'D',
                age: 34,
                children: [
                  {
                    name: 'E',
                    age: 50
                  }
                ]
              }
            ]
          },
          {
            name: 'C',
            age: 24
          }
        ]
      }
    },
    components: {
      GridPanel
    }
  }
</script>

<style>
</style>
