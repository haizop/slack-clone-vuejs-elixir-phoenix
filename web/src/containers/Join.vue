<template lang="html">
  <div class="signup">
    hello
    <signup-form :joinChain="joinChain"></signup-form>
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
.signup {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
}
</style>
