<script type="text/jsx">
import CurryFunc from '../higher_order_funcs/curry_func'
import CacheFunc from '../higher_order_funcs/cache_func'
import PartialFunc from '../higher_order_funcs/partial_func'
import InertiaFunc from '../higher_order_funcs/inertia_func'

export default {
    name: 'home',
    components: {
        CurryFunc,
        CacheFunc,
        PartialFunc,
        InertiaFunc
    },
    render() {
        return (
            <div>
                <CurryFunc/>
                <CacheFunc/>
                <PartialFunc/>
                <InertiaFunc/>
            </div>
        )
    }
}
</script>

<style lang="less" scoped>

</style>