const baseUI = [
    {
        "name":"a",
        "desc":"定义锚。",
        "h5":false
    },
    {
        "name":"abbr",
        "desc":"定义缩写。",
        "h5":false
    },
    {
        "name":"acronym",
        "desc":"定义只取首字母的缩写。",
        "h5":false
    },
    {
        "name":"address",
        "desc":"定义文档作者或拥有者的联系信息。",
        "h5":false
    },
    {
        "name":"applet",
        "desc":"不赞成使用。定义嵌入的 applet。",
        "h5":false
    },
    {
        "name":"area",
        "desc":"定义图像映射内部的区域。",
        "h5":false
    },
    {
        "name":"article",
        "desc":"定义文章。",
        "h5":false
    },
    {
        "name":"aside",
        "desc":"定义页面内容之外的内容。",
        "h5":false
    },
    {
        "name":"audio",
        "desc":"定义声音内容。",
        "h5":false
    },
    {
        "name":"b",
        "desc":"定义粗体字。",
        "h5":false
    },
    {
        "name":"base",
        "desc":"定义页面中所有链接的默认地址或默认目标。",
        "h5":false
    },
    {
        "name":"basefont",
        "desc":"不赞成使用。定义页面中文本的默认字体、颜色或尺寸。",
        "h5":false
    },
    {
        "name":"bdi",
        "desc":"定义文本的文本方向，使其脱离其周围文本的方向设置。",
        "h5":false
    },
    {
        "name":"bdo",
        "desc":"定义文字方向。",
        "h5":false
    },
    {
        "name":"big",
        "desc":"定义大号文本。",
        "h5":false
    },
    {
        "name":"blockquote",
        "desc":"定义长的引用。",
        "h5":false
    },
    {
        "name":"body",
        "desc":"定义文档的主体。",
        "h5":false
    },
    {
        "name":"br",
        "desc":"定义简单的折行。",
        "h5":false
    },
    {
        "name":"button",
        "desc":"定义按钮 (push button)。",
        "h5":false
    },
    {
        "name":"canvas",
        "desc":"定义图形。",
        "h5":false
    },
    {
        "name":"caption",
        "desc":"定义表格标题。",
        "h5":false
    },
    {
        "name":"center",
        "desc":"不赞成使用。定义居中文本。",
        "h5":false
    },
    {
        "name":"cite",
        "desc":"定义引用(citation)。",
        "h5":false
    },
    {
        "name":"code",
        "desc":"定义计算机代码文本。",
        "h5":false
    },
    {
        "name":"col",
        "desc":"定义表格中一个或多个列的属性值。",
        "h5":false
    },
    {
        "name":"colgroup",
        "desc":"定义表格中供格式化的列组。",
        "h5":false
    },
    {
        "name":"command",
        "desc":"定义命令按钮。",
        "h5":false
    },
    {
        "name":"datalist",
        "desc":"定义下拉列表。",
        "h5":false
    },
    {
        "name":"dd",
        "desc":"定义定义列表中项目的描述。",
        "h5":false
    },
    {
        "name":"del",
        "desc":"定义被删除文本。",
        "h5":false
    },
    {
        "name":"details",
        "desc":"定义元素的细节。",
        "h5":false
    },
    {
        "name":"dir",
        "desc":"不赞成使用。定义目录列表。",
        "h5":false
    },
    {
        "name":"div",
        "desc":"定义文档中的节。",
        "h5":false
    },
    {
        "name":"dfn",
        "desc":"定义定义项目。",
        "h5":false
    },
    {
        "name":"dialog",
        "desc":"定义对话框或窗口。",
        "h5":false
    },
    {
        "name":"dl",
        "desc":"定义定义列表。",
        "h5":false
    },
    {
        "name":"dt",
        "desc":"定义定义列表中的项目。",
        "h5":false
    },
    {
        "name":"em",
        "desc":"定义强调文本。",
        "h5":false
    },
    {
        "name":"embed",
        "desc":"定义外部交互内容或插件。",
        "h5":false
    },
    {
        "name":"fieldset",
        "desc":"定义围绕表单中元素的边框。",
        "h5":false
    },
    {
        "name":"figcaption",
        "desc":"定义 figure 元素的标题。",
        "h5":false
    },
    {
        "name":"figure",
        "desc":"定义媒介内容的分组，以及它们的标题。",
        "h5":false
    },
    {
        "name":"font",
        "desc":"不赞成使用。定义文字的字体、尺寸和颜色。",
        "h5":false
    },
    {
        "name":"footer",
        "desc":"定义 section 或 page 的页脚。",
        "h5":false
    },
    {
        "name":"form",
        "desc":"定义供用户输入的 HTML 表单。",
        "h5":false
    },
    {
        "name":"frame",
        "desc":"定义框架集的窗口或框架。",
        "h5":false
    },
    {
        "name":"frameset",
        "desc":"定义框架集。",
        "h5":false
    },
    {
        "name":"h1> to <h6",
        "desc":"定义 HTML 标题。",
        "h5":false
    },
    {
        "name":"head",
        "desc":"定义关于文档的信息。",
        "h5":false
    },
    {
        "name":"header",
        "desc":"定义 section 或 page 的页眉。",
        "h5":false
    },
    {
        "name":"hr",
        "desc":"定义水平线。",
        "h5":false
    },
    {
        "name":"html",
        "desc":"定义 HTML 文档。",
        "h5":false
    },
    {
        "name":"i",
        "desc":"定义斜体字。",
        "h5":false
    },
    {
        "name":"iframe",
        "desc":"定义内联框架。",
        "h5":false
    },
    {
        "name":"img",
        "desc":"定义图像。",
        "h5":false,
        attrs: {
            src: ''
        }
    },
    {
        "name":"input",
        "desc":"定义输入控件。",
        "h5":false
    },
    {
        "name":"ins",
        "desc":"定义被插入文本。",
        "h5":false
    },
    {
        "name":"isindex",
        "desc":"不赞成使用。定义与文档相关的可搜索索引。",
        "h5":false
    },
    {
        "name":"kbd",
        "desc":"定义键盘文本。",
        "h5":false
    },
    {
        "name":"keygen",
        "desc":"定义生成密钥。",
        "h5":false
    },
    {
        "name":"label",
        "desc":"定义 input 元素的标注。",
        "h5":false
    },
    {
        "name":"legend",
        "desc":"定义 fieldset 元素的标题。",
        "h5":false
    },
    {
        "name":"li",
        "desc":"定义列表的项目。",
        "h5":false
    },
    {
        "name":"link",
        "desc":"定义文档与外部资源的关系。",
        "h5":false
    },
    {
        "name":"map",
        "desc":"定义图像映射。",
        "h5":false
    },
    {
        "name":"mark",
        "desc":"定义有记号的文本。",
        "h5":false
    },
    {
        "name":"menu",
        "desc":"定义命令的列表或菜单。",
        "h5":false
    },
    {
        "name":"menuitem",
        "desc":"定义用户可以从弹出菜单调用的命令/菜单项目。",
        "h5":false
    },
    {
        "name":"meta",
        "desc":"定义关于 HTML 文档的元信息。",
        "h5":false
    },
    {
        "name":"meter",
        "desc":"定义预定义范围内的度量。",
        "h5":false
    },
    {
        "name":"nav",
        "desc":"定义导航链接。",
        "h5":false
    },
    {
        "name":"noframes",
        "desc":"定义针对不支持框架的用户的替代内容。",
        "h5":false
    },
    {
        "name":"noscript",
        "desc":"定义针对不支持客户端脚本的用户的替代内容。",
        "h5":false
    },
    {
        "name":"object",
        "desc":"定义内嵌对象。",
        "h5":false
    },
    {
        "name":"ol",
        "desc":"定义有序列表。",
        "h5":false
    },
    {
        "name":"optgroup",
        "desc":"定义选择列表中相关选项的组合。",
        "h5":false
    },
    {
        "name":"option",
        "desc":"定义选择列表中的选项。",
        "h5":false
    },
    {
        "name":"output",
        "desc":"定义输出的一些类型。",
        "h5":false
    },
    {
        "name":"p",
        "desc":"定义段落。",
        "h5":false,
        // text: 'p',
        domProps: {
            innerHTML: {
                type: 'string',
                default: 'p'
            }
        }
    },
    {
        "name":"param",
        "desc":"定义对象的参数。",
        "h5":false
    },
    {
        "name":"pre",
        "desc":"定义预格式文本。",
        "h5":false
    },
    {
        "name":"progress",
        "desc":"定义任何类型的任务的进度。",
        "h5":false
    },
    {
        "name":"q",
        "desc":"定义短的引用。",
        "h5":false
    },
    {
        "name":"rp",
        "desc":"定义若浏览器不支持 ruby 元素显示的内容。",
        "h5":false
    },
    {
        "name":"rt",
        "desc":"定义 ruby 注释的解释。",
        "h5":false
    },
    {
        "name":"ruby",
        "desc":"定义 ruby 注释。",
        "h5":false
    },
    {
        "name":"s",
        "desc":"不赞成使用。定义加删除线的文本。",
        "h5":false
    },
    {
        "name":"samp",
        "desc":"定义计算机代码样本。",
        "h5":false
    },
    {
        "name":"script",
        "desc":"定义客户端脚本。",
        "h5":false
    },
    {
        "name":"section",
        "desc":"定义 section。",
        "h5":false
    },
    {
        "name":"select",
        "desc":"定义选择列表（下拉列表）。",
        "h5":false
    },
    {
        "name":"small",
        "desc":"定义小号文本。",
        "h5":false
    },
    {
        "name":"source",
        "desc":"定义媒介源。",
        "h5":false
    },
    {
        "name":"span",
        "desc":"定义文档中的节。",
        "h5":false,
        text: 'span',
        domProps: {
            innerHTML: {
                type: 'string',
                default: 'p'
            }
        }
    },
    {
        "name":"strike",
        "desc":"不赞成使用。定义加删除线文本。",
        "h5":false
    },
    {
        "name":"strong",
        "desc":"定义强调文本。",
        "h5":false
    },
    {
        "name":"style",
        "desc":"定义文档的样式信息。",
        "h5":false
    },
    {
        "name":"sub",
        "desc":"定义下标文本。",
        "h5":false
    },
    {
        "name":"summary",
        "desc":"为 <details> 元素定义可见的标题。",
        "h5":false
    },
    {
        "name":"sup",
        "desc":"定义上标文本。",
        "h5":false
    },
    {
        "name":"table",
        "desc":"定义表格。",
        "h5":false
    },
    {
        "name":"tbody",
        "desc":"定义表格中的主体内容。",
        "h5":false
    },
    {
        "name":"td",
        "desc":"定义表格中的单元。",
        "h5":false
    },
    {
        "name":"textarea",
        "desc":"定义多行的文本输入控件。",
        "h5":false
    },
    {
        "name":"tfoot",
        "desc":"定义表格中的表注内容（脚注）。",
        "h5":false
    },
    {
        "name":"th",
        "desc":"定义表格中的表头单元格。",
        "h5":false
    },
    {
        "name":"thead",
        "desc":"定义表格中的表头内容。",
        "h5":false
    },
    {
        "name":"time",
        "desc":"定义日期/时间。",
        "h5":false
    },
    {
        "name":"title",
        "desc":"定义文档的标题。",
        "h5":false
    },
    {
        "name":"tr",
        "desc":"定义表格中的行。",
        "h5":false
    },
    {
        "name":"track",
        "desc":"定义用在媒体播放器中的文本轨道。",
        "h5":false
    },
    {
        "name":"tt",
        "desc":"定义打字机文本。",
        "h5":false
    },
    {
        "name":"u",
        "desc":"不赞成使用。定义下划线文本。",
        "h5":false
    },
    {
        "name":"ul",
        "desc":"定义无序列表。",
        "h5":false
    },
    {
        "name":"var",
        "desc":"定义文本的变量部分。",
        "h5":false
    },
    {
        "name":"video",
        "desc":"定义视频。",
        "h5":false
    },
    {
        "name":"wbr",
        "desc":"定义可能的换行符。",
        "h5":false
    },
    {
        "name":"xmp",
        "desc":"不赞成使用。定义预格式文本。",
        "h5":false
    }
]

/**
 * name: tds[0].innerText.substring(1, tds[0].innerText.length - 1),
 * desc: tds[1].innerText,
 * h5: false
 */

export const baseComponent = ((baseUI) => {
    const ret = {}
    baseUI.forEach(ui => {
        ret[ui.name] = Object.assign({
            createElementNode() {
                const id = this.name + (new Date()).getTime()
                const domProps = {}
                if (ui.domProps) {
                    for (var i in ui.domProps) {
                        domProps[i] = ui.domProps[i].default
                    }
                }
                return Object.assign({
                    id,
                    name: this.name,
                    realname: this.name,
                    style: {},
                    type: 'el',
                    title: this.name,
                    children: [],
                    desc: ui.desc,
                    h5: ui.h5 || false,
                    domProps
                })
            }
        },ui)
    })
    return ret
})(baseUI)