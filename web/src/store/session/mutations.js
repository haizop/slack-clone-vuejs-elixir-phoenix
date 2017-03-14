import * as TYPES from '../types'

/* eslint-disable no-param-reassign */
export default {
  [TYPES.CONNECTED_TO_CHAIN](state, value) {
    state.currentUser = value
  },
  [TYPES.LOGOUT](state) {
    // state.isAuthenticated = false
    state.currentUser = {}
    // state.token = null
    state.socket = null
  },
  [TYPES.SOCKET_CONNECTED](state, value) {
    state.socket = value
  },
}
