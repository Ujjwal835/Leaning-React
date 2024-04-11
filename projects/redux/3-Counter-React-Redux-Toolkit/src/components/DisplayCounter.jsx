import { useSelector } from "react-redux";
export default function DisplayCounter() {
  // const counterObj = useSelector((store) => store.counter);
  // const counter=counterObj.counterVal

  const {counterVal} = useSelector((store) => store.counter);


  return <p className="lead mb-4">Counter Current Value : {counterVal}</p>;
}
