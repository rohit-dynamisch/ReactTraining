import React, { useState } from "react";

function IterateObj() {
  let arr = [10, 2, 3, 8, 33, 2, 10, 3, 2, 8, 11, 9]; //10,2,3,4,8 are duplicates
  let cleanArr = [];
  let duplicates = [];
  const [show, setShow] = useState(false);

  //Using Map
  arr.map((num, i) => {
    let index = arr.findIndex((item) => item == num);
    if (index == i) cleanArr.push(num);
    else duplicates.push(num);
  });

  //Using Filter
  //   cleanArr = arr.filter((num, i) => (arr.findIndex((item) => num == item)) == i);

  //Using MAP data Structure
  //   const map = new Map();
  //   for (let num of arr) {
  //     if (map.get(num)) duplicates.push(num);
  //     else {
  //       cleanArr.push(num);
  //       map.set(num, true);
  //     }
  //   }

  //Using Set Data Structure!
  // const set=new Set(arr)
  // cleanArr=Array.from(set)

  let nestedObj = {
    person1: {
      gender: "male",
      name: {
        title: "Mr",
        first: "Naslav",
        last: "Kupchinskiy Roman",
      },
      location: {
        street: {
          number: 3256,
          name: "Stalevariv",
        },
        city: "Golubivka",
        state: "Volinska",
        country: "Ukraine",
        postcode: 52614,
      },
      email: "naslav.kupchinskiyroman@example.com",
      dob: {
        date: "1948-01-31T08:48:06.619Z",
        age: 76,
      },
    },

    person2: {
      gender: "female",
      name: {
        title: "Miss",
        first: "Martha",
        last: "Fields",
      },
      location: {
        street: {
          number: 244,
          name: "Park Lane",
        },
        city: "Derby",
        state: "Isle of Wight",
        country: "United Kingdom",
        postcode: "G36 4FJ",
      },
      email: "martha.fields@example.com",
      dob: {
        date: "1958-04-27T09:12:56.430Z",
        age: 65,
      },
    },

    person3: {
      gender: "male",
      name: {
        title: "Mr",
        first: "Joel",
        last: "Lowe",
      },
      location: {
        street: {
          number: 1394,
          name: "Dublin Road",
        },
        city: "Bandon",
        state: "South Dublin",
        country: "Ireland",
        postcode: 49877,
      },
      email: "joel.lowe@example.com",
      dob: {
        date: "1980-01-10T12:24:54.040Z",
        age: 44,
      },
    },

    person4: {
      gender: "male",
      name: {
        title: "Mr",
        first: "Kaïs",
        last: "Simon",
      },
      location: {
        street: {
          number: 2347,
          name: "Avenue de la Libération",
        },
        city: "Marseille",
        state: "Gard",
        country: "France",
        postcode: 17050,
      },
      email: "kais.simon@example.com",
      dob: {
        date: "1965-03-07T21:24:17.245Z",
        age: 59,
      },
    },
  };

  return (
    <div>
      <h3>Original Array - </h3>
      {arr.map((i) => (
        <span>{i} , </span>
      ))}
      <br />

      <button onClick={() => setShow(!show)}> Remove Duplicates!</button>
      {show && (
        <div>
          <h3>New Array</h3>
          {cleanArr.map((i) => (
            <span>{i} , </span>
          ))}

          <h3>Removed Elements</h3>
          {duplicates.map((i) => (
            <span>{i} , </span>
          ))}
        </div>
      )}

      <hr />
      <h2>Iterating Nested Object!</h2>
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Gender</th>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(nestedObj).map((key) => {
              return (
                <tr>
                  <td>{nestedObj[key].gender}</td>

                  <td>
                    {Object.keys(nestedObj[key].name).map((nameKey) => {
                      return nestedObj[key].name[nameKey] + " ";
                    })}
                  </td>

                  <td>
                    {Object.keys(nestedObj[key].location).map((locationKey) => {
                      if (locationKey == "street") {
                        return Object.keys(
                          nestedObj[key].location[locationKey]
                        ).map(
                          (streetKey) =>
                            nestedObj[key].location.street[streetKey] + " , "
                        );
                      } else
                        return nestedObj[key].location[locationKey] + " , ";
                    })}
                  </td>

                  <td>{nestedObj[key].email}</td>

                  <td>
                    {Object.keys(nestedObj[key].dob).map((dobKey) => {
                      if (dobKey == "age")
                        return nestedObj[key].dob[dobKey] + " ";
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IterateObj;
