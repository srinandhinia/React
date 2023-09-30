import ExpenseComponent from "./components/ExpenseComponent";
import ProductComponent from "./components/Products";
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

  const products = [
    {
      title: "Product 1",
      price: 10,
      desc: "First Product",
    },
    {
      title: "Product 2",
      price: 20,
      desc: "Second Product",
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

      <h2>My Demo Shop</h2>
      <ProductComponent
        title={products[0].title}
        price={products[0].price}
        desc={products[0].desc}
      ></ProductComponent>
      <ProductComponent
        title={products[1].title}
        price={products[1].price}
        desc={products[1].desc}
      ></ProductComponent>
    </div>
  );
}

export default App;
