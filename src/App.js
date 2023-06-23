import PureComponent from "./components/PureComponent";
import ImpureComponent from "./components/ImpureComponent";
import "./styles.css";

const data = [1, 2, 3];

export default function App() {
  return (
    <div>
      <PureComponent data={data} />
      <ImpureComponent data={data} />
    </div>
  );
}
