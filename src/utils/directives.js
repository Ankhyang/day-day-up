// 注册自定义指令
const directives = {}

// 批量导入模块
let importAll = require.context('@customDirectives', false, /\.js$/) // false为不搜索子目录
importAll.keys().map(path => {
    // 兼容处理：.default 获取 ES6 规范暴露的内容; 后者获取 commonJS 规范暴露的内容
    let obj = importAll(path).default || importAll(path)
    if(obj.name) directives[obj.name] = obj
})

export default {
    insatll(Vue) {
        Object.keys(directives).forEach(key => {
            Vue.directive(key, directives[key])
        })
    }
}