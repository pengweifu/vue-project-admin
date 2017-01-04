<template>
  <div>
    <tree-view :model="nodes">
    </tree-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import treeView from '../../components/tree'
  export default {
    data () {
      return {
        nodes: [
          {
            'vcName': '石化盈科',
            'vcId': '1609052226010010',
            'vcIsLeaf': '0',
            'vcType': '1',
            'children': [
              {
                'vcName': '研究院',
                'vcId': '1609052226010011',
                'vcIsLeaf': '0',
                'vcType': '1',
                'children': [
                  {
                    'vcName': '研发五部',
                    'vcId': '1609052226010012',
                    'vcIsLeaf': '1',
                    'vcType': '1',
                    'children': [],
                    'vcCascadeId': '0.001.001',
                    'inSortNo': 1,
                    'vcRemark': '',
                    'vcHotkey': '',
                    'vcIsAutoExpand': '0',
                    'vcParentId': '1609052226010011',
                    'vcIsDel': '0',
                    'vcCreateBy': '1609091343220003',
                    'dtCreeteTime': 1473129185000,
                    'vcBizCode': '',
                    'vcIconName': ''
                  }
                ],
                'vcCascadeId': '0.001',
                'inSortNo': 1,
                'vcRemark': '',
                'vcHotkey': '',
                'vcIsAutoExpand': '1',
                'vcParentId': '1609052226010010',
                'vcIsDel': '0',
                'vcCreateBy': '1609091343220003',
                'dtCreeteTime': 1473129071000,
                'vcBizCode': '',
                'vcIconName': ''
              },
              {
                'vcName': '人力部',
                'vcId': '1609062348520002',
                'vcIsLeaf': '1',
                'vcType': '1',
                'children': [],
                'vcCascadeId': '0.002',
                'inSortNo': 2,
                'vcRemark': '',
                'vcHotkey': '',
                'vcIsAutoExpand': '0',
                'vcParentId': '1609052226010010',
                'vcIsDel': '0',
                'vcCreateBy': '1609091343220003',
                'dtCreeteTime': 1473176932000,
                'vcBizCode': '',
                'vcIconName': ''
              },
              {
                'vcName': '财务部',
                'vcId': '1609062349140005',
                'vcIsLeaf': '1',
                'vcType': '1',
                'children': [],
                'vcCascadeId': '0.003',
                'inSortNo': 3,
                'vcRemark': '',
                'vcHotkey': '',
                'vcIsAutoExpand': '0',
                'vcParentId': '1609052226010010',
                'vcIsDel': '0',
                'vcCreateBy': '1609091343220003',
                'dtCreeteTime': 1473176954000,
                'vcBizCode': '',
                'vcIconName': ''
              }
            ],
            'vcCascadeId': '0',
            'inSortNo': 1,
            'vcRemark': '',
            'vcHotkey': '',
            'vcIsAutoExpand': '1',
            'vcParentId': '0',
            'vcIsDel': '0',
            'vcCreateBy': '1609091343220003',
            'dtCreeteTime': 1470994712000,
            'vcBizCode': '',
            'vcIconName': 'home.png'
          }
        ]
      }
    },
    components: {
      treeView
    }
  }
</script>

<style lang="scss" scoped>

</style>