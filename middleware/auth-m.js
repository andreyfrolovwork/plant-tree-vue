export default function (context) {
  const isAuth = context.store.state.isAuth
  if (!isAuth) {
    return context.redirect('/login')
  }
}
