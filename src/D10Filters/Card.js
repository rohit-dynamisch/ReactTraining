import React from 'react'

function Card({item:{idMeal,strMeal,strCategory,strArea,strInstructions,strMealThumb,Rating},handDelete,highest,lowest}) {
  console.log(highest,lowest)
  return (
    <div className='card'>
    {<div className={Rating==highest?"badgeHighest":Rating==lowest?"badgeLowest":"badgeNone"} >{Rating==highest?"Highest Rated":"Lowest Rated"}</div>}
      <h2>{strMeal}</h2>
      <div className='cardImg'>
      <img src={strMealThumb}/>
      </div>
      <i>Category - {strCategory}</i>
      <span>Origin : {strArea}</span>
      <span>Rating : {Rating} </span>
      <div className='instructions'>
      <p>{strInstructions}</p>
      </div>
      {/* <div>
        {
          Object.keys(item).map(key=>{
            if(keys.toLowerCase().includes("ingredient")) return item[key]
          })
        }
      </div> */}
      <button onClick={()=>handDelete(idMeal)}>Delete</button>
    </div>
  )
}

export default Card
