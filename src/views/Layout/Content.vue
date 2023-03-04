<template>
  <div class="content-header">
    <div class="content-icon">
      <el-icon v-if="isClose" @click="change"> <Expand /> </el-icon>
      <el-icon v-else @click="change"> <Fold /> </el-icon>
    </div>

    <div class="content-right">
      <div class="content-right-time">{{ time }}</div>
      <div class="content-right-line">|</div>
      <div class="content-right-loginout">
        <el-icon @click="loginout"> <SwitchButton /> </el-icon>
      </div>
    </div>
  </div>
  <div class="content-wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'
export default {
  props: ['isClose'],
  emits: ['change'],
  setup(props, { emit }) {
    // 定义时间
    let time = ref(null)
    // 获取路由信息
    const router = useRouter()

    // 切换菜单icon切换，折叠展开
    const change = () => {
      emit('change')
    }

    // 退出登陆
    const loginout = () => {
      router.push('/login')
    }

    onMounted(() => {
      // 获取当前时间
      time.value = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
    })

    return { change, time, loginout }
  },
}
</script>

<style lang="less" scoped>
.content {
  &-header {
    height: 50px;
    line-height: 50px;
    background: #1e78bf;
    color: #fff;
    display: flex;
    justify-content: space-between;
    .icon {
      font-size: 24px;
      flex: 1;
      i {
        cursor: pointer;
      }
    }
  }

  &-right {
    padding-right: 20px;
    display: flex;
    align-items: center;
    &-time {
      font-size: 14px;
    }
    &-line {
      margin-right: 10px;
      margin-left: 10px;
      margin-bottom: 3px;
    }
    &-loginout {
      margin-top: 5px;
    }
  }
  &-wrapper {
    margin: 10px;
  }
}
</style>
