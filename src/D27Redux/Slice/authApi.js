export function Signup(userData) {
    return new Promise(async (resolve) =>{
      const response=await fetch("http://localhost:3010/auth",{
          method:'POST',
          body:JSON.stringify(userData),
          headers:{'content-type':'application/json'}
      })
      const data=await response.json();
      resolve({data})
    }
    );
  }
  
   
  
  
  
  
  export function login(loginInfo) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`http://localhost:3010/auth?email=${loginInfo.email}`, {
          method: 'GET',
          headers: { 'content-type': 'application/json' },
        });
        if (response.ok) {
          const data = await response.json();
          resolve({ data });
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
  
    });
  }
  
  