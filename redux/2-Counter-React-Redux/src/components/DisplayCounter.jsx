import { useSelector } from "react-redux";
export default function DisplayCounter() {
  const counter = useSelector((store) => store.counter);

  return <p className="lead mb-4">Counter Current Value : {counter}</p>;
}
