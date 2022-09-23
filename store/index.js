import Cookies from 'js-cookie'
import parseCookie from '~/utils.js'

export const actions = {
  async fetchPosts(ctx) {
    await fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => ctx.commit('updatePosts', json))
  },
  async fetchUsers(ctx) {
    await this.$axios.$get('/api/users').then((users) => {
      ctx.commit('updateUsers', users)
    })
  },
  login(ctx, userData) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post('/api/login', userData)
        .then((userData) => {
          ctx.commit('setAuthData', userData)
          for (const prop in userData) {
            Cookies.set(prop, userData[prop])
          }
          resolve(true)
        })
        .catch((error) => {
          if (error) {
            if (error.response) {
              if (error.response.data) {
                if (error.response.data.message)
                  reject(error.response.data.message)
              }
            }
          }
        })
    })
  },
  signup(ctx, userData) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post('/api/signup', userData)
        .then((userData) => {
          ctx.commit('setAuthData', userData)
          for (const prop in userData) {
            Cookies.set(prop, userData[prop])
          }
          resolve(true)
        })
        .catch((error) => {
          if (error) {
            if (error.response) {
              if (error.response.data) {
                if (error.response.data.message)
                  reject(error.response.data.message)
              }
            }
          }
        })
    })
  },

  logout(ctx) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post('/api/logout', {
          refreshToken: ctx.state.authData.refreshToken,
        })
        .then(() => {
          try {
            for (const prop in ctx.state.authData) {
              Cookies.remove(prop)
            }
            ctx.commit('clearAuthData')
            resolve(true)
          } catch (e) {
            console.log(e)
          }
        })
        .catch((error) => {
          if (error) {
            if (error.response) {
              if (error.response.data) {
                if (error.response.data.message)
                  reject(error.response.data.message)
              }
            }
          }
        })
    })
  },

  refresh(ctx, authData) {
    for (const prop in authData) {
      Cookies.set(prop, authData[prop])
    }
    ctx.commit('setAuthData', authData)
  },
  nuxtServerInit(state, context) {
    try {
      if (context.req.headers.cookie) {
        const userData = parseCookie(context.req.headers.cookie)
        state.commit('setAuthData', userData)
      }
    } catch (e) {
      console.log('error when parse cookie')
    }
  },
}

export const mutations = {
  updateUsers(state, users) {
    state.users = users
  },
  updatePosts(state, posts) {
    state.posts = posts
  },
  setAuthData(state, userData) {
    state.authData = userData
    state.isAuth = true
  },
  clearAuthData(state) {
    state.isAuth = false
    for (const prop in state.authData) {
      state.authData[prop] = ''
    }
  },
}

export const state = () => ({
  isAuth: false,
  authData: {
    accessToken: '',
    refreshToken: '',
    email: '',
    id: '',
    isActivated: true,
  },
  posts: [
    {
      id: 1,
      title: 'post1',
    },
    {
      id: 2,
      title: 'post2',
    },
  ],
  users: [],
})

export const getters = {
  allPosts(state) {
    return state.posts
  },
  allUsers(state) {
    return state.users
  },
  isAuth(state) {
    return state.isAuth
  },
}
