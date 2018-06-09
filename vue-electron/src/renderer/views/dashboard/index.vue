<template>
  <div class="dashboard-container">
    <div style="padding: 0.5em;width: 100%;display: inline-block;">
      <el-switch
              v-model="autoCloseMessage"
              active-color="#13ce66"
              inactive-color="#999999">
      </el-switch>自动关闭消息
    </div>
    <el-row :gutter="10">
      <el-col v-for="(card,ind) in cards" :key="ind" :xs="24" :sm="12" :md="12" :lg="12" :xl="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{card.title}}</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="$router.push(card.route)">前往</el-button>
          </div>
          <div style="font-size: 1.2em">功能</div>
          <div style="padding: 0.2em">
            <div v-for="fun in card.function" :key="fun.name" style="display: inline-block;width: 100%;">
              <el-button style="padding: 3px 0" type="text" class="text item" @click="showDesc(fun)">
                {{fun.name}}
              </el-button>
            </div>
          </div>
          <hr/>
          <div style="font-size: 1.2em">说明</div>
          <div style="padding: 0.2em">
            <div style="display: inline-block;width: 100%;">
              <el-button style="padding: 3px 0" type="text" class="text item" @click="showDetail(card)">
                查看
              </el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog title="说明" :visible.sync="dialogTableVisible">
      <div v-html="dialogContent.detail"></div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  data() {
    return {
      autoCloseMessage: false,
      cards: [
        {
          title: '国际化',
          route: '/i18n/index',
          function: [
            {
              name: '打开 XML 文件',
              desc: '这里的 XML 是由严格定义的，可以通过新建后保存来获取一个示例。XML 文件中定义了语言的种类，和一个 i18n 结构用于记录国际化内容。'
            },
            {
              name: '新建 XML 结构',
              desc: '新建一个系统规范的 XML 结构。'
            },
            {
              name: '保存 XML 结构',
              desc: '保存一个系统规范的 XML 结构。'
            },
            {
              name: '导出 JS 文件',
              desc: '保存当前的国际化内容到多个 JS 文件中，文件名根据语言代码命名'
            },
            {
              name: '导入 JS 文件',
              desc: '可以通过脚本来生成一个树结构，通过保存 XML 来生成一个符合规范的 XML 结构。同时，如果已经存在 树 结构则会询问是否重建 树 结构或是构建新的 树 结构后进行合并。'
            }
          ],
          detail:
              '<div style="display: inline-block;width:100%">' +
              [
                '0.下面描述中，带有【】的字段表示关键字，或理解为概念即可',
                '1.国际化中到处的js文件可能不符合工程要求，需要进行格式化',
                '2.节点中<span style="background:#67c23a;color:white">【绿色】</span>部分表示【语言包】，<span style="background:gray;color:white;">【灰色】</span>部分表示对应国际化的内容',
                '3.【语言包】的意思为，该节点需要被翻译，或者该节点存在需要被翻译的节点（等同表述为该节点下有【语言包】）',
                '4.【语言包】的名称是用来表示国际化中的【节】的，例如 $t("节.节.节")',
                '5.【语言】节点中的名称是用来显示给用户看的，及对应翻译的内容',
                '6.【导入 JS 文件】时，如果已经存在【树】结构，则会提问是否覆盖【树】结构，如果是则生成新的【树】结构，否则会生成一个【树】结构后和原本的【树】结构进行合并']
                .join('</div><div style="display: inline-block;width:100%">') + '</div>'
        }
      ],
      dialogTableVisible: false,
      dialogContent: {}
    }
  },
  methods: {
    showDesc(fun) {
      this.$notify({
        title: '说明 (' + (this.autoCloseMessage ? '五秒后自动关闭)' : '必须手动关闭)'),
        message: fun.desc || '作者很懒，这里没有给予说明',
        duration: (this.autoCloseMessage ? 5000 : 0)
      })
    },
    showDetail(card) {
      this.dialogTableVisible = true
      this.dialogContent = card
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  mounted() {
    window.$this = this
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
