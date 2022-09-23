import Cookies from 'js-cookie'

export default function (context) {
  const isAuth = context.store.state.isAuth
  if (!isAuth) {
    return context.redirect('/login')
  }
  if (isAuth) {
    return context.redirect('/board')
  }
}
