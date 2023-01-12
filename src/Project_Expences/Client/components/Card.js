import "./Card.css";
function Card(props) {
  const Item_class = "basic" + props.className;
  return <div className="basic">{props.children}</div>;
}
export default Card;
