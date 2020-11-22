<template>
  <Loading v-if="loading"/>
  <router-view/>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import Loading from '@/components/Loading.vue'

export default {
  components: {
    Loading
  },
  async created() {
    const token = localStorage.getItem("scrapper-pro-token")

    if (!token) {
      this.updateUserState({})
      this.$router.push('/')
    } else {
      this.checkToken(token).then((data) => {
        this.$router.push(`/${data}`);
      })
    }
  },
  computed: {
    ...mapGetters({
      loading: 'ui/getLoadingState'
    })
  },
  methods: {
    ...mapMutations({
      updateLoading: 'ui/updateLoading',
      updateUserState: 'user/updateUserState'
    }),
    ...mapActions({
      checkToken: 'user/checkToken',
    }),
  },
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;0,900;1,400;1,500&display=swap');

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
}

</style>