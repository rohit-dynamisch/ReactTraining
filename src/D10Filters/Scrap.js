import React, { useEffect } from 'react'

function Scrap() {
    let arr=[]
    useEffect(()=>{
        async function getText(id) {
            let x = await fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            let y = await x.json();
            if(y) arr.push(y?.meals[0])
          }

          for(let i=52810;i<=52880;i++){
              getText(i)
              if(i==52880) console.log(arr)
          }
          
    },[])
  return (
    <div>
      Scarpping..
    </div>
  )
}


export default Scrap
