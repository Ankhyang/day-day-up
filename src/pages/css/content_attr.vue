<script type="text/jsx">
// 利用伪类的content结合attr展示内容

export default {
    name: 'contentAttr',
    data() {
        return {
            colors: {
                '姨妈红': '#f66',
                '基佬紫': '#66f',
                '箩底橙': '#f90',
                '姣婆蓝': '#09f',
                '大粪青': '#9c3',
                '原谅绿': '#3c9'
            }
        }
    },
    methods: {
        renderEle() {
            return (
                Object.keys(this.colors).map(item => {
                    let value = this.colors[item]
                    return <li data-name={item} style={{'backgroundColor': value}}></li>
                })
            )
        }
    },
    render() {
        return (
            <ul class="hover-tips">
                {this.renderEle()}
            </ul>
        )
    }    
}
</script>

<style lang="less" scoped>
    
</style>