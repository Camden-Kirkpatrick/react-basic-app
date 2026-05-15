// React basics
// Code from: https://react.dev/learn

"use client";
import { useState } from "react";



const user = {
  name: "Josh",
  age: 24,
  email: "josh55@gmail.com"
}

const products = [
  {title: "Apple", isFruit: true, id: 1},
  {title: "Carrot", isFruit: false, id: 2},
  {title: "Mango", isFruit: true, id: 3}
]

// key={id} lets React track items across reorders/inserts/deletes
const listItems = products.map(product =>
  <li 
    key={product.id}
    // Outer {} = enter JavaScript; inner {} = object literal for the style prop
    style={{
      color: product.isFruit ? 'yellow' : 'orange'
    }}
  >
    {product.title}
  </li>
);

export default function MyApp()
{
 // Lifted state up to MyApp so both buttons stay in sync
  const [count, setCount] = useState(0);

  function handleClick()
  {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Welcome to my app</h1>
      {/* Both buttons share MyApp's state - clicking either updates both */}
      {/* Send the count data to each button */}
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />

      <h2>User info:</h2>
      <ul>
        <li>Name: {user.name}</li>
        <li>Age: {user.age}</li>
        <li>Email: {user.email}</li>
      </ul>

      <br></br>

      <h2>Products:</h2>
      <ul>{listItems}</ul>

    </>
  );
}

function MyButton({count, onClick}: {count: number; onClick: () => void})
{
  // Moved this to MyApp, so the app manages the data
  // const [count, setCount] = useState(0);

  // function handleClick()
  // {
  //   setCount(count + 1);
  // }

  // count and onClick come from the parent - this component owns no state itself
  return (
    <button onClick={onClick} className="btn">
      Button clicked {count} times
    </button>
  );
}