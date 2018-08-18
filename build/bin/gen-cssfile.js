var fs = require('fs')
var path = require('path')

var themes = [
  'style'
]
const Components = [
  'tree'
]
var basepath = path.resolve(__dirname, '../../packages/')

function fileExists (filePath) {
  try {
    return fs.statSync(filePath).isFile()
  } catch (err) {
    return false
  }
}

themes.forEach((theme) => {
  var isSCSS = theme !== 'theme-default'
  var indexContent = ''
  Components.forEach(function (key) {
    if (['icon', 'option', 'option-group'].indexOf(key) > -1) return

    var fileName = key + (isSCSS ? '.scss' : '.css')
    indexContent += '@import "../' + fileName + '";\n'
    var filePath = path.resolve(basepath, theme, 'src/scss', fileName)

    if (!fileExists(filePath)) {
      fs.writeFileSync(filePath, indexContent, 'utf8')
      console.log(theme, ' 创建遗漏的 ', fileName, ' 文件')
    }
  })
  fs.writeFileSync(path.resolve(basepath, theme, 'src/scss', isSCSS ? 'index.scss' : 'index.css'), indexContent)
})
