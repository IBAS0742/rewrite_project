module.exports = {
  path : {
    // 相对于资源的位置
    default: './../../WEB-INF/views/voutput/'
  },
  // 是否 page 文件夹下的文件配置多页输出
  childMutilPage: false,
  // 当配置了文件夹下文件为多页输出后使用该方法导出多页 HTML
  childMutilHTMLOutput(filePath,PAGE_PATH) {
    let filenames = filePath.substring(PAGE_PATH.length).split('/');
    filenames.shift();
    filenames.splice(filenames.length - 2,1);
    filenames[filenames.length - 1] = filenames[filenames.length - 1].substring(0,filenames[filenames.length - 1].lastIndexOf('.html'));
    return {
      // 模板来源
      template: filePath,
      // 文件名称
      filename: filenames.join('/') + '.html',
      // filename: filenames + '.html',
      // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
      chunks: ['manifest', 'vendor', filenames.join('.')],
      // chunks: ['manifest', 'vendor', filename],
      inject: true
    };
  },
  // 默认情况下使用该方法导出单页 HTML
  singleHTMLOutput(filePath) {
    let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
    return {
      // 模板来源
      template: filePath,
      // 文件名称
      filename: filenames + '.html',
      // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
      chunks: ['manifest', 'vendor', filename],
      inject: true
    }
  },
  // 当配置了文件夹下文件为多页输出后使用该方法指定多页的入口 JS
  childMutilEntry(entryFiles,PAGE_PATH) {
    let map = {};
    entryFiles.forEach((filePath) => {
      let filenames = filePath.substring(PAGE_PATH.length).split('/');
      filenames.shift();
      filenames.splice(filenames.length - 2,1);
      filenames[filenames.length - 1] = filenames[filenames.length - 1].substring(0,filenames[filenames.length - 1].lastIndexOf('.js'));
      map[filenames.join('.')] = filePath
    });
    return map;
  },
  // 默认情况下使用该方法指定 JS
  singleEntry(entryFiles,PAGE_PATH) {
    let map = {};
    entryFiles.forEach((filePath) => {
      var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
      map[filename] = filePath
    });
    return map;
  },
};
/**
 * 可能不是很好的文档位置，我会另外在合适的地方进行拷贝，这里先简单说明一下
 * 配置【文件夹下多页】的意思
 * 默认情况下
 * page 文件夹中的页面导出为以下结构
 * 例如 page 结构如下
 *    page
 *      -index
 *        -index.vue、index.js、index.html
 *     -windowList
 *        -windowList.vue、windowList.js、windowList.html
 *    -windowCheck
 *        -windowCheck.vue、windowCheck.js、windowCheck.html
 *     -buildingList
 *        -buildingList.vue、buildingList.js、buildingList.html
 *    -buildingCheck
 *        -buildingCheck.vue、buildingCheck.js、buildingCheck.html
 * 生产目录结构
 *    page (文件夹)
 *      -index.html
 *      -windowList.html
 *      -windowCheck.html
 *      -buildingList.html
 *      -buildingCheck.html
 * 但是 有时候 需要 将 windowList、windowCheck 和 buildingList、buildingList 分别统一到 window、check 文件夹下
 *    page
 *      -index
 *        -index.vue、index.js、index.html
 *     -window
 *        -windowList
 *            -windowList.vue、windowList.js、windowList.html
 *        -windowCheck
 *            -windowCheck.vue、windowCheck.js、windowCheck.html
 *     -building
 *        -buildingList
 *            -buildingList.vue、buildingList.js、buildingList.html
 *        -buildingCheck
 *            -buildingCheck.vue、buildingCheck.js、buildingCheck.html
 * 这样子原来的打包 无法 完成，需要将 【childMutilPage】 配置 为 true
 * 并且将生成以下目录结构
 *    page (文件夹)
 *      -index.html
 *      -window (文件夹)
 *          -windowList.html
 *          -windowCheck.html
 *      -building (文件夹)
 *          -buildingList.html
 *          -buildingCheck.html
 * */
