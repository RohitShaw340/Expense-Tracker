import React, { useState } from "react";
import "./NewExpences.css";

const NewExpences = (props) => {
  let date = new Date();
  let Name = "";
  let price = "";

  const [newDate, setNewDate] = useState(date);
  const [newName, setnewName] = useState(Name);
  const [newPrice, setNewPrice] = useState(price);

  const changeDateHandeler = (event) => {
    setNewDate(event.target.value);
  };
  const changeNameHandeler = (event) => {
    setnewName(event.target.value);
  };
  const changePriceHandeler = (event) => {
    setNewPrice(event.target.value);
  };

  const setValue = (event) => {
    event.preventDefault();
    let expence = {
      item_date: new Date(newDate),
      item_name: newName,
      item_price: newPrice,
    };
    props.addExpence(expence);
    setNewDate(date);
    setnewName(Name);
    setNewPrice(price);
  };

  return (
    <div className="newExpence">
      <form onSubmit={setValue}>
        <div className="setname">
          <lable className="input">Enter Name :</lable>
          <br></br>
          <br></br>
          <input type="text" value={newName} onChange={changeNameHandeler} />
        </div>
        <br></br>
        <div className="setdate">
          <lable className="input">Enter Date :</lable>
          <br></br>
          <br></br>
          <input type="date" value={newDate} onChange={changeDateHandeler} />
        </div>
        <div className="setprice">
          <lable className="input">Enter price :</lable>
          <br></br>
          <br></br>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={newPrice}
            onChange={changePriceHandeler}
          />
        </div>
        <br></br>
        <div className="button">
          <button>Add</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpences;
