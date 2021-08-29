export default function ({ store, redirect }) {
  if (store.state.auth.user.escritorioAdministador) {
    return redirect('/escritorio')
  }
}
