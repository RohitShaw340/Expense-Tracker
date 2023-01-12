import "./Item.css";
import Date from "./Date";

function Item(props) {
  return (
    <div>
      <div className="item">
        <Date date={props.date}></Date> {/* multi-Component */}
        <p className="name">{props.name}</p>
        <p className="price">${props.price}</p>
      </div>
      <br />
    </div>
  );
}
export default Item;
