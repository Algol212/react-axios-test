import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/uses")
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const onClickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/3")
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のusers</button>
    </div>
  );
}
