const readLocalStorage = (item) => {
	return JSON.parse(localStorage.getItem(item))
}

const writeLocalStorage = (item, data) => {
	localStorage.setItem(item, JSON.stringify(data))
}

const logIn = (user) => {
	  let local_user = readLocalStorage(user.email)
	  let loginStatus = {
		  status: false,
		  error: ""
	  }

      if(local_user === null) {
			loginStatus.status = false;
			loginStatus.error = 20
			return loginStatus
      }else if(local_user.password === user.password) {
		loginStatus.status = true;
		loginStatus.error = 10
         let loggedUser = {
              status: true,
              email: local_user.email
		 }
		 writeLocalStorage('user', loggedUser)
		 return loginStatus
      } else {
			loginStatus.status = false;
			loginStatus.error = 30
		return loginStatus
      }
     
  }

  const logOut = () => {
		let loggedUser = {
			status: false
		}
		writeLocalStorage('user', loggedUser)
  }

  
  const createUser = (user) => {
	let userStatus = {
		status: false,
		error: ""
	}

	if(userExists(user.email)){
		userStatus.status = false
		userStatus.error = 40
		return userStatus
	} else {
		writeLocalStorage(user.email, user)
		userStatus.status = true
		userStatus.error = 10
		logIn(user)
		return userStatus
	}

	}

  const userExists = (user_email) => {
    let local_user = readLocalStorage(user_email)
    if(local_user === null){
      return false
    } else {
      return true
    }
  }

  export { logIn, logOut, createUser }