export default async function ({ store, redirect, $axios }) {
  // Check if user is connected first
  if (!store.state.auth.user) {
    await $axios.get('/user/logout')
    return redirect('/')
  }
}
