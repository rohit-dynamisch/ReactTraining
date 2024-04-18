import React, { useEffect, useState } from "react";
import data1 from "./Data.json";
import Card from "./Card";
import FiltersComponent from "./FiltersComponent";
function FiltersInCard() {
  const [data, setData] = useState(data1);
  const [dataToShow, setDataToShow] = useState(data1);
  const [filters, setFilters] = useState({});
  const [highest, setHighest] = useState(0);
  const [lowest, setLowest] = useState(5);

  const handleFilter = (filters) => {
    setFilters(filters);
  };

  const handDelete = (id) => {
    setDataToShow(dataToShow.filter((item) => item.idMeal != id));
    // setData(data.filter(item=>item.idMeal!=id))
  };

  useEffect(() => {
    let temp = data;
    for (let key in filters) {
      temp = temp.filter((item) => {
        if (key == "Rating") return item[key] >= filters[key];
        if (filters[key]) return item[key] == filters[key];
        return true;
      });
    }
    setDataToShow(temp);
  }, [filters]);

  // useEffect(() => {
  //   let temp = data;
  //     temp = temp.filter((item) => {
  //       if( filters.strMeal!='' && item.strMeal!=filters.strMeal) return false;
  //       if( filters.strArea!='' && item.strArea!=filters.strArea) return false;
  //       if( filters.strCategory!='' && item.strCategory!=filters.strCategory) return false;

  //       if (filters.Rating!='' && item.Rating<filters.Rating) return false;
  //       // if (filters[key]) return item[key] == filters[key];
  //       return true;
  //     });
  //   setDataToShow(temp);
  // }, [filters]);

  
  useEffect(() => {
    let maxx = 0,
      minn = 5;
    dataToShow.map((item) => {
      maxx = Math.max(maxx, item.Rating);
      minn = Math.min(minn, item.Rating);
    });
    setHighest(maxx);
    setLowest(minn);
  }, [dataToShow]);

  return (
    <>
      <center>
        <h1>Filter Recipes</h1>
      </center>
      <div className="ProductFilter">
        <div className="filterContainer">
          <FiltersComponent data={data} handleFilter={handleFilter} />
        </div>
        <hr />
        <h4>Total Records :- {dataToShow.length}</h4>
        <div className="cardContainer">
          {dataToShow.length > 0 ? (
            dataToShow?.map((item, i) => {
              return (
                <Card
                  key={item.idMeal}
                  item={item}
                  handDelete={handDelete}
                  highest={highest}
                  lowest={lowest}
                />
              );
            })
          ) : (
            <h3>No Recipes Found...</h3>
          )}
        </div>
      </div>
    </>
  );
}

export default FiltersInCard;
