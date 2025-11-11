<template>
  <div class="welcome-page">
    <nav class="navbar">
      <div class="nav-content">
        <h2 class="nav-logo">我的網站</h2>
        <div class="nav-links">
          <router-link to="/about" class="nav-link">關於我們</router-link>
          <button @click="handleLogout" class="logout-button">登出</button>
        </div>
      </div>
    </nav>
    
    <div class="welcome-content">
      <div class="welcome-card">
        <div class="welcome-icon">👋</div>
        <h1 class="welcome-title">歡迎，{{ authStore.username }}！</h1>
        <p class="welcome-message">
          您已成功登入系統。這是您的專屬歡迎頁面。
        </p>
        <div class="welcome-stats">
          <div class="stat-card">
            <div class="stat-value">{{ currentDate }}</div>
            <div class="stat-label">今天日期</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">{{ currentTime }}</div>
            <div class="stat-label">目前時間</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const currentDate = ref('')
const currentTime = ref('')
let timer = null

const updateDateTime = () => {
  const now = new Date()
  currentDate.value = now.toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  currentTime.value = now.toLocaleTimeString('zh-TW', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}

onMounted(() => {
  updateDateTime()
  timer = setInterval(updateDateTime, 1000)
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<style lang="scss" scoped>
.welcome-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.navbar {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: $shadow-sm;
  padding: $spacing-md 0;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 $spacing-md;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  color: $primary-color;
  font-size: 1.5rem;
  font-weight: 700;
}

.nav-links {
  display: flex;
  gap: $spacing-md;
  align-items: center;
}

.nav-link {
  color: $text-color;
  font-weight: 500;
  padding: $spacing-xs $spacing-sm;
  border-radius: $border-radius-sm;

  &:hover {
    background: rgba($primary-color, 0.1);
  }
}

.logout-button {
  background: $error-color;
  color: white;
  padding: $spacing-xs $spacing-md;
  border-radius: $border-radius-md;
  font-weight: 500;

  &:hover {
    background: darken($error-color, 10%);
  }
}

.welcome-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  padding: $spacing-lg;
}

.welcome-card {
  background: $card-background;
  border-radius: $border-radius-lg;
  box-shadow: $shadow-lg;
  padding: $spacing-xl;
  max-width: 600px;
  width: 100%;
  text-align: center;
}

.welcome-icon {
  font-size: 4rem;
  margin-bottom: $spacing-md;
}

.welcome-title {
  font-size: 2.5rem;
  color: $primary-color;
  margin-bottom: $spacing-md;
}

.welcome-message {
  color: $text-light;
  font-size: 1.1rem;
  margin-bottom: $spacing-xl;
  line-height: 1.8;
}

.welcome-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: $spacing-md;
  margin-top: $spacing-lg;
}

.stat-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: $spacing-md;
  border-radius: $border-radius-md;
  color: white;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: $spacing-xs;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.9;
}
</style>
