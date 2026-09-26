<template>

  <NavBar title="校园活动" />

  <Tabs v-model:active="activeStatus">
    <Tab title="全部" name="all" />
    <Tab title="报名中" name="available" />
    <Tab title="已满员" name="full" />
  </Tabs>

  <Search v-model="searchKeyword" placeholder="搜索活动" />

   <Card v-for="activity in filteredActivities"
        :key="activity.id"
        :title="activity.name"
        :desc="`${activity.date} · ${activity.location}`"
  >
     <template #tags>
  <span>
    已报名 {{ getRegisteredCount(activity.id) }} / {{ activity.capacity }}
  </span>

       <Tag
           class="status-tag"
           v-if="getRegisteredCount(activity.id) < activity.capacity"
           type="success"
       >
         报名中
       </Tag>

       <Tag
           class="status-tag"
           v-else
           type="danger"
       >
         已满员
       </Tag>
     </template>

    <template #footer>
    <Button type="primary"
            size="small"
            @click="goDetail(activity.id)"
    >
      查看详情
    </Button>
    </template>
  </Card>

  <div v-if="filteredActivities.length === 0">
    暂无符合条件的活动
  </div>

</template>

<script setup>
import activities from '../data/activities.js'
import { Card, Button, Tag, Tabs, Tab, Search, NavBar } from 'vant'
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'

const router = useRouter()

const goDetail = (id) => {
  router.push({ name: 'ActivityDetail', params: { id } })
}

import { useRegistrationStore } from '../stores/registration.js'
const registrationStore = useRegistrationStore()
const getRegisteredCount = (activityId) => {
  return registrationStore.registrations.filter(registration => {
    return registration.activityId === activityId
  }).length
}

const activeStatus = ref('all')
const searchKeyword = ref('')

const filteredActivities = computed(() => {
  let result = activities

  // if (activeStatus.value === 'all') {
  //   return activities
  // }
  if (activeStatus.value === 'available') {
    result = result.filter(activity => {
      return getRegisteredCount(activity.id) < activity.capacity
    })
  }
  if (activeStatus.value === 'full') {
    result = result.filter(activity => {
      return getRegisteredCount(activity.id) >= activity.capacity
    })
  }
  if (searchKeyword.value){
    result = result.filter(activity => {
      return activity.name.includes(searchKeyword.value)
    })
  }
  return result
})


</script>

<style scoped>
.status-tag {
  margin-left: 6px;
}
</style>