/* import Cookies from 'universal-cookie';
const cookies = new Cookies();
 */
const authService = {
  
  isAuthenticated () {
    return localStorage.getItem('auth') === 'true' ? true: false ;
  },

  signIn (cb) {
    console.log('called SignIn');
    /* cookies.set('auth', true, {path: '/'}); */
    localStorage.setItem('auth', true);
    setTimeout(cb, 100); // simulate async
  },

  signOut (cb) {
    //cookies.set('auth', false, {path: '/'});
    localStorage.setItem('auth', false)
    setTimeout(cb, 100); // sim async
  } 
}

export default authService;