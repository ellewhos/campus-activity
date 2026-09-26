<template>
  <div class="success-page">
    <Icon
        class="success-icon"
        name="checked"
        size="64"
        color="#07c160"
    />
  <h1>报名成功</h1>
  <p>您的报名已保存</p>

  <Button
      type="primary"
      block
      @click="goMyApply"
  >
    查看我的报名
  </Button>
  <Button
      type="default"
      block
      @click="goHome"
  >
    返回活动列表
  </Button>
    </div>
</template>

<script setup>
import  {Icon, Button} from 'vant'
import { useRouter } from 'vue-router'
const router = useRouter()
const goMyApply = () => {
  router.push({ name: 'MyApply' })
}
const goHome = () => {
  router.push({ name: 'ActivityList' })
}
</script>

<style scoped>
.success-page {
  padding: 40px 20px;
  text-align: center;
}
.success-page .van-button {
  margin-top: 12px;
}

.success-icon {
  margin-bottom: 12px;
}
</style>