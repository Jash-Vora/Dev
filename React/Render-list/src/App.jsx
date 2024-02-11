import List from "./List.jsx"


function App() {
  const fruits =   [{id : 1,name : "Apple",calories : 95},
                    {id : 2,name : "Orange",calories : 45},
                    {id : 3,name : "Litchi",calories : 105},
                    {id : 4,name : "Banana",calories : 159},
                    {id : 5,name : "Pineapple",calories : 37}];
                    //for string // 
                    //fruits.sort((a,b)=> a.name.localeCompare(b.name));
                    //fruits.sort((a, b) => b.calories - a.calories);// // Sort by calories in descending order
const vegetables = [{id : 6,name : "Potato",calories : 161},
                    {id : 7,name : "Onion",calories : 40},
                    {id : 8,name : "Broccoli",calories : 34},
                    {id : 9,name : "Eggplant",calories : 25},
                    {id : 10,name : "Avocado",calories : 240}];
  return (
    <>
      {fruits.length>0 ? <List items = {fruits} category = "Fruits"/> : null }
      {vegetables.length>0 ? <List items={vegetables} category = "Vegetables"></List> : null}
    </>
  )
}

export default App
