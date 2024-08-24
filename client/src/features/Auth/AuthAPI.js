import { BACKEND_URL } from "../../app/constants";

export  function loginUser(userData) {
  return new Promise(async (resolve , reject ) =>{
    try {
      const response = await fetch(`${BACKEND_URL}/auth/login`, {
        method : "POST",
        body : JSON.stringify(userData),
        headers : {'content-type' : 'application/json'}
      })
      if (response.ok) {
        const data = await response.json()
        resolve({data})
      }else{
        const error = await response.json()
        reject(error)
      }
    } catch (error) {
      reject(error)
    }
  }
  );
}

export async function registerUser(userData) {
  return new Promise(async (resolve , reject ) =>{
    try {
      const response = await fetch(`${BACKEND_URL}/auth/signup`, {
        method : "POST",
        body : JSON.stringify(userData),
        headers : {'content-type' : 'application/json'}
      })
      if (response.ok) {
        const data = await response.json()
        resolve({data})
      }else{
        const error = await response.json()
        reject(error)
      }
    } catch (error) {
      reject(error)
    }
  }
  );
}