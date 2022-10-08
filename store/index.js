import Cookies from 'js-cookie'
import parseCookie from '~/utils.js'
import mutationsEditTree from '~/store/mutationsEditTree.js'
export const actions = {
  getAllTreesInStore(ctx) {
    this.$axios.$get('/api/trees-all-in-store').then((trees) => {
      ctx.commit('updateTreesInStore', trees)
    })
  },
  deleteTree(ctx, _id) {
    this.$axios.$post('/api/trees-delete', { _id }).then(() => {
      this.$axios.$get('/api/trees-all').then((trees) => {
        ctx.commit('updateTrees', trees)
      })
    })
  },
  saveTree(ctx) {
    console.log(ctx.state.treeEditedRow.picturePath instanceof File)
    const fd = new FormData()
    for (const prop in ctx.state.treeEditedRow) {
      if (prop === 'picturePath') {
        if (ctx.state.treeEditedRow.picturePath instanceof File) {
          fd.append(prop, ctx.state.treeEditedRow[prop])
        }
      } else {
        fd.append(prop, ctx.state.treeEditedRow[prop])
      }
    }
    this.$axios
      .$post('/api/trees-save', fd, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => {
        this.$axios.$get('/api/trees-all').then((trees) => {
          ctx.commit('updateTrees', trees)
        })
      })
  },
  addTree(ctx) {
    this.$axios.$post('/api/trees-add-empty').then(() => {
      this.$axios.$get('/api/trees-all').then((trees) => {
        ctx.commit('updateTrees', trees)
      })
    })
  },
  fetchTrees(ctx) {
    this.$axios.$get('/api/trees-all').then((trees) => {
      ctx.commit('updateTrees', trees)
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
  ...mutationsEditTree,
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
  treesInStore: [
    {
      name: '',
      specie: '',
      price: '',
      absorptionCo2: '',
      lifeSpan: '',
      height: '',
      inStore: '',
      description: '',
      picturePath: '',
    },
  ],
  trees: [
    {
      name: '',
      specie: '',
      price: '',
      absorptionCo2: '',
      lifeSpan: '',
      height: '',
      inStore: '',
      description: '',
      picturePath: '',
    },
  ],
  treeEditedRow: {
    name: '123',
    specie: '1',
    price: '2',
    absorptionCo2: '3',
    lifeSpan: '4',
    height: '5',
    inStore: '6',
    description: '7',
    picturePath: '8',
  },
  basket: {
    isEmpty: true,
    items: [
      {
        id: 1,
      },
    ],
  },
})

export const getters = {
  isAuth(state) {
    return state.isAuth
  },
}
