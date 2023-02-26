import React from "react";
import { useInput } from "./hooks/useInput";
import "./styles.css";

export default function App() {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [email, setEmail] = useState("");

  // console.log(name, age, email);
  const [inputs, setInputs] = useInput({
    name: "",
    age: "",
    email: "",
    password: ""
  });

  return (
    <div className="App">
      <h1>Custom React Hook </h1>
      <h2>How to write a custom hooks</h2>

      { /* prettier-ignore */}
      <form>
        <label htmlFor="name">
        Name: <input name="name" value={inputs.name} onChange={setInputs} />
        </label>
        <label htmlFor="age">
        Age: <input name="age" value={inputs.age} onChange={setInputs} />
        </label>
        <label htmlFor="email">
        Email: <input name="email" value={inputs.email} onChange={setInputs} />
        </label>
        <label htmlFor="password">
        Password: <input name="password" type="password" value={inputs.password} onChange={setInputs} />
        </label>
      </form>
    </div>
  );
}
