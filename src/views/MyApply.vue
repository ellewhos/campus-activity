<template>
  <NavBar
      title="我的报名"/>

  <div v-if="registrationStore.registrations.length > 0">
    <Card
        v-for="(registration, index) in registrationStore.registrations"
        :key="index"
        :title="registration.activityName"
    >
      <template #desc>
        <p>姓名：{{ registration.name }}</p>
        <p>学号：{{ registration.studentId }}</p>
        <p>手机号：{{ formatPhone(registration.phone) }}</p>
      </template>
      <template #footer>
        <Button
            type="danger"
            size="small"
            @click="cancelRegistration(index)"
        >
          取消报名
        </Button>
      </template>
    </Card>
  </div>
  <Empty v-else description="暂无报名" />


</template>

<script setup>
import { useRegistrationStore } from '../stores/registration.js'
import {Card, Button, showConfirmDialog, NavBar, Empty} from 'vant'
const registrationStore = useRegistrationStore()

const cancelRegistration = (index) => {
  showConfirmDialog({
    title: '取消报名',
    message: '确认取消报名吗'
  }).then(() => {
    registrationStore.removeRegistration(index)
  })
      .catch(() => {
        // 取消操作
      })
}

const formatPhone = (phone) => {
  return `${phone.slice(0, 3)}****${phone.slice(-4)}`
}
</script>

<style scoped>

</style>