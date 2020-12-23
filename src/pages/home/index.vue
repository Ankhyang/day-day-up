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
// 伪类元素结合counter计数器练习
import FloatingBall from "../css/content_floating_ball"
// 伪类元素结合attr练习
import ContentAttr from "../css/content_attr";
// 文字渐入显示特效
import TextSlideIn from "../css/text_slide_in";

import PunkBtn from "../css/punk_btn";
export default {
    name: 'home',
    components: {
        CurryFunc,
        CacheFunc,
        PartialFunc,
        InertiaFunc,
        CssBorder,
        FloatingBall,
        ContentAttr,
        TextSlideIn,
        PunkBtn
    },
    render() {
        return (
            <div>
                <PunkBtn/>
            </div>
        )
    }
}
</script>

<style lang="less" scoped>
    div{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>