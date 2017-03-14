<template lang="html">
  <div class="join">
    <join-form :joinChain="joinChain"></join-form>
    <div class="link-actions">
      <router-link to="/">Home</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import store from '../store'
import JoinForm from '../components/JoinForm'
import Navbar from '../components/Navbar'

export default {
  name: 'Join',

  beforeRouteEnter(to, from, next) {
    store.dispatch('checkUsername')
    .then(() => {
      next({
        path: from.fullPath,
      })
    })
    .catch(() => {
      next()
    })
  },

  methods: {
    ...mapActions(['joinChain']),
  },

  components: {
    JoinForm,
    Navbar,
  },
};
</script>

<style lang="scss">
.join {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
}
</style>
