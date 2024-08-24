import { BACKEND_URL } from "../../app/constants";

export  function loginUser(userData) {
  return new Promise(async (resolve , reject ) =>{
    const email = userData.email;
    const password = userData.password;
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

export async function getAllProducts() {
  return new Promise(async (resolve , reject ) =>{
    try {
      const response = await fetch(`${BACKEND_URL}/products`)
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

export async function getProductById(productId) {
  return new Promise(async (resolve , reject ) =>{
    try {
      const response = await fetch(`${BACKEND_URL}/products/${productId}`)
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

export async function addToCart(product) {
  return new Promise(async (resolve , reject ) =>{
    try {
      const response = await fetch(`${BACKEND_URL}/products/add-to-cart`, {
        method : "POST",
        body : JSON.stringify(product),
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

export async function deleteFromCart(productId) {
  return new Promise(async (resolve , reject ) =>{
    try {
      const response = await fetch(`${BACKEND_URL}/products/delete-from-cart/${productId}`, {
        method : "DELETE",
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

