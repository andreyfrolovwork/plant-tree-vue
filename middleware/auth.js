export default function ({ redirect, store }) {
  console.log('hello world from niddleware')
  debugger
  redirect({ name: 'board' })
}
