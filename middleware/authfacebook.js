export default function ({ store, redirect }) {
  // If the user is not authfacebook
  if (!store.state.auth) {
    return redirect('/admin/')
  }
}
