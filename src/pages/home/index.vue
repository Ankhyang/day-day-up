<script type="text/jsx">
// 高阶函数
import CurryFunc from '../higher_order_funcs/curry_func'
import CacheFunc from '../higher_order_funcs/cache_func'
import PartialFunc from '../higher_order_funcs/partial_func'
import InertiaFunc from '../higher_order_funcs/inertia_func'
// 鼠标悬浮
import CssBorder from '../css/css_border'
// 自定义指令
import Directive from '../custome_directives'
export default {
    name: 'home',
    components: {
        CurryFunc,
        CacheFunc,
        PartialFunc,
        InertiaFunc,
        CssBorder
    },
    render() {
        return (
            <div>
                <Directive/>
            </div>
        )
    }
}
</script>

<style lang="less" scoped>

</style>