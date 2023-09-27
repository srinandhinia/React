import "./ExpenseComponent.css";
function ExpenseComponent(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.price}</div>
    </div>
  );
}
export default ExpenseComponent;
