<template>

  <div class="page">
    <RouterView />
  </div>

  <Tabbar
      v-if="showTabbar"
  route
  >
  <TabbarItem to="/" icon="home-o">
    活动列表
  </TabbarItem>
  <TabbarItem to="/my" icon="records-o">
    我的报名
  </TabbarItem>
  </Tabbar>

</template>

<script setup>
import { Tabbar, TabbarItem } from 'vant'
import { useRoute } from 'vue-router'
const route = useRoute()

import { computed } from 'vue'
const showTabbar = computed(() => {
  return route.path === '/' || route.path === '/my'
})
</script>

<style scoped>

.page{
  padding-bottom: 60px;
}

</style>
