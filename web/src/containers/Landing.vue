<template lang="html">
  <div class="join">
    <div class="link-actions">
      <router-link to="/join">Join</router-link>
      <!-- <router-link to="/">Home</router-link> -->
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'landing',

  beforeRouteEnter(to, from, next) {
    store.dispatch('checkUserToken')
    .then(() => {
      next({
        path: from.fullPath,
      })
    })
    .catch(() => {
      next()
    })
  },
};
</script>

<style lang="scss">
.login {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
}
</style>
