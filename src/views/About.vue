<template>
  <div class="about-page">
    <nav class="navbar">
      <div class="nav-content">
        <h2 class="nav-logo">我的網站</h2>
        <div class="nav-links">
          <router-link v-if="!authStore.isLoggedIn" to="/login" class="nav-link">登入</router-link>
          <router-link v-if="authStore.isLoggedIn" to="/welcome" class="nav-link">歡迎頁</router-link>
          <button v-if="authStore.isLoggedIn" @click="handleLogout" class="logout-button">登出</button>
        </div>
      </div>
    </nav>
    
    <div class="about-content">
      <div class="about-header">
        <h1 class="about-title">關於我們</h1>
        <p class="about-subtitle">打造優質的網路服務體驗</p>
      </div>

      <div class="about-sections">
        <section class="about-section">
          <div class="section-icon">🎯</div>
          <h2>我們的使命</h2>
          <p>
            致力於提供最優質的網路服務，讓每一位使用者都能享受到便捷、安全且高效的數位體驗。
            我們相信科技應該簡化生活，而不是使其複雜化。
          </p>
        </section>

        <section class="about-section">
          <div class="section-icon">💡</div>
          <h2>核心價值</h2>
          <p>
            創新、誠信、專業是我們的核心價值觀。我們不斷追求技術創新，
            以最高的專業標準為客戶提供服務，並始終保持誠信的商業道德。
          </p>
        </section>

        <section class="about-section">
          <div class="section-icon">🚀</div>
          <h2>技術優勢</h2>
          <p>
            採用最新的 Vue 3 與 Vite 技術棧，搭配 SCSS 樣式預處理器，
            打造快速、現代化的網頁應用程式。我們的解決方案兼顧效能與使用者體驗。
          </p>
        </section>

        <section class="about-section">
          <div class="section-icon">🤝</div>
          <h2>聯絡我們</h2>
          <p>
            如有任何問題或建議，歡迎隨時與我們聯繫。我們的團隊將竭誠為您服務，
            確保您獲得最佳的使用體驗。
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.about-page {
  min-height: 100vh;
  background: $background-color;
}

.navbar {
  background: white;
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

.about-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: $spacing-xl $spacing-md;
}

.about-header {
  text-align: center;
  margin-bottom: $spacing-xl;
}

.about-title {
  font-size: 3rem;
  color: $primary-color;
  margin-bottom: $spacing-sm;
}

.about-subtitle {
  font-size: 1.3rem;
  color: $text-light;
}

.about-sections {
  display: grid;
  gap: $spacing-lg;
}

.about-section {
  background: white;
  padding: $spacing-lg;
  border-radius: $border-radius-lg;
  box-shadow: $shadow-sm;
  transition: transform $transition-normal, box-shadow $transition-normal;

  &:hover {
    transform: translateY(-4px);
    box-shadow: $shadow-md;
  }

  .section-icon {
    font-size: 3rem;
    margin-bottom: $spacing-md;
  }

  h2 {
    font-size: 1.8rem;
    color: $primary-color;
    margin-bottom: $spacing-md;
  }

  p {
    color: $text-light;
    font-size: 1.1rem;
    line-height: 1.8;
  }
}
</style>
