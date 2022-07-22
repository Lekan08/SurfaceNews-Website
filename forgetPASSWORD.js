const forgotPassword = (Email, callbacks = {}) => {
    const { onLoad, onSuccess, onFailure } = callbacks
    return dispatch => {
     if (onLoad && typeof onLoad === 'function') onLoad()
     const poolData = {
      UserPoolId: userPoolId,
      ClientId: clientId
     }
     const userPool = new CognitoUserPool(poolData)
     const userData = {
      Email: Email,
      Pool: userPool
     }
     const cognitoUser = new CognitoUser(userData)
     cognitoUser.forgotPassword({
      onSuccess: (result) => {
       if (onSuccess && typeof onSuccess === 'function') onSuccess()
      },
      onFailure: (error) => {
       console.error(error.message)
       console.error(error.stack)
       if (onFailure && typeof onFailure === 'function') onFailure(error.message)
      }
     })
    }
   }
   