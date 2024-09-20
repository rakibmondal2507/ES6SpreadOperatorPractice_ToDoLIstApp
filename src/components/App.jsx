import React, { useState } from "react";

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

function App() {
  const [text, setText] = useState("");
  const [item, setItems] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setText(value);
  }

  function handleClick(event) {
    setItems((prevItems) => [...prevItems, text]);
    setText("");
    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form onSubmit={handleClick}>
        <div className="form">
          <input onChange={handleChange} type="text" value={text} />

          <button>
            <span>Add</span>
          </button>
        </div>
      </form>
      <div>
        <ul>
          {item.map((list) => (
            <li>{list}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
