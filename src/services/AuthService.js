class AuthService {
    isAuthenticated() {
      
      return localStorage.getItem('authenticated') === 'true';
    }
  
    login() {
      localStorage.setItem('authenticated', 'true');
    }
  
    logout() {
      localStorage.removeItem('authenticated');
    }
  }
  
  export default new AuthService();
  