export const LoadSessFromStorage = () => {
    const isLoggedIn =  localStorage.getItem('isLoggedIn');
    if(isLoggedIn){
         const user = localStorage.getItem('login');
         return {
          isLoggedIn,
          user
         }
    }
    return null;
 }