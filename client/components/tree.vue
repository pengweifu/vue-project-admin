<template>
  <div>
    <ul :class="{'ms-tree-view':(level==1) ,'ms-tree-menu':!(level==1) }">
      <li v-for="(index,item) in items">
        <a :class="{'ms-open':item[expanded]}" @click="select(index,item)">{{item[valuename]}} <i
          v-if="isOpened(index)" class="glyphicon"
          :class="{'glyphicon-menu-right':!isOpened(index) ,'glyphicon-menu-down':isOpened(index) }"></i></a>
        <tree-view
          :model="item[children]"
          :children="children"
          :valuename="valuename'"
          :parent="parent"
          v-if="item[children]"
          v-show="item.isOpened"
          level="1">
        </tree-view>
      </li>

    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      id: [String, Number],
      idname: {
        Type: String,
        default: 'vcId',
      },
      model: {
        Type: Array,
        default: function () {
          return [];
        },
      },
      children: {
        Type: String,
        default: 'children',
      },
      labelname: {
        Type: String,
        default: 'label',
      },
      valuename: {
        Type: String,
        default: 'vcName',
      },
      parent: {
        Type: String,
        default: 'vcParentId',
      },
      level: {
        Type: String,
        default: '1'
      }
    },
    methods: {
      select (index, item) {
        // 打开当前节点，选择当前节点数据
        this.toggleOpen(index)
        this.id = item[this.idname]
        this.$emit('treeview_click', {
          value: item[this.valuename],
          id: item[this.idname]
        })
      },
      toggleOpen (index) {
        if (!this.areValidNodes(this.model[index][this.children]))
          return;
        // Init
        if (this.model[index].isOpened === undefined) {
          this.model[index].isOpened = this.hasSelectedChild(index)
        }
        // General
        this.model[index].isOpened = !this.model[index].isOpened
      },
      areValidNodes (nodes) {
        return nodes != undefined
          && Object.prototype.toString.call(nodes) === '[object Array]'
          && nodes.length > 0;
      },
      hasSelected (node) {
        return this.id === node[idname]
      },
      hasSelectedChild (index) {
        for (let i in this.model[index]) {
          if (this.model[index][i][parent] === index && this.hasSelected(this.model[index][i])) {
            return true
          }
        }
        return false
      },
      isSelected (index) {
        return this.id && this.model[index][this.idname] === this.id;
      },
      isOpened (index) {
        return (this.model[index].isOpened != undefined && this.model[index].isOpened)
          || this.hasSelectedChild(index);
      }
    }
  }
</script>

<style lang="scss" scoped>
  ul.ms-tree-view {
    color: white;
    list-style-type: none;
    padding: 0px;
    margin: 0px;
  }

  ul.ms-tree-view > li {
    position: relative;
  }

  ul.ms-tree-view > li > a {
    position: relative;
    color: #b8c7ce;
    width: 100%;
    display: block;
    line-height: 40px;
    padding: 0px 10px;
    border-left: 3px solid transparent;
    text-decoration: none;
    cursor: pointer;
  }

  ul.ms-tree-view > li > a:hover {
    color: #fff;
    background: #1e282c;
    border-left-color: #3c8dbc;
  }

  ul.ms-tree-view > li > a.ms-open {
    color: #fff;
    background: #1e282c;
    border-left-color: #3c8dbc;
  }

  ul.ms-tree-view > li > a > i {
    position: absolute;
    right: 10px;
    top: 12px;
  }

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