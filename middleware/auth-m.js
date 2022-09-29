import Cookies from 'js-cookie'

export default function (context) {
  console.log('middleware worked')
  const isAuth = context.store.state.isAuth
  if (!isAuth) {
    return context.redirect('/login')
  }
}
