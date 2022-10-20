export default function (context) {
  context.$axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${context.store.state.authData.accessToken}`
    return config
  })

  context.$axios.interceptors.response.use(
    (config) => {
      return config
    },
    async (error) => {
      const originalRequest = error.config
      if (
        error.response.config.url === '/api/refresh' &&
        error.response.status === 401
      ) {
        context.store.dispatch('logout').then(() => {
          context.redirect(200, '/login')
        })
      } else if (
        error.response.status === 401 &&
        error.config &&
        !error.config._isRetry
      ) {
        originalRequest._isRetry = true
        try {
          const userData = await context.$axios.$get(`/api/refresh`)
          await context.store.dispatch('refresh', userData)
          return context.$axios.request(originalRequest)
        } catch (e) {
          console.log('error')
          throw error
        }
      }
      return Promise.reject(error)
    }
  )
}
