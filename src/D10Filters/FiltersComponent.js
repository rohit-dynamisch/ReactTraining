import React, { useEffect, useState } from "react";

function FiltersComponent({ data,handleFilter }) {
  const [mealOption, setMealOption] = useState([]);
  const [areaOption, setAreaOption] = useState([]);
  const [categoryOption, setCategoryOption] = useState([]);
  const [ratingOption,setRatingOption]=useState([1,2,3,4,5])
  const [selectedFilter,setSelectedFilter]=useState({
    strMeal:"",
    strArea:"",
    strCategory:"",
    rating:0
  })


  useEffect(()=>{
    handleFilter(selectedFilter)
  },[selectedFilter])

  useEffect(() => {
    let mealSet = new Set();
    let areaSet = new Set();
    let categorySet = new Set();
    let ratingSet=new Set();
    data.map((item) => {
      mealSet.add(item.strMeal);
      areaSet.add(item.strArea);
      categorySet.add(item.strCategory);
      ratingSet.add(item.Rating)
    });

    setMealOption([...mealSet]);
    setAreaOption([...areaSet]);
    setCategoryOption([...categorySet]);
  }, [data]);

  return (
    <div className="filters">
    <h2>Filters:</h2>
      <div className="mealFilter">
      <h3>Meal Name:-</h3>
        <select name="strMeal" value={selectedFilter.strMeal} onChange={(e)=>setSelectedFilter({...selectedFilter,[e.target.name]:e.target.value})}>
        <option value=""  selected>Select your option</option>
          {mealOption.map(item=><option key={item} value={item}>{item}</option>)}
        </select>
      </div>

      <div className="categoryFilter">
      <h3>Meal Category:-</h3>
        <select name="strCategory" value={selectedFilter.strCategory} onChange={(e)=>setSelectedFilter({...selectedFilter,[e.target.name]:e.target.value})}>
        <option value="" selected>Select your option</option>
        {categoryOption.map(item=><option key={item} value={item}>{item}</option>)}
        </select>
      </div>

      <div className="areaFilter">
      <h3>Country of Origin:-</h3>
        <select name="strArea" value={selectedFilter.strArea} onChange={(e)=>setSelectedFilter({...selectedFilter,[e.target.name]:e.target.value})}>
        <option value=""  selected>Select your option</option>
        {areaOption.map(item=><option key={item} value={item}>{item}</option>)}
        </select>
      </div>

      <div className="ratingFilter">
      <h3>Rating:-</h3>
        <select name="Rating" value={selectedFilter.Rating} onChange={(e)=>setSelectedFilter({...selectedFilter,[e.target.name]:e.target.value})}>
        <option value={0}  selected>Select your option</option>
        {ratingOption.map(item=><option key={item} value={item}>Above {item}</option>)}
        </select>
      </div>
    </div>
  );
}

export default FiltersComponent;
