import React from "react";

function AddressCard({ item, selectedAddress, setSelectedAddress }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "start",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "whitesmoke",
      }}
      className="addressCard"
    >
      <input
        type="radio"
        value={item}
        checked={selectedAddress?.id == item?.id}
        onChange={() => setSelectedAddress(item)}
      />
      <div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <p>Name :{item.name} </p>
          <p>Email : {item.email} </p>
        </div>
        <p>Phone : {item.phone} </p>
        <p>Address : {item.address} </p>
        <p>
          Country / State /City : {item.country} / {item.state} / {item.city}{" "}
        </p>
        <p>Pincode : {item.pin} </p>
      </div>
    </div>
  );
}

export default AddressCard;
