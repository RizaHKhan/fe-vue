<template>
  <div class="dashboard">
    <div class="scripts-container" v-if="scripts.length">
      <Script v-for="(script, index) in scripts" :key="index" :script="script"/>
    </div>
    <div v-else>
      <h1>No scripts available under this account</h1>
    </div>
  </div>
</template>

<script>
import axios from '@/services/axios.js'
import { mapGetters, mapMutations } from 'vuex'
import Script from '@/components/Script'

export default {
  components: { Script },
  async created() {
    this.updateLoading(true)
    try {
      const response = await axios.get("/api/scripts");
      this.updateScriptsState(response.data)
      this.updateLoading(false)
    } catch (e) {
      this.updateLoading(false)
    }
  },
  computed: {
    ...mapGetters({
      user: "user/getUserState",
      scripts: 'scripts/getScriptsState',
      loadingState: 'ui/getLoadingState'

    }),
  },
  methods: {
    ...mapMutations({
      updateUserState: 'user/updateUserState',
      updateScriptsState: 'scripts/updateScriptsState',
      updateLoading: 'ui/updateLoading'
    }),
  },
}
</script>

<style lang="scss" scoped>
.dashboard {
  padding: 2em;
}

.scripts-container {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

</style>