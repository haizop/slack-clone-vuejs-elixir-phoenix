import localforage from 'localforage'
import { Presence } from 'phoenix'
import { isEmpty } from 'lodash'
import { http } from 'plugins/http'
import { getData } from 'utils/get'
import * as TYPES from '../types'

export const connectToChain = ({ dispatch }, payload) =>
  http.post('/getProfile', payload)
  .then(getData)
  .then(({ data }) => {
    dispatch('setUser', data)
    dispatch('fetchUserRooms', data.id)
    return data // keep promise chain
  })
  .catch(() => {
    dispatch('logOut')
    return Promise.reject('FAIL_IN_LOAD_USER') // keep promise chain
  })

export const joinChain = ({ dispatch }, payload) =>
  http.post('/authAgent', payload)
  .then(getData)
  .then(({ data }) => {
    dispatch('setUser', data)
    dispatch('fetchUserRooms', data.id)
    return data // keep promise chain
  })

export const logout = ({ dispatch }) =>
  http.delete('/sessions')
  .then(() => {
    dispatch('unauthenticate')
  })

export const checkUsername = ({ dispatch, state }) => {
  if (!isEmpty(state.session.currentUser.username)) {
    return Promise.resolve(state.session.currentUser.username)
  }
  return Promise.reject('NO_USERNAME') // Reject promise
  .then(() => dispatch('connectToChain'))
}

export const syncPresentUsers = ({ commit }, presences) => {
  const presentUsers = [];
  Presence.list(presences, (id, { metas: [first] }) => first.user)
          .map(user => presentUsers.push(user))
  commit(TYPES.ROOM_PRESENCE_UPDATE, presentUsers)
}

export const setUser = ({ commit }, user) => {
  // Commit the mutations
  commit(TYPES.CONNECTED_TO_CHAIN, user)
  return Promise.resolve(user)  // keep promise chain
}

export const logOut = ({ commit }) => commit(TYPES.LOGOUT)

//
// export const checkUsername = ({ dispatch, state }) => {
//   if (!isEmpty(state.token)) {
//     return Promise.resolve(state.token)
//   }
//
//   return localforage.getItem('token')
//     .then((token) => {
//       if (isEmpty(token)) {
//         // Token is not saved in localstorage
//         return Promise.reject('NO_TOKEN') // Reject promise
//       }
//
//       // Put the token in the vuex store
//       return dispatch('setToken', token) // keep promise chain
//     })
//     // With the token in hand, retrieves the user's data, validating the token
//     .then(() => dispatch('authenticate'))
// }
