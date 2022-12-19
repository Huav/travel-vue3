<template>
    <div class="countDownBox">
        <div>支付时间剩余： <span class="timeSpan">{{ m }}</span>:<span class="timeSpan">{{ s }} ,超时订单会被自动取消</span>
        </div>
    </div>
</template>
<script>
export default {
    // time: '12:30',  notTimes: '10:48:07.911'
    data() {
        return {
            d: '00',
            h: '00',
            m: '00',
            s: '00',
            difference: 0,
            timess: null,
            flag: false,
           time: '00:15',  notTimes: ''
        }
    },
    watch: {
        time(val) {
            this.startTime()
            this.flag = false
            this.timeDown()
        }
    },
    created() {
        this.startTime()
        this.timeDown()
    },
    methods: {
        // 初始化时间
        startTime() {
            let nowTime = new Date()
            let Y = nowTime.getFullYear()
            let M = nowTime.getMonth() + 1
            let D = nowTime.getDate()
            let time = Y + '/' + M + '/' + D + ' ' + this.time + ':00'
            let nowTime2 = Y + '/' + M + '/' + D + ' ' + this.notTimes.split('.')[0]
            let beginTime = new Date(nowTime2)
            let endTime = new Date(time)
            this.difference = parseInt((endTime.getTime() - beginTime.getTime()) / 1000)
            if (this.difference === 0 || this.difference === -1) {
                this.$emit('timeEnd')
            }
        },
        // 倒计时
        timeDown() {
            // 切换清除之前的定时器
            clearInterval(this.timess)
            this.timess = setInterval(() => {
                if (this.flag === true) {
                    clearInterval(this.timess)
                }
                this.difference = this.difference - 1
                if (this.difference > 0) {
                    this.d = parseInt(this.difference / (60 * 60 * 24))
                    this.h = this.format(parseInt(this.difference / (60 * 60) % 24))
                    this.m = this.format(parseInt((this.difference / 60) % 60))
                    this.s = this.format(parseInt(this.difference % 60))
                } else {
                    this.d = '00'
                    this.h = '00'
                    this.m = '00'
                    this.s = '00'
                    this.flag = true
                }
            }, 1000)
        },
        // 时间格式
        format(time) {
            if (time >= 10) {
                return time
            } else {
                return `0${time}`
            }
        }
    }
}
</script>
<style  scoped>

</style>