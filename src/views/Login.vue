<template>
  <div class="login-page">
    <div class="login-card">
      <h1 class="login-title">登入</h1>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="username">使用者名稱</label>
          <input
            id="username"
            v-model="formData.username"
            type="text"
            placeholder="請輸入使用者名稱"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">密碼</label>
          <input
            id="password"
            v-model="formData.password"
            type="password"
            placeholder="請輸入密碼"
            required
          />
        </div>
        <button type="submit" class="login-button">登入</button>
      </form>
      <div class="login-footer">
        <router-link to="/about">關於我們</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const formData = ref({
  username: '',
  password: ''
})

const handleLogin = () => {
  if (formData.value.username && formData.value.password) {
    authStore.login(formData.value.username)
    router.push('/welcome')
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: $spacing-md;
}

.login-card {
  background: $card-background;
  border-radius: $border-radius-lg;
  box-shadow: $shadow-md;
  padding: $spacing-xl;
  width: 100%;
  max-width: 400px;
}

.login-title {
  font-size: 2rem;
  color: $primary-color;
  margin-bottom: $spacing-lg;
  text-align: center;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: $spacing-md;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: $spacing-xs;

  label {
    font-weight: 500;
    color: $text-color;
    font-size: 0.9rem;
  }

  input {
    padding: $spacing-sm;
    border: 1px solid $border-color;
    border-radius: $border-radius-md;
    font-size: 1rem;
    transition: border-color $transition-fast;

    &:focus {
      border-color: $primary-color;
    }

    &::placeholder {
      color: #aaa;
    }
  }
}

.login-button {
  background: $primary-color;
  color: white;
  padding: $spacing-sm $spacing-lg;
  border-radius: $border-radius-md;
  font-size: 1rem;
  font-weight: 600;
  margin-top: $spacing-sm;

  &:hover {
    background: darken($primary-color, 10%);
  }

  &:active {
    transform: scale(0.98);
  }
}

.login-footer {
  margin-top: $spacing-md;
  text-align: center;
  padding-top: $spacing-md;
  border-top: 1px solid $border-color;
}
</style>
