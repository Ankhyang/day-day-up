<script type='text/jsx'>
// 1. 两数之和
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

export default {
    name: 'two_nums_sum',
    data(){
        return{
            sum: []
        }
    },
    mounted() {
        this.sum = this.twoSum([2, 7, 9, 12, 11, 16], 11)
    },
    methods: {
        twoSum(nums, target) {
            const map = new Map();
            for(let i=0;i<nums.length;i++) {
                const diff = target - nums[i];
                if(map.has(diff)) {
                    return [map.get(diff), i]
                }
                map.set(nums[i], i)
            }
        }
    },
    render() {
        const {sum} = this;
        return (
            <div class='wrapper'>{JSON.stringify(sum)}</div>
        )
    }
}
</script>
<style lang='less' scoped>
    .wrapper{
        width: 100%;
        height: 100%;
    }
</style>