<template>
  <div style="padding-bottom: 1.5em;">
    <ElmElRow style="padding: 0.5em;">
      <ElmElButton :style="{color : (autoSaveXML.autoSave ? '#29d' : '#000')}" v-show="data5.length && data5[0].children && data5[0].children.length" @click="autoSaveXML.autoSave = !autoSaveXML.autoSave">
        {{$t('i18n.menu.autoSaveXML')}}
      </ElmElButton>
      <ElmElButton @click="open">{{$t('i18n.menu.openXML')}}</ElmElButton>
      <ElmElButton @click="create">{{$t('i18n.menu.newXML')}} </ElmElButton>
      <ElmElButton @click="save">{{$t('i18n.menu.saveXML')}}</ElmElButton>
      <ElmElButton @click="output">{{$t('i18n.menu.outputJS')}}</ElmElButton>
      <ElmElButton @click="input">{{$t('i18n.menu.inputJS')}}</ElmElButton>
      <ElmElButton @click="clipStyleDialog=true">设置粘贴板格式</ElmElButton>
    </ElmElRow>

    <ElmElRow style="padding: 0.5em;">
      <!-- 标签(语言)编辑部分 -->
      <div v-for="(tag,ind) in langTag" @click="curLang=tag.code" style="display: inline-block;float: left;padding: 0 0.2em;">
        <ElmElTag
                :key="tag.code"
                closable
                :disable-transitions="false"
                style="cursor: pointer;"
                @close.prevent="handleClose(ind)">
          {{tag.label}}
        </ElmElTag>
      </div>
      <div @click="curLang = ''" style="display: inline-block;float: left;padding: 0 0.2em;" v-show="curLang !== ''">
        <ElmElTag style="cursor: pointer;">{{$t('i18n.other.showAllLanguage')}}</ElmElTag>
      </div>

      <ElmElButton v-show="!addLangDialog" class="button-new-tag" size="small" @click="showInput">+ {{$t('i18n.other.newLanguage')}}</ElmElButton>
    </ElmElRow>
    <ElmElTree accordion ref="tree" draggable :data="data5" show-checkbox="" node-key="id" :expand-on-click-node="false" :filter-node-method="filterNode">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <div v-if="data.atr=='pack'">
          <span @click="() => showDesc(data)">
            <ElmElTag size="mini" type="success">{{ node.label }}</ElmElTag>
          </span>
          <span>
            <ElmElButton type="text" size="mini" @click="() => append(data,node)">
              {{$t('i18n.treeOperate.addNode')}}
            </ElmElButton>
            <ElmElButton type="text" size="mini" @click="() => remove(node, data)">
              {{$t('i18n.treeOperate.deleteNode')}}
            </ElmElButton>
            <ElmElButton type="text" size="mini" @click="() => changePackInfo(node, data)">
              {{$t('i18n.treeOperate.changeNode')}}
            </ElmElButton>
            <ElmElButton type="text" size="mini" @click="() => copyLink(node, data)">
              {{$t('i18n.treeOperate.copyLink')}}
            </ElmElButton>
            <ElmElButton v-show="data.type !== 'root'" type="text" size="mini" @click="() => copyNode(node, data,'pack')">
              复制
            </ElmElButton>
            <ElmElButton v-show="(copyNodes.wait && (!data.children.length || (copyNodes.target ^ (data.children[0].atr === 'lang'))))" type="text" size="mini" @click="() => pasteNode(node, data)">
              粘贴
            </ElmElButton>
          </span>
        </div>
        <div v-else-if="data.atr=='lang'">
          <ElmElTag slot="reference" size="mini" type="info">{{ node.label }}</ElmElTag>
          <span>
            <ElmElButton type="text" size="mini" @click="changeLangWord(node)">
              {{$t('i18n.treeOperate.change')}}
            </ElmElButton>
            <ElmElButton type="text" size="mini" @click="() => remove(node, data)">
              {{$t('i18n.treeOperate.delete')}}
            </ElmElButton>
            <ElmElButton type="text" size="mini" @click="() => copyLink(node, data)">
              {{$t('i18n.treeOperate.copyLink')}}
            </ElmElButton>
            <ElmElButton type="text" size="mini" @click="() => copyNode(node, data)">
              复制
            </ElmElButton>
          </span>
        </div>
      </span>
    </ElmElTree>
    <div id="dialog">
      <ElmElDialog
              :title="$t('i18n.newLanguageDialog.title')"
              :visible.sync="addLangDialog"
              width="30%"
              :before-close="beforeClose">
        <ElmElForm ref="form" :model="newTag" label-width="80px">
          <ElmElFormItem :label="$t('i18n.newLanguageDialog.languageType')">
            <ElmElInput :placeholder="$t('i18n.newLanguageDialog.languageTypePlaceholder')" v-model="newTag.label"></ElmElInput>
          </ElmElFormItem>
          <ElmElFormItem :label="$t('i18n.newLanguageDialog.code')">
            <ElmElInput placeholder="CN / EN / FR" v-model="newTag.code"></ElmElInput>
          </ElmElFormItem>
        </ElmElForm>
        <span slot="footer" class="dialog-footer">
          <ElmElButton @click="addLangDialog = false">{{$t('i18n.other.cancel')}}</ElmElButton>
          <ElmElButton type="primary" @click="comfirmAddLang">{{$t('i18n.other.ok')}}</ElmElButton>
        </span>
      </ElmElDialog>
      <ElmElDialog
          :title="$t('i18n.changeLangDialog.title')"
          :visible.sync="changeLangDialog"
          width="30%"
          :before-close="beforeClose">
        <ElmElForm ref="form" :model="changeLang" label-width="80px">
          <ElmElFormItem :label="$t('i18n.changeLangDialog.old')">
            <ElmElInput :placeholder="$t('i18n.changeLangDialog.old')" v-model="changeLang.oldL"></ElmElInput>
          </ElmElFormItem>
          <ElmElFormItem :label="$t('i18n.changeLangDialog.new')">
            <ElmElInput :placeholder="$t('i18n.changeLangDialog.new')" v-model="changeLang.newL"></ElmElInput>
          </ElmElFormItem>
        </ElmElForm>
        <span slot="footer" class="dialog-footer">
          <ElmElButton @click="changeLangDialog = false">{{$t('i18n.other.cancel')}}</ElmElButton>
          <ElmElButton type="primary" @click="comfirmChangeLangWord">{{$t('i18n.other.ok')}}</ElmElButton>
        </span>
      </ElmElDialog>
      <ElmElDialog
          :title="$t('i18n.addNodeDialog.title')"
          :visible.sync="addLangNodeDialog"
          width="30%"
          :before-close="beforeClose">
        <ElmElForm ref="form" :model="newNode" label-width="80px">
          <ElmElFormItem :placeholder="$t('i18n.addNodeDialog.langPlaceholder')" :label="$t('i18n.addNodeDialog.type')">
            <Select v-model="newNode.atr" :placeholder="$t('i18n.addNodeDialog.typePlaceholder')">
              <Option
                      v-for="nt in nodeTypes"
                      :key="nt.value"
                      :label="nt.label"
                      :value="nt.value">
              </Option>
            </Select>
          </ElmElFormItem>
          <ElmElFormItem v-show="newNode.atr=='lang'" :placeholder="$t('i18n.addNodeDialog.langPlaceholder')" :label="$t('i18n.addNodeDialog.lang')">
            <Select v-model="newNode.type" placeholder="类型语言">
              <Option
                      v-for="lt in langTag"
                      :key="lt.code"
                      :label="lt.label"
                      :value="lt.code">
              </Option>
            </Select>
          </ElmElFormItem>
          <ElmElFormItem :label="$t('i18n.addNodeDialog.name')">
            <ElmElInput :placeholder="$t('i18n.addNodeDialog.namePlaceholder')" v-model="newNode.label"></ElmElInput>
          </ElmElFormItem>
          <ElmElFormItem :label="$t('i18n.addNodeDialog.desc')">
            <ElmElInput :placeholder="$t('i18n.addNodeDialog.descPlaceholder')" v-model="newNode.desc"></ElmElInput>
          </ElmElFormItem>
        </ElmElForm>
        <span slot="footer" class="dialog-footer">
          <ElmElButton @click="addLangNodeDialog = false">{{$t('i18n.other.cancel')}}</ElmElButton>
          <ElmElButton type="primary" @click="comfirmAddNode">{{$t('i18n.other.ok')}}</ElmElButton>
        </span>
      </ElmElDialog>
      <ElmElDialog
          :title="$t('i18n.changeNodeDialog.title')"
          :visible.sync="changePackInfoDialog"
          width="30%"
          :before-close="beforeClose">
        <ElmElForm ref="form" :model="packNodeInfo.newInfo" label-width="80px">
          <ElmElFormItem :label="$t('i18n.changeNodeDialog.name')">
            <ElmElInput :placeholder="$t('i18n.changeNodeDialog.name')" v-model="packNodeInfo.newInfo.label"></ElmElInput>
          </ElmElFormItem>
          <ElmElFormItem :label="$t('i18n.changeNodeDialog.desc')">
            <ElmElInput :placeholder="$t('i18n.changeNodeDialog.desc')" v-model="packNodeInfo.newInfo.desc"></ElmElInput>
          </ElmElFormItem>
        </ElmElForm>
        <span slot="footer" class="dialog-footer">
          <ElmElButton @click="changePackInfoDialog = false">{{$t('i18n.other.cancel')}}</ElmElButton>
          <ElmElButton type="primary" @click="comfirmChangePackInfo">{{$t('i18n.other.ok')}}</ElmElButton>
        </span>
      </ElmElDialog>
      <!-- 修改粘贴板格式 -->
      <ElmElDialog
              :title="'修改粘贴板格式'"
              :visible.sync="clipStyleDialog"
              width="30%"
              :before-close="beforeClose">
        <ElmElForm ref="form" :model="newTag" label-width="80px">
          <ElmElFormItem :label="$t('i18n.newLanguageDialog.code')">
            <ElmElInput placeholder="一定要带 #! 作为替换部分" v-model="clipStyle"></ElmElInput>
          </ElmElFormItem>
        </ElmElForm>
        <span slot="footer" class="dialog-footer">
          <ElmElButton @click="clipStyleDialog = false">{{$t('i18n.other.cancel')}}</ElmElButton>
          <ElmElButton type="primary" @click="clipStyleDialog = false">{{$t('i18n.other.ok')}}</ElmElButton>
        </span>
      </ElmElDialog>
    </div>
  </div>
</template>

<script>
    /* eslint-disable no-eval */

    import 'element-ui/lib/theme-chalk/index.css'

    // 解析 XML 中的 i18n 节点
    function resolve(node, json, pCounter) {
      // json = []
      let counter = 0
      for (var i = 0; i < node.childNodes.length; i++) {
        if (node.childNodes[i].tagName === 'NODE') {
          // 需要遍历
          counter++
          json.push({
            id: pCounter + '-' + counter,
            type: '',
            atr: 'pack',
            label: node.childNodes[i].getAttribute('name'),
            desc: node.childNodes[i].getAttribute('desc'),
            children: resolve(node.childNodes[i], [], pCounter + '-' + counter)
          })
        } else if (node.childNodes[i].tagName === 'LANG') {
          var langs = node.childNodes[i].childNodes
          for (var j = 0; j < langs.length; j++) {
            if (langs[j].nodeName === '#text') {
              continue
            }
            counter++
            json.push({
              id: pCounter + '-' + counter,
              atr: 'lang',
              desc: '语言而已',
              type: langs[j].nodeName,
              label: langs[j].innerText
            })
          }
        }
      }
      return json
    }
    // 构建 XML 文件
    function buildXML(langs, json) {
      function save(langs, json) {
        const top = document.createElement('top')
        const root = document.createElement('root')
        const ret = []
        top.append(root)

        root.innerHTML =
          '<language>' +
          (langs.forEach(l => {
            ret.push('<lang desc="' + l.label + '">' + l.code + '</lang>')
          }), ret).join('') +
          '</language>'

        root.innerHTML += '<i18n>' + build(json[0].children) + '</i18n>'
        return top
      }
      function build(arr) {
        if (arr.length) {
          if (arr[0].atr === 'pack') {
            const ret = []
            arr.forEach(a => {
              ret.push('<node name="' + a.label + '" desc="' + a.desc + '">' + build(a.children) + '</node>')
            })
            return ret
          } else {
            const ret = []
            arr.forEach(a => {
              ret.push('<' + a.type + '>' + a.label + '</' + a.type + '>')
            })
            return '<lang>' + ret.join('') + '</lang>'
          }
        } else {
          return ''
        }
      }
      return save(langs, json)
    }
    // 构建 JS 文件
    function buildJS(langs, json) {
      const langJson = {}
      function output(langs, json) {
        langs.forEach(l => {
          langJson[l.code] = ''
        })
        return buildOutput(json[0].children)
      }
      // json , 备份 , 结构
      function buildOutput(json) {
        const langJson_ = Object.assign({}, langJson)
        json.forEach(j => {
          // 这里毋庸置疑一定存在children
          if (j.children && j.children.length) {
            if (j.children[0].atr === 'lang') {
              const langJson__ = Object.assign({}, langJson)
              j.children.forEach(jc => {
                langJson__[jc.type] = '\'' + j.label + '\':\'' + jc.label + '\','
              })
              for (var i1 in langJson__) {
                if (!langJson__[i1]) {
                  langJson_[i1] += '\'' + j.label + '\':\'未定义该字段的翻译\','
                } else {
                  langJson_[i1] += langJson__[i1]
                }
              }
            } else {
              const ret = buildOutput(j.children)
              for (var i in ret) {
                langJson_[i] += '\'' + j.label + '\':' + ret[i] + ','
              }
            }
          } else {
            // 这里应该报错
            return ''
          }
        })
        for (var i in langJson_) {
          langJson_[i] = '{' + langJson_[i].substring(0, langJson_[i].length - 1) + '}'
        }
        return langJson_
      }
      var outputStr = output(langs, json)
      console.log(outputStr)
      return outputStr
    }
    // 通过 JS 文件构建 树 结构
    function buildJSON(tmpJson, code) {
      function build(json, curJson, id) {
        var c = 0
        for (var i in json) {
          if (typeof json[i] === typeof '') {
            curJson.children.push({
              id: id + '-' + (c++),
              // type: code,
              atr: 'pack',
              label: i,
              desc: '',
              children: [{
                id: id + '-' + (c) + '-0',
                type: code,
                atr: 'lang',
                label: json[i],
                desc: ''
              }]
            })
          } else {
            c++
            var tmp = {
              id: id + '-' + (c++),
              atr: 'pack',
              label: i,
              desc: '',
              children: []
            }
            build(json[i], tmp, id)
            curJson.children.push(tmp)
          }
        }
      }
      var ret = {
        type: 'root',
        label: this.$t('i18n.other.root'),
        atr: 'pack',
        desc: this.$t('i18n.other.rootDesc'),
        id: 'p',
        children: []
      }
      build(tmpJson, ret, 'p')
      return [ret]
    }
    // 合并另外导入的 JS 文件到当前的树结构中
    // data 是导入 JS 文件的内容
    // ret 是树结构
    // langType 是语言代码和标签
    function mergeTree(data, ret, langType) {
      function merge(data, ret) {
        for (var i = 0; i < ret.length; i++) {
          if (ret[i].label in data) {
            if (typeof data[ret[i].label] === typeof '') {
              // d
              ret[i].children.push({
                atr: 'lang',
                desc: '',
                id: ret[i].id + '-' + (ret[i].children.length + 1),
                label: data[ret[i].label],
                type: langType.code
              })
            } else {
              merge(data[ret[i].label], ret[i].children)
            }
          }
        }
      }
      merge(data, ret)
      console.log(ret)
      return ret
    }

    export default {
      data() {
        return {
          // 过滤显示的语言节点
          curLang: '',
          // 新建语言类型的语言结构
          newTag: {
            label: '',
            code: ''
          },
          // 添加语言的对话框是否显示出来
          addLangDialog: false,
          // 修改语言节点的对话框是否显示出来
          changeLangDialog: false,
          // 修改粘贴板的对话框是否显示出来
          clipStyleDialog: false,
          // 语言（xml 中 language 节点中的内容）
          langTag: [],
          // i18n 节点下的内容，同时也是树结构的内容
          data5: [],
          // 添加节点的对话框是否显示
          addLangNodeDialog: false,
          // 修改语言包节点的对话框是否显示
          changePackInfoDialog: false,
          // 修改树结构中某一个语言节点的节点结构
          changeLang: {
            oldL: '',
            newL: '',
            tmp: {}
          },
          // 当前节点处所能添加的节点的类型
          nodeTypes: [
            {
              label: this.$t('i18n.addNodeDialog.pack'),
              value: 'pack'
            },
            {
              label: this.$t('i18n.addNodeDialog.lang'),
              value: 'lang'
            }
          ],
          // 添加树新节点时节点的结构
          newNode: {
            atr: '',
            desc: '',
            id: '',
            label: '',
            type: '',
            children: [],
            temp: {}
          },
          // 待修改语言包节点的信息
          packNodeInfo: {
            data: {},
            node: {},
            newInfo: {}
          },
          // 当前导入脚本的语言
          curInputLang: {},
          // 自动保存 XML 结构
          autoSaveXML: {
            filePath: '',
            autoSave: false
          },
          clipStyle: '#!',
          copyNodes: {
            wait: false,
            target: false,
            nodes: {}
          }
        }
      },
      methods: {
        // 过滤语言节点
        filterNode(value, data) {
          if (data.atr === 'lang') {
            if (this.curLang !== '') {
              return this.curLang === data.type
            }
          }
          return true
        },
        // 删除语言类型
        handleClose(ind) {
          this.elm.$confirm(this.$t('i18n.deleteNote.deleteNodeNotic'), this.$t('i18n.other.tip'), {
            confirmButtonText: this.$t('i18n.other.ok'),
            cancelButtonText: this.$t('i18n.other.cancel'),
            type: 'warning'
          }).then(() => {
            this.langTag.splice(ind, 1)
            this.elm.$message({
              type: 'success',
              message: this.$t('i18n.other.deleteSuccess')
            })
          }).catch(() => {
            this.elm.$message({
              type: 'info',
              message: this.$t('i18n.other.cancelOP')
            })
          })
        },
        // 显示添加语言类型的对话框
        showInput() {
          this.addLangDialog = true
          this.newTag = {
            label: '',
            code: ''
          }
        },
        // 确认添加一种语言，并关闭对话框
        comfirmAddLang(tar) {
          this.addLangDialog = false
          if (tar === 'close') {
            return
          }
          this.langTag.push(this.newTag)
        },
        // 关闭所有对话框
        beforeClose() {
          this.addLangDialog = false
          this.changeLangDialog = false
          this.addLangNodeDialog = false
          this.changePackInfoDialog = false
        },
        // 打开 XML 文件
        open() {
          this.autoSaveXML.autoSave = false
          this.autoSaveXML.filePath = ''
          const ret = this.$store.state.dialog.showOpenDialog({
            filters: [
              { name: '国际化文件', extensions: ['xml'] }
            ]
          })
          if (ret.length === 1) {
            this.$store.state.ipc.send('fileOP', { op: 'read', path: ret[0] })
          }
        },
        // 创建一个 XML 文件
        create() {
          this.autoSaveXML.autoSave = false
          this.autoSaveXML.filePath = ''
          this.elm.$confirm(this.$t('i18n.other.createXMLTip'), this.$t('i18n.other.tip'), {
            confirmButtonText: this.$t('i18n.other.ok'),
            cancelButtonText: this.$t('i18n.other.cancel'),
            type: 'warning'
          }).then(() => {
            this.data5 = [{
              type: 'root',
              label: this.$t('i18n.other.root'),
              atr: 'pack',
              desc: this.$t('i18n.other.rootDesc'),
              id: 'p',
              children: []
            }]
            this.save()
          }).catch(() => {
            this.elm.$message({
              type: 'info',
              message: this.$t('i18n.other.cancelOP')
            })
          })
        },
        // 保持 XML 文件
        save() {
          const ret = this.$store.state.dialog.showSaveDialog({
            filters: [
              { name: '国际化文件', extensions: ['xml'] }
            ]
          })
          if (ret) {
            this.autoSaveXML.filePath = ret
            this.$store.state.ipc.send('fileOP', {
              op: 'write',
              path: ret,
              content: buildXML(this.langTag, this.data5).innerHTML
            })
          }
        },
        // 导出 JS 文件
        output() {
          const ret = this.$store.state.dialog.showOpenDialog({
            properties: ['openDirectory']
          })
          if (ret.length) {
            const jss = buildJS(this.langTag, this.data5)
            for (var i in jss) {
              this.$store.state.ipc.send('fileOP', {
                op: 'write',
                path: ret[0] + '/' + i + '.js',
                content: 'export const ' + i + ' = ' + jss[i]
              })
            }
          }
        },
        // 导入一个国际化的 js
        input() {
          this.autoSaveXML.autoSave = false
          this.autoSaveXML.filePath = ''
          const ret = this.$store.state.dialog.showOpenDialog({
            filters: [
              { name: '国际化文件', extensions: ['js'] }
            ]
          })
          if (ret.length === 1) {
            this.elm.$prompt(this.$t('i18n.other.inputJSFileTip'), this.$t('i18n.other.tip'), {
              confirmButtonText: this.$t('i18n.other.ok'),
              cancelButtonText: this.$t('i18n.other.cancel')
            }).then(({ value }) => {
              value = value.split('|')
              this.langTag.push({
                label: value[0],
                code: value[1]
              })
              this.curInputLang = {
                lable: value[0],
                code: value[1]
              }
              this.$store.state.ipc.send('fileOP', { op: 'read', path: ret[0] })
            }).catch(() => {
              this.elm.$message({
                type: 'info',
                message: this.$t('i18n.other.cancelOP')
              })
            })
          }
        },
        // 添加一个树节点的事前判断，并打开对话框
        append(data, node) {
          this.newNode = {
            atr: '',
            desc: '',
            id: '',
            label: '',
            type: '',
            children: []
          }
          if (data.children && data.children.length) {
            if (data.children[0].atr === 'lang') {
              // 创建语言节点
              this.newNode.atr = 'lang'
              // todo
              this.nodeTypes = [
                {
                  label: this.$t('i18n.addNodeDialog.lang'),
                  value: 'lang'
                }
              ]
            } else {
              // 创建语言包
              this.newNode.atr = 'pack'
              this.nodeTypes = [
                {
                  label: this.$t('i18n.addNodeDialog.pack'),
                  value: 'pack'
                }
              ]
            }
            this.newNode.id = data.id + '-' + (data.children.length + 1)
          } else {
            // 询问节点类型
            this.nodeTypes = [
              {
                label: this.$t('i18n.addNodeDialog.pack'),
                value: 'pack'
              },
              {
                label: this.$t('i18n.addNodeDialog.lang'),
                value: 'lang'
              }
            ]
            this.newNode.id = data.id + '-1'
          }
          this.addLangNodeDialog = true
          this.newNode.temp = node
        },
        // 删除一个树节点
        remove(node, data) {
          if (data.type === 'root') {
            this.elm.$message({
              type: 'error',
              message: this.$t('i18n.other.deleteRootError')
            })
            return
          }
          this.elm.$confirm(this.$t('i18n.deleteNote.deleteNodeNotic'), this.$t('i18n.other.tip'), {
            confirmButtonText: this.$t('i18n.other.ok'),
            cancelButtonText: this.$t('i18n.other.cancel'),
            type: 'warning'
          }).then(() => {
            const parent = node.parent
            const children = parent.data.children || parent.data
            const index = children.findIndex(d => d.id === data.id)
            children.splice(index, 1)
          }).catch(() => {
            this.elm.$message({
              type: 'info',
              message: this.$t('i18n.other.cancelOP')
            })
          })
        },
        copyLink(node, data) {
          const link = [data.label]
          const cs = this.clipStyle
          while (node.parent.data.type !== 'root') {
            link.unshift(node.parent.data.label)
            node = node.parent
          }
          this.$store.state.clipboard.writeText(cs.replace('#!', link.join('.')))
        },
        dearJSON(ret) {
          ret = ret.substring(ret.indexOf('{'), ret.length)
          eval('window.tmp = ' + ret)
          if (this.data5.length && this.data5[0].children && this.data5[0].children.length) {
            this.elm.$confirm(this.$t('i18n.other.inputJSFileWhenTreeExist'), this.$t('i18n.other.tip'), {
              confirmButtonText: this.$t('i18n.other.ok'),
              cancelButtonText: this.$t('i18n.other.cancel'),
              type: 'warning'
            }).then(() => {
              this.data5 = buildJSON(window.tmp, this.langTag[0].code)
            }).catch(() => {
              this.data5[0].children = mergeTree(window.tmp, this.data5[0].children, this.curInputLang)
              console.log(this.data5)
              this.data5 = JSON.parse(JSON.stringify(this.data5))
            })
          } else {
            this.data5 = buildJSON(window.tmp, this.langTag[0].code)
          }
        },
        // 处理打开的一个 XML 文件
        dearXML(obj) {
          if (obj.ret.indexOf('export const') >= 0) {
            this.dearJSON(obj.ret)
            return
          }
          const div = document.createElement('div')
          div.innerHTML = obj.ret
          window.div = div
          this.dearLanguage(div.getElementsByTagName('language')[0])
          this.data5 = [{
            type: 'root',
            label: this.$t('i18n.other.root'),
            atr: 'pack',
            desc: this.$t('i18n.other.rootDesc'),
            id: 'p',
            children: resolve(div.getElementsByTagName('i18n')[0], [], 'p')
          }]
          window.json = this.data5
        },
        // 处理 XML 中的 language 节点
        dearLanguage(langXML) {
          const langs = langXML.getElementsByTagName('lang')
          this.langTag = []
          for (var i = 0; i < langs.length; i++) {
            this.langTag.push({
              label: langs[i].getAttribute('desc'),
              code: langs[i].innerText.toString().toUpperCase()
            })
          }
        },
        // 修改一个 树 国际化节点的翻译的事前动作
        changeLangWord(node) {
          this.changeLangDialog = true
          this.changeLang.oldL = node.label
          this.changeLang.newL = ''
          this.changeLang.tmp = node
        },
        // 确认修改一个 树 国际化节点的翻译
        comfirmChangeLangWord() {
          this.changeLangDialog = false
          this.changeLang.tmp.data.label = this.changeLang.newL
        },
        // 确认添加一个树节点
        comfirmAddNode() {
          const newNode = Object.assign({}, this.newNode)
          delete newNode.temp
          if (this.newNode.temp.data.children && this.newNode.temp.data.children instanceof Array) {
            if (newNode.atr === 'lang') {
              if (!this.newNode.temp.data.children.every(child => {
                return !(child.type === newNode.type)
              })) {
                this.elm.$confirm((this.$t('i18n.other.langExisted').replace('#word#', newNode.label)), this.$t('i18n.other.tip'), {
                  confirmButtonText: this.$t('i18n.other.ok'),
                  cancelButtonText: this.$t('i18n.other.cancel'),
                  type: 'warning'
                }).then(() => {
                  this.newNode.temp.data.children.every(child => {
                    if (child.type === newNode.type) {
                      child.label = newNode.label
                      return false
                    } else {
                      return true
                    }
                  })
                }).catch(() => {
                  // 什么都不需要做
                })
              } else {
                this.newNode.temp.data.children.push(newNode)
              }
            } else {
              this.newNode.temp.data.children.push(newNode)
            }
          } else {
            this.newNode.temp.data.children = [newNode]
          }
          this.addLangNodeDialog = false
        },
        // 显示节点的备注信息
        showDesc(data) {
          this.elm.$notify({
            title: this.$t('i18n.other.tip'),
            message: data.desc,
            duration: 1000 * 3
          })
        },
        // 修改语言包节点信息
        changePackInfo(node, data) {
          this.changePackInfoDialog = true
          this.packNodeInfo = { data, node, newInfo: {
            desc: data.desc,
            label: data.label
          }}
        },
        comfirmChangePackInfo() {
          this.packNodeInfo.data.desc = this.packNodeInfo.newInfo.desc
          this.packNodeInfo.data.label = this.packNodeInfo.newInfo.label
          this.changePackInfoDialog = false
        },
        // 自动保存
        autoSaveXMLFile() {
          if (this.autoSaveXML.autoSave) {
            if (this.autoSaveXML.filePath) {
              // 自动保存
              this.$store.state.ipc.send('fileOP', {
                op: 'write',
                path: this.autoSaveXML.filePath,
                content: buildXML(this.langTag, this.data5).innerHTML
              })
              this.elm.$notify({
                type: 'success',
                message: this.$t('i18n.other.autoSaveNotice')
              })
            } else {
              this.save()
            }
          }
        },
        // 复制节点
        copyNode(node, data, target) {
          this.copyNodes.wait = true
          this.copyNodes.target = !!target
          this.copyNodes.nodes = JSON.parse(JSON.stringify(data))
        },
        pasteNode(node, data) {
          console.log(this.copyNodes)
          function reBuild(node, id) {
            node.id = id
            if (!node.children.length) {
              for (var i = 0; i < node.children.length; i++) {
                node.children[i] = reBuild(node.children[i], id + '-' + (i + 1))
              }
            }
            return node
          }
          if (this.copyNodes.target) {
            data.children.push(reBuild(this.copyNodes.nodes, data.id + '-' + (data.children.length + 1)))
          } else {
            this.copyNodes.nodes.id = data.id + '-' + (data.children.length + 1)
            data.children.push(this.copyNodes.nodes)
          }
          this.copyNodes.wait = false
        },
        dePasteNode() {}
      },
      mounted() {
        const $this = this
        this.$store.state.ipc.on('fileRead', (e, obj) => {
          $this.dearXML(obj)
        })
        window.$this = this
        setInterval(() => {
          this.autoSaveXMLFile()
        }, 30 * 1000)
      },
      watch: {
        curLang(val) {
          this.$refs.tree.filter(val)
        },
        'autoSaveXML.autoSave'(val) {
          this.elm.$notify({
            type: 'info',
            dangerouslyUseHTMLString: true,
            message: (val ? this.$t('i18n.other.autoSaveTipPre') + '&nbsp;<span style="color: #67c23a;">' + this.$t('i18n.other.autoSaveOpen') + '</span>' : this.$t('i18n.other.autoSaveTipPre') + '&nbsp;<span style="color: #f00;">' + this.$t('i18n.other.autoSaveClose') + '</span>')
          })
          if (val) {
            setTimeout(() => {
              this.elm.$notify({
                type: 'info',
                message: this.$t('i18n.other.autoSaveOpenMessage')
              })
            })
          }
        }
      }
    }
</script>

<style>
  .Tag + .Tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>