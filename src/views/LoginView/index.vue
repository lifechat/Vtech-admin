<template>
  <div class="login-page">
    <div class="login-box">
      <div class="login-bg1"></div>
      <div class="login-bg2"></div>
      <div class="login-form-box">
        <h3 class="login-title">出彩智能后台管理系统</h3>
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="80px"
          label-position="left"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="username">
            <el-input
              v-model.trim="ruleForm.username"
              class="login-input"
              text
              clearable
              placeholder="请输入您的用户名"
              autocomplete="off"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input
              v-model.trim="ruleForm.pass"
              class="login-input"
              placeholder="请输入您的密码"
              show-password
              clearable
              autocomplete="off"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code" class="validCode">
            <el-col :span="15">
              <el-input
                v-model.trim="ruleForm.code"
                class="login-input"
                placeholder="输入验证码"
                maxlength="4"
                clearable
                autocomplete="off"
              >
              </el-input>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="8">
              <div class="img-box">
                <img
                  style="height: 38px; cursor: pointer; vertical-align: middle"
                  :src="codeUrl"
                  @click="getLoginValidCode"
                />
              </div>
            </el-col>
          </el-form-item>
          <el-button class="login-btn" size="large" type="primary" @click="submitForm(ruleFormRef)"
            >登录</el-button
          >
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { loginStore } from '@/store/login'
import { onMounted, ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
import { requestCodeImg } from '@/api/login'
import { getToken } from '@/utils/common/auth'

let captchaEnabled = ref<boolean>(true)
let codeUrl = ref<any>('')

const ruleForm = reactive({
  username: '',
  pass: '',
  code: '',
  uuid: '',
})
const stores = loginStore()
const route = useRoute()
const router = useRouter()

const getRequestLogin = () => {
  const params = {
    username: ruleForm.username,
    password: ruleForm.pass,
    code: ruleForm.code,
    uuid: ruleForm.uuid,
  }
  stores.getLoginInfo(params)
}

const getLoginValidCode = async () => {
  const res = await requestCodeImg()
  captchaEnabled.value = res.captchaEnabled === undefined ? true : res.captchaEnabled
  if (captchaEnabled.value) {
    codeUrl.value = 'data:image/gif;base64,' + res.img
    ruleForm.uuid = res.uuid
  }
}
const ruleFormRef = ref<FormInstance>()

const validateUsername = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入你的用户名'))
  } else {
    callback()
  }
}
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入你的密码'))
  } else {
    callback()
  }
}

const validateCode = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入你的验证码'))
  } else {
    callback()
  }
}

const rules = reactive<FormRules>({
  username: [{ validator: validateUsername, trigger: 'blur' }],
  pass: [{ validator: validatePass, trigger: 'blur' }],
  code: [{ validator: validateCode, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      getRequestLogin()
      router.push('/')
    }
  })
}

onMounted(() => {
  getLoginValidCode()
})
</script>
<style scoped lang="scss">
.login-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: url('@/assets/sky-bg.png') no-repeat center/100% 100%;
  position: relative;
  .login-box {
    width: 660px;
    height: 660px;
    background: url('@/assets/login1.png') no-repeat center/100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .login-bg1 {
      width: 558px;
      height: 558px;
      background: url('@/assets/login2.png') no-repeat center/100% 100%;
      position: absolute;
      background-color: rgb(24, 74, 155, 0.3);
      border-radius: 558px;
    }

    .login-bg2 {
      width: 700px;
      height: 700px;
      background: url('@/assets/login3.png') no-repeat center/100% 100%;
      position: absolute;
    }

    .login-form-box {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .login-btn {
        width: 100%;
        font-size: 20px;
        border-radius: 48px;
        margin-top: 30px;
        background: linear-gradient(-90deg, #2155ff 0%, #008dff 100%);
      }
      .login-input {
        :v-deep(.el-input__inner) {
        }
      }
    }

    .login-title {
      font-weight: bold;
      font-size: 28px;
      font-family: Microsoft YaHei;
      color: #fff;
      background: linear-gradient(180deg, #ffff 0%, #90ccff 49.4873046875%, #0154d5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 35px;
    }
  }
}
:v-deep(.el-el-input__wrapper) {
  border: none;
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.5) !important;
  width: 334px;
  height: 43px;
  color: #fff;
  padding-left: 56px;
}

:v-deep(.el-input__prefix) {
  font-size: 20px;
  margin-left: 10px;
}
</style>
