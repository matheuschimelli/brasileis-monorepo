export default function ({ store, redirect }) {
  console.log(store.state.auth.user)
  if (
    !store.state.auth.user.escritorioAdministador ||
    store.state.auth.user.escritorioAdministador == null
  ) {
    return redirect('/escritorio/sobre')
  }
}
