import store from '../store'

const needAuth = auth => auth === true

const beforeEach = (to, from, next) => {
  const requiresJoin = !(to.meta.requiresJoin === false) // default true

  if (!needAuth(requiresJoin)) {
    next()
    return // return to prevent the code from continuing in its flow
    // With this flow `else` or `else if` is not necessary
  }

  store.dispatch('checkUsername')
  .then(() => {
    next()
  })
  .catch(() => {
    next('/join')
  })
}

export default beforeEach
