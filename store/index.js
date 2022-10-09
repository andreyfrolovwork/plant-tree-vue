import Cookies from 'js-cookie'
import parseCookie from '~/utils.js'
import mutationsEditTree from '~/store/mutationsEditTree.js'

export const actions = {
  buyTrees(ctx) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post('/api/trees-buy', ctx.state.basket)
        .then((res) => {
          ctx.commit('clearBasket')
          resolve(res)
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
  getMyTrees(ctx) {
    this.$axios.$get('/api/trees-my').then((history) => {
      ctx.commit('setSellHistory', history)
    })
  },
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

  updateTrees(state, trees) {
    state.trees = []
    state.trees = trees.map((tree) => {
      return {
        ...tree,
        isEdit: false,
      }
    })
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
  removeFromBasket(state, id) {
    state.basket.count =
      state.basket.count - state.basket.items.find((el) => el._id === id).count
    state.basket.items = state.basket.items.filter((el) => el._id !== id)
  },
  incrementTree(state, id) {
    state.basket.count++
    state.basket.isEmpty = false
    const isContainedInBasket = state.basket.items.findIndex(
      (el) => el._id === id
    )
    if (isContainedInBasket !== -1) {
      state.basket.items[isContainedInBasket].count =
        state.basket.items[isContainedInBasket].count + 1
    } else {
      const pushedTree = state.treesInStore.find((el) => {
        const condition = el._id === id
        return condition
      })
      pushedTree.count = 1
      state.basket.items.push(pushedTree)
    }
  },
  decrementTree(state, id) {
    const isContainedInBasket = state.basket.items.findIndex(
      (el) => el._id === id
    )
    if (isContainedInBasket !== -1) {
      if (state.basket.items[isContainedInBasket].count > 1) {
        state.basket.items[isContainedInBasket].count--
        state.basket.count--
        if (state.basket.count === 0) {
          state.basket.isEmpty = true
        }
      } else if (state.basket.items[isContainedInBasket].count === 1) {
        state.basket.items = state.basket.items.filter((el) => el._id !== id)
        state.basket.count--
        if (state.basket.count === 0) {
          state.basket.isEmpty = true
        }
      }
    }
  },
  setSellHistory(state, history) {
    state.history = history
  },
  clearBasket(state) {
    console.log('clear basket')
    state.basket.isEmpty = true
    state.basket.items = []
    state.basket.count = 0
  },
}

export const state = () => ({
  persistedState: true,
  isAuth: false,
  authData: {
    accessToken: '',
    refreshToken: '',
    email: '',
    id: '',
    isActivated: true,
    role: '',
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
    items: [],
    count: 0,
  },
  history: [
    {
      name: 'Сосна',
      specie: 'Хвойные',
      price: 99,
      absorptionCo2: '305,4',
      lifeSpan: 400,
      height: 40,
      description:
        'Самое многочисленное в России дерево — именно сосна. Ценный камень янтарь — застывшая смола древних сосен.',
      inStore: true,
      picturePath: '96448d90-4587-11ed-9b8c-cb1102e567a2.png',
      _id: '633ee742e3b255d2c6837895',
      __v: 0,
      buyData: '2022-10-09T14:12:02.189Z',
    },
  ],
})

export const getters = {
  isAuth(state) {
    return state.isAuth
  },
  getCount: (state) => (id) => {
    console.log('getCount')
    const tree = state.basket.items.find((tree) => tree._id === id)
    if (tree === undefined) {
      return 0
    } else {
      return tree.count
    }
  },
  basketCount(state) {
    if (state.basket.items.length !== 0) {
      return state.basket.items.reduce((accum, el) => {
        return accum + el.count
      }, 0)
      /* return state.basket.items.length */
    } else return ''
  },
  basketTotalPrice(state) {
    return state.basket.items.reduce((accum, el) => {
      return (accum = accum + el.price * el.count)
    }, 0)
  },
}
