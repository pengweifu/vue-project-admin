<template>
  <div style="width:1000px;">
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
            dataIndex: 'name',
            width: 200,
            flex: 1
          },
          {
            text: '测试2',
            dataIndex: 'age',
            width: 200,
            flex: 2
          },
          {
            text: '测试3',
            dataIndex: 'age',
            width: 200
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

<style lang="scss" scoped>

</style>