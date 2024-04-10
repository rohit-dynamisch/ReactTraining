import React, { useState } from "react";

function SpreadOperatorNestedObj() {
  const [obj, setObj] = useState({
    name: {
      firstName: "Rohit",
      lastName: "Sharma",
    },
    age: 22,
    address: {
      city: "Pune",
      state: "Maharashtra",
    },
  });

  function handleClick() {
    setObj((prev) => ({
      ...prev,
      name: {
          ...prev.name,         
          firstName: "Saurabh",
      },
    }));
  }
  return (
    <div>
      Name :{`${obj.name.firstName} ${obj.name.lastName}`}
      <br />
      age :{obj.age}
      <br />
      address:{`${obj.address.city} ${obj.address.state}`}
      <br />
      <button onClick={handleClick}>Click to change Name</button>
    </div>
  );
}

export default SpreadOperatorNestedObj;
