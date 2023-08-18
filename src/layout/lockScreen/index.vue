<template>
  <div v-show="state.isShowLockScreen">
    <div class="layout-lock-screen-mask">锁屏</div>
    <div
      class="layout-lock-screen-img"
      :class="{ 'layout-lock-screen-filter': state.isShowLoockLogin }"
    ></div>
    <div class="layout-lock-screen">
      <div
        ref="layoutLockScreenDateRef"
        class="layout-lock-screen-date"
        @mousedown="onDownPc"
        @mousemove="onMovePc"
        @mouseup="onEnd"
        @touchstart.stop="onDownApp"
        @touchmove.stop="onMoveApp"
        @touchend.stop="onEnd"
      >
        <div class="layout-lock-screen-date-box">
          <div class="layout-lock-screen-date-box-time">
            {{ state.time.hm }}<span class="layout-lock-screen-date-box-minutes">{{ state.time.s }}</span>
          </div>
          <div class="layout-lock-screen-date-box-info">{{ state.time.mdq }}</div>
        </div>
        <div class="layout-lock-screen-date-top">
          <el-icon><Top /></el-icon>
          <div class="layout-lock-screen-date-top-text">上滑解锁</div>
        </div>
      </div>
      <transition name="el-zoom-in-center">
        <div v-show="state.isShowLoockLogin" class="layout-lock-screen-login">
          <div class="layout-lock-screen-login-box">
            <div class="layout-lock-screen-login-box-img">
              <img
                src="https://img2.baidu.com/it/u=1978192862,2048448374&fm=253&fmt=auto&app=138&f=JPEG?w=504&h=500"
              />
            </div>
            <div class="layout-lock-screen-login-box-name">Administrator</div>
            <div class="layout-lock-screen-login-box-value">
              <el-input
                ref="layoutLockScreenInputRef"
                v-model="state.lockScreenPassword"
                placeholder="请输入密码"
                @keyup.enter.native.stop="onLockScreenSubmit()"
              >
                <template #append>
                  <el-button @click="onLockScreenSubmit()">
                    <el-icon class="el-input__icon">
                      <CircleCheckFilled />
                    </el-icon>
                  </el-button>
                </template>
              </el-input>
            </div>
          </div>
          <div class="layout-lock-screen-login-icon">
            <el-icon :size="20"><Microphone /></el-icon>
            <el-icon :size="20"><AlarmClock /></el-icon>
            <el-icon :size="20"><SwitchButton /></el-icon>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import { formatDate } from '@/utils/common/common'
import { nextTick, onMounted, reactive, ref, onUnmounted } from 'vue'

// 定义变量内容
const layoutLockScreenDateRef = ref<HtmlType>()
const state = reactive({
  transparency: 1,
  downClientY: 0,
  moveDifference: 0,
  isShowLoockLogin: true,
  isFlags: false,
  querySelectorEl: '' as HtmlType,
  time: {
    hm: '',
    s: '',
    mdq: '',
  },
  setIntervalTime: 0,
  isShowLockScreen: true,
  isShowLockScreenIntervalTime: 0,
  lockScreenPassword: '',
})
onMounted(() => {
  console.log('页面加载')
})

const onDownPc = () => {
  console.log(123)
}

const onDownApp = () => {
  console.log(123)
}

const onMovePc = () => {
  console.log(123)
}

const onMoveApp = () => {
  console.log(123)
}

const onMove = () => {
  console.log(123)
}

const initGetElement = () => {
  nextTick(() => {
    state.querySelectorEl = layoutLockScreenDateRef.value
  })
}

const initTime = () => {
  state.time.hm = formatDate(new Date(), 'HH:MM')
  state.time.s = formatDate(new Date(), 'SS')
  state.time.mdq = formatDate(new Date(), 'mm月dd日，WWW')
}

const initSetTime = () => {
  initTime()
  state.setIntervalTime = window.setInterval(() => {
    initTime()
  }, 1000)
}
const initLockScreen = () => {
  console.log(123)
}
const onLockScreenSubmit = () => {
  console.log('解鎖')
}
const onEnd = () => {
  initGetElement()
  initSetTime()
}
onUnmounted(() => {
  window.clearInterval(state.setIntervalTime)
  window.clearInterval(state.isShowLockScreenIntervalTime)
})
</script>
<style scoped lang="scss">
.layout-lock-screen-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.layout-lock-screen-filter {
  filter: blur(1px);
}
.layout-lock-screen-mask {
  background: var(--el-color-white);
  @extend .layout-lock-screen-fixed;
  z-index: 9999990;
}
.layout-lock-screen-img {
  @extend .layout-lock-screen-fixed;
  background-image: url('https://i.hd-r.cn/e4a19d84364f185266666765ac21a5db.jpg');
  background-size: 100% 100%;
  z-index: 9999991;
}
.layout-lock-screen {
  @extend .layout-lock-screen-fixed;
  z-index: 9999992;
  &-date {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: var(--el-color-white);
    z-index: 9999993;
    user-select: none;
    &-box {
      position: absolute;
      left: 30px;
      bottom: 50px;
      &-time {
        font-size: 100px;
        color: var(--el-color-white);
      }
      &-info {
        font-size: 40px;
        color: var(--el-color-white);
      }
      &-minutes {
        font-size: 16px;
      }
    }
    &-top {
      width: 40px;
      height: 40px;
      line-height: 40px;
      border-radius: 100%;
      border: 1px solid var(--el-border-color-light, #ebeef5);
      background: rgba(255, 255, 255, 0.1);
      color: var(--el-color-white);
      opacity: 0.8;
      position: absolute;
      right: 30px;
      bottom: 50px;
      text-align: center;
      overflow: hidden;
      transition: all 0.3s ease;
      i {
        transition: all 0.3s ease;
      }
      &-text {
        opacity: 0;
        position: absolute;
        top: 150%;
        font-size: 12px;
        color: var(--el-color-white);
        left: 50%;
        line-height: 1.2;
        transform: translate(-50%, -50%);
        transition: all 0.3s ease;
        width: 35px;
      }
      &:hover {
        border: 1px solid rgba(255, 255, 255, 0.5);
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 0 12px 0 rgba(255, 255, 255, 0.5);
        color: var(--el-color-white);
        opacity: 1;
        transition: all 0.3s ease;
        i {
          transform: translateY(-40px);
          transition: all 0.3s ease;
        }
        .layout-lock-screen-date-top-text {
          opacity: 1;
          top: 50%;
          transition: all 0.3s ease;
        }
      }
    }
  }
  &-login {
    position: relative;
    z-index: 9999994;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--el-color-white);
    &-box {
      text-align: center;
      margin: auto;
      &-img {
        width: 180px;
        height: 180px;
        margin: auto;
        img {
          width: 100%;
          height: 100%;
          border-radius: 100%;
        }
      }
      &-name {
        font-size: 26px;
        margin: 15px 0 30px;
      }
    }
    &-icon {
      position: absolute;
      right: 30px;
      bottom: 30px;
      i {
        font-size: 20px;
        margin-left: 15px;
        cursor: pointer;
        opacity: 0.8;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
:deep(.el-input-group__append) {
  background: var(--el-color-white);
  padding: 0px 15px;
}
:deep(.el-input__inner) {
  border-right-color: var(--el-border-color-extra-light);
  &:hover {
    border-color: var(--el-border-color-extra-light);
  }
}
</style>
