<template>
  <div>
    <ul class="ms-tree-menu">
      <li v-for="(item,index) in model">
        <a :class="{'ms-open':item[expanded]}" @click="select(index,item)">{{item[valuename]}}
          <span class="icon is-small is-angle" v-if="!item[expanded]">
            <i class="fa fa-angle-down"></i>
          </span>
        </a>
        <slot></slot>
        <tree-view
          :model="item[children]"
          :children="children"
          :valuename="valuename"
          :parent="parent"
          v-if="item[children]"
          v-show="item[expanded]"
          level="2">
          <slot></slot>
        </tree-view>
      </li>

    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'treeView',
    props: {
      idname: {
        Type: String,
        default: 'vcId'
      },
      model: {
        Type: Array,
        default: function () {
          return []
        }
      },
      children: {
        Type: String,
        default: 'children'
      },
      labelname: {
        Type: String,
        default: 'label'
      },
      valuename: {
        Type: String,
        default: 'vcName'
      },
      parent: {
        Type: String,
        default: 'vcParentId'
      },
      level: {
        Type: String,
        default: '2'
      },
      expanded: {
        Type: String,
        default: 'vcIsAutoExpand'
      }
    },
    data () {
      return {
        id: ''
      }
    },
    methods: {
      select (index, item) {
        // 打开当前节点，选择当前节点数据
        this.id = item[this.idname]
        this.toggleOpen(item)
        console.log(item[this.expanded])
        this.$emit('treeview_click', {
          value: item[this.valuename],
          id: item[this.idname]
        })
      },
      toggleOpen (item) {
        if (!this.areValidNodes(item[this.children])) {
          return
        }
        // General
        item[this.expanded] = !item[this.expanded]
      },
      areValidNodes (nodes) {
        return nodes !== undefined &&
          Object.prototype.toString.call(nodes) === '[object Array]' && nodes.length > 0
      },
      hasSelected (node) {
        return this.id === node[this.idname]
      },
      hasSelectedChild (item) {
        for (let i in item[this.children]) {
          if (item[this.children][i][this.parent] === this.id && this.hasSelected(item[this.children][i])) {
            return true
          }
        }
        return false
      },
      isSelected (index) {
        return this.id && this.model[index][this.idname] === this.id
      }
    }
  }
</script>

<style lang="scss" scoped>
  ul.ms-tree-menu {
    color: white;
    list-style-type: none;
    padding: 0px;
    margin: 0px;
    background: #2C3B41;
  }

  ul.ms-tree-menu > li {
    position: relative;
  }

  ul.ms-tree-menu > li > a {
    position: relative;
    color: #555d5e;
    width: 100%;
    display: block;
    line-height: 30px;
    padding: 0px 10px;
    border-left: 3px solid transparent;
    text-decoration: none;
    cursor: pointer;
  }

  ul.ms-tree-menu > li > a:hover {
    color: white;
  }

</style>