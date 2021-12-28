import ComponentsItem from "./components/ComponentsItem";

function App() {

  const products = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 92.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];



  return (
    <div>
      <ComponentsItem
        title={products[0].title}
        amount={products[0].amount}
        date={products[0].date}/>
        
      <ComponentsItem
        title={products[1].title}
        amount={products[1].amount}
        date={products[1].date}/>
        
      <ComponentsItem
        title={products[2].title}
        amount={products[2].amount}
        date={products[2].date}/>
    </div>
  );
}

export default App;
