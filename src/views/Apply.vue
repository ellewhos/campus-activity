<template>

  <NavBar
      title="活动报名"
      left-text="返回"
      left-arrow
      @click-left="router.back()"
  />

  <div class="apply-page" v-if="activity">
    <p>活动名称：{{ activity.name }}</p>
    <Form @submit="submitApply">
      <Field
      v-model="name"
      label="姓名"
      placeholder="请输入姓名"
      />
      <Field
      v-model="studentId"
      label="学号"
      placeholder="请输入学号"
      />
      <Field
      v-model="phone"
      label="手机号"
      placeholder="请输入手机号"
      type="tel"
      />
      <Button
          type="primary"
          native-type="submit"
          block
      >
        提交报名
      </Button>
    </Form>
  </div>
  <div v-else>
    活动不存在
  </div>

</template>

<script setup>
import activities from '../data/activities.js'
import { ref } from 'vue'
import { useRegistrationStore } from '../stores/registration.js'
import { useRoute, useRouter } from 'vue-router'
import { Form, Field, Button, NavBar,showToast } from 'vant'

const route = useRoute()
const router = useRouter()

const id = Number(route.params.id)

const activity = activities.find(activity => {
  return activity.id === id
})

const name = ref('')
const studentId = ref('')
const phone = ref('')
const registrationStore = useRegistrationStore()

const submitApply = () => {
  if (!name.value || !studentId.value || !phone.value) {
    showToast('请填写完整信息')
    return
  }
const phonePattern = /^1[3-9]\d{9}$/
if(!phonePattern.test(phone.value)) {
  showToast('手机号格式错误')
  return
}
  const alreadyRegistered = registrationStore.registrations.some(registration => {
    return registration.activityId === activity.id && registration.studentId === studentId.value
  })
  if(alreadyRegistered) {
    showToast('您已报名该活动')
    return
  }
  const registeredCount = registrationStore.registrations.filter(registration => {
    return registration.activityId === activity.id
  }).length
  if(registeredCount >= activity.capacity){
    showToast('该活动已报名满')
    return
  }
  const registration ={
    activityId:activity.id,
    activityName:activity.name,
    name: name.value,
    studentId: studentId.value,
    phone: phone.value,
  }
  registrationStore.addRegistration(registration)
  router.push({ name: 'Success' })
}

</script>

<style scoped>
.apply-page {
  padding: 12px;
}
</style>