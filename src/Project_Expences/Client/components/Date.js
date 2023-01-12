import "./Date.css";
function Date_comp(props) {
  const date = new Date(props.date);
  const day = date.toLocaleString("en-us", { day: "2-digit" });
  const month = date.toLocaleString("en-us", { month: "short" });
  const year = date.getFullYear();
  return (
    <div>
      <p className="date">
        DATE : {day} {month} {year}
      </p>
    </div>
  );
}
export default Date_comp;
