import React, { useState } from "react";
import Expenses from "./components/Expenses";
import "./App.css";
import Card from "./components/Card";
import NewExpences from "./components/NewExpences";

let sample_list = new Array();
sample_list = [
  {
    id: 1,
    item_date: new Date("2022-12-20"),
    item_name: "Car insurance",
    item_price: 500,
  },
  {
    id: 2,
    item_date: new Date("2022-12-19"),
    item_name: "Property Tax",
    item_price: 700,
  },
  {
    id: 3,
    item_date: new Date("2022-10-20"),
    item_name: "School Fees",
    item_price: 50,
  },
  {
    id: 4,
    item_date: new Date("2022-09-20"),
    item_name: "Gas Bill",
    item_price: 100,
  },
];

function App() {
  const [list, setList] = useState(sample_list);

  const reciveData = (data) => {
    let New_expence = {
      id: Math.floor(Math.random() * 100),
      ...data,
    };
    const update_list = [New_expence, ...list];
    setList(update_list);
    console.log(list);
  };

  return (
    <div className="list">
      <center>
        <h1 className="head">EXPENSE TRACKER</h1>
      </center>
      <NewExpences addExpence={reciveData} />
      <br></br>
      <Card className="card">
        <Expenses item={list} />
      </Card>
    </div>
  );
}
export default App;
