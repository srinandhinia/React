import ExpenseComponent from "./components/ExpenseComponent";
function App() {
  const expenseItem = [
    {
      id: "e1",
      date: new Date(2023, 9, 15),
      title: "Laptop",
      price: 800.05,
    },
    {
      id: "e2",
      date: new Date(2022, 9, 9),
      title: "Car",
      price: 60000.0,
    },
    {
      id: "e3",
      date: new Date(2022, 8, 25),
      title: "Television",
      price: 1200.0,
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseComponent
        date={expenseItem[0].date}
        title={expenseItem[0].title}
        price={expenseItem[0].price}
      />
      <ExpenseComponent
        date={expenseItem[1].date}
        title={expenseItem[1].title}
        price={expenseItem[1].price}
      />
      <ExpenseComponent
        date={expenseItem[2].date}
        title={expenseItem[2].title}
        price={expenseItem[2].price}
      />
    </div>
  );
}

export default App;
