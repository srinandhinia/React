import ExpenseComponent from "./components/ExpenseComponent";
function App() {
  const expenseItem = [
    {
      date: new Date(2023, 9, 15),
      title: "Laptop",
      price: 800.05,
    },
    {
      date: new Date(2022, 9, 9),
      title: "Car",
      price: 60000.0,
    },
    {
      date: new Date(2022, 8, 25),
      title: "Television",
      price: 1200.0,
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseComponent>
        date = {expenseItem[0].date} title={expenseItem[0].title} price=
        {expenseItem[0].price}{" "}
      </ExpenseComponent>
    </div>
  );
}

export default App;
