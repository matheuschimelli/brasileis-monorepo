export default function ({ store, redirect }) {
  // If the user is not authenticated
  console.log(store.state.auth)

  console.log(store.state.auth)
  if (!store.state.auth.user) {
    console.log('rule 1')
    return redirect('/login')
  }
  if (!store.state.auth.user.admin) {
    console.log('rule 2')
    return redirect('/login')
  }
  if (store.state.auth.user.role !== 'admin') {
    console.log('rule 3')
    return redirect('/login')
  }
}
