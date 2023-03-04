<template>
  <div class="page">
    <div class="login-box">
      <div class="login-box-header">
        <img src="@/assets/login-header7.png" alt="" />
      </div>
      <div class="login-form-box">
        <div class="avatar-box">
          <img class="avatar" src="@/assets/face.png" alt="" />
        </div>
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="100px"
          label-position="left"
          class="demo-ruleForm"
        >
          <el-form-item label="UserName" prop="username">
            <el-input v-model="ruleForm.username" type="password" autocomplete="off" />
          </el-form-item>
          <el-form-item label="Password" prop="pass">
            <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
          </el-form-item>
          <el-form-item label-width="auto">
            <div class="button-box">
              <el-button size="large" type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
              <el-button size="large" @click="resetForm(ruleFormRef)">Reset</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { loginStore } from '@/store/login'
import { onMounted, ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const ruleForm = reactive({
  username: '',
  pass: '',
})
const stores = loginStore()
const { isRepeatUsername } = storeToRefs(stores)

const handleClickLogin = () => {
  isRepeatUsername.value = !isRepeatUsername.value
}
const getRequestPassport = async () => {
  try {
    await stores.getRequestPassport('immoc')
  } catch (error) {}
}
const ruleFormRef = ref<FormInstance>()

const validateUsername = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the username'))
  } else {
    callback()
  }
}
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    callback()
  }
}
const rules = reactive<FormRules>({
  username: [{ validator: validatePass, trigger: 'blur' }],
  pass: [{ validator: validateUsername, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
onMounted(() => {
  getRequestPassport()
})
</script>
<style scoped lang="scss">
.page {
  width: 100vw;
  height: 100vh;
  background: url('@/assets/bg.jpg');
  display: flex;
  align-items: center;
  justify-content: center;

  .login-box {
    width: 430px;
    background: #fff;

    .login-box-header {
      width: 100%;

      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }
    .login-form-box {
      box-sizing: border-box;
      width: 100%;
      padding: 40px;
      padding-top: 100px;
      position: relative;

      .avatar-box {
        position: absolute;
        width: 100px;
        height: 100px;
        border: 4px solid #fff;
        border-radius: 50%;
        top: -50px;
        right: calc(50% - 50px);
        overflow: hidden;

        .avatar {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .button-box {
        margin: 0 auto;
      }
    }
  }
}
</style>
