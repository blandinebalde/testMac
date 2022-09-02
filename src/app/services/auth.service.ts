export class AuthService{

    isauth = false;

    signIn(){
        return new Promise(
            (resolve,reject) => {
                setTimeout(
                    () => {
                        this.isauth = true;
                        resolve(true)
                    }, 2000
                )
            }
        )
    }

    signOut(){
        this.isauth = false ; 
    }

}