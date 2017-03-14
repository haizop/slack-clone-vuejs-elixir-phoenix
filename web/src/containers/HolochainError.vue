<template lang="html">
  <div class="holochain-error">
    Holochain broke. ¯\_(ツ)_/¯
    <div class="link-actions">
      <router-link to="/join">Join</router-link>
      <router-link to="/">Home</router-link>
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'holochain-error',
};
</script>

<style lang="scss">
.holochain-error {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
}
</style>
