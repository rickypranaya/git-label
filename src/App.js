import LabelPage from "./pages/LabelPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LabelPage />
      </div>
    </Provider>
  );
}

export default App;
