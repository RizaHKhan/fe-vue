<template>
  <div class="home">
    <div class="intro">
      <h1>Scrapper-Pro</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius alias doloremque esse! Voluptatibus iusto sapiente itaque. Cupiditate voluptas animi quasi?</p>
    </div>
    <form>
      <div class="post-type">
        <button @click.prevent="type = 'login'" class="type" :class="type === 'login' ? 'active' : ''">Login</button>
        <button @click.prevent="type = 'register'" class="type" :class="type === 'register' ? 'active' : ''">Register</button>
      </div>
      <label for="username">Username:</label>
      <input type="text" name="username" v-model="user.username">
      <label for="password">Password:</label>
      <input type="password" name="password" v-model="user.password">
      <button @click.prevent="sendRequest(type)" class="submit">{{ type }}</button>
    </form>
  </div>
</template>

<script>
import axios from '@/services/axios.js'
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    type: 'login',
    user: {
      username: '',
      password: ''
    }
  }),
  methods: {
    ...mapMutations({
      updateLoading: "ui/updateLoading",
      updateUserState: "user/updateUserState",
      getLoggedInState: "user/getLoggedInState"
    }),
    async sendRequest(type) {
      this.updateLoading(true)
      try {
        const response = await axios.post(`/api/${type}`, { username: this.user.username, password: this.user.password })
        // set token to local storage
        localStorage.setItem('scrapper-pro-token', response.data.token)
        this.updateUserState(response.data)
        this.updateLoading(false)
        this.$router.push(`/${response.data._id}`)
      } catch (error) {
        this.updateLoading(false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 779px) {
    grid-template-columns: 1fr;
  }
}

form {
  display: grid;
  grid-gap: 5px;

  .post-type {
    display: grid;
    grid-template-columns: 100px 100px;
    grid-gap: 5px;

    .type {
      border: 0;
      padding: 0.5rem;
    }

    .type.active {
      background: black;
      color: white;
    }
  }

  .submit {
    text-transform: uppercase;
    justify-self: end;
    width: 100px;
    border: 0;
    padding: 0.5rem;
    background: black;
    color: white;
  }
}
</style>