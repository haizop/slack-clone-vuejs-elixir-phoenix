<template lang="html">
  <form class="card card-login" @submit.prevent="joinChain">
    <h3 class="title">Welcome {{ email }}. Join the Holochat Holochain.</h3>
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" class="form-control" id="username" v-model="user.username">
    </div>
    <button class="btn btn-primary btn-block" type="submit">Join</button>
  </form>
</template>

<script>
export default {
  name: 'join-form',
  props: {
    email: {
      type: String,
      required: true,
    },
    joinChain: {
      type: Function,
      required: true,
    },
  },

  data() {
    return {
      user: {
        username: '',
      },
    }
  },

  methods: {
    submit() {
      const { user } = this
      this.joinChain({ user })
      .then(() => {
        this.$router.push({ name: 'home' })
      })
    },

    reset() {
      this.user.username = ''
    },
  },
};
</script>

<style lang="scss">
</style>
