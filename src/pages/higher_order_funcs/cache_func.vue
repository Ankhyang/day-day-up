<script type="text/jsx">
export default {
    name: 'cache_func',
    methods: {
        memorize(fn) {
            const cache = Object.create(null);
            return function(...args) {
                const _args = JSON.stringify(args);
                return cache[_args] || (cache[_args] = fn.apply(fn, args))
            }
        },
        caculate(a, b) {
            return a * b
        }
    },
    render() {
        const { memorize, caculate } = this
        const cacFunc = memorize(caculate)
        const num1 = cacFunc(2, 3)
        const num2 = cacFunc(3, 4)
        const num3 = cacFunc(2, 3)
        const num4 = caculate(5, 6)
        return (
            <div>
                <p>我是缓存函数</p>
                <p>{num1}</p>
                <p>{num2}</p>
                <p>{num3}</p>
                <p>{num4}</p>
            </div>
        )
    }
}
</script>

<style lang="less" scoped>

</style>