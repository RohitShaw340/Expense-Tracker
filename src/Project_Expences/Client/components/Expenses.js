import Item from "./Item";
function Expences(props) {
  return (
    <div className="expences">
      {props.item.map((New_Expences) => (
        <Item
          date={New_Expences.item_date}
          name={New_Expences.item_name}
          price={New_Expences.item_price}
        />
      ))}
    </div>
  );
}
export default Expences;
