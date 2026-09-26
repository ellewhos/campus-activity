<template>

<NavBar
    title="活动详情"
    left-text="返回"
    left-arrow
    @click-left="router.back()"
/>

<div class="detail-page" v-if="activity">
  <CellGroup>
    <Cell title="活动日期" :value="activity.date"/>
    <Cell title="活动地点" :value="activity.location"/>
    <Cell title="总名额" :value="activity.capacity"/>
    <Cell title="已报名" :value="`${registeredCount}/${activity.capacity}`"/>
    <Cell title="剩余名额" :value="remainingCapacity"/>
  </CellGroup>

  <Button
      type="primary"
      :disabled="remainingCapacity <= 0"
      @click="goApply"
  >立即报名
  </Button>
</div>
  <div v-else>活动不存在</div>

</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import activities from '../data/activities.js'
import { computed } from 'vue'
import { Cell, CellGroup, Button, NavBar } from 'vant'
import { useRegistrationStore } from '../stores/registration.js'

const route = useRoute()
const router = useRouter()

const id = Number(route.params.id)
console.log(route.params.id)

const activity = activities.find(activity => {
  return activity.id === id
})
console.log('id:', id)
console.log('activity:', activity)

const registrationStore = useRegistrationStore()
// 从所有 registrations 中 filter 出 registration.activityId
// 等于当前 activity.id 的报名记录，然后用 .length 得到数量。
const registeredCount = computed(() => {
  return registrationStore.registrations.filter(registration => {
    return registration.activityId === activity.id
  }).length
})


const remainingCapacity = computed(() => {
  return activity.capacity - registeredCount.value
})

const goApply = () => {
  router.push({ name: 'Apply', params: { id } })
}

</script>


<style scoped>
.detail-page {
  padding: 12px;
  text-align: center;
}
</style>