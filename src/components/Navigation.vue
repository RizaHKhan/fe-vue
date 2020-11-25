<template>
<div class="navigation">
  <div class="navigation__logo">Scrapper Pro</div>
  <ul class="navigation__menu">
    <li class="navigation__menu--item" v-for="(button, index) in buttonsArray" :key="index"><Button @handle-click="handleAction" :config="button"/></li>
  </ul>
</div>
</template>

<script>
import Button from '@/components/global/Button'

export default {
  components: {
    Button
  },
  data() {
    return {
      admin: null
    }
  },
  computed: {
    buttonsArray() {
      const buttons = []

      buttons.push({
        text: 'Dashboard',
        color: 'red',
        action: 'dashboard',
      })

      buttons.push({
        text: 'Services',
        color: 'yellow',
        action: 'services',
      })

      buttons.push({
        text: 'Logout',
        color: 'blue',
        action: 'logout',
      })

      return buttons
    }
  },
  methods: {
    handleAction(action) {
      console.log(action)
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  display: grid;
  grid-template-columns: 300px 1fr;
  border: solid 1px red;

  &__logo {
    font-size: 3rem;
  }

  &__menu {
    display: grid;
    grid-gap: 5px;
    grid-auto-flow: column;
    justify-content: flex-end;

     &--item {
      list-style: none;
      margin: auto 0;
    }
  }
}
</style>
