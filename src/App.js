import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
function App() {
  return (
    // *Head
    // *Body
    //   *SideBar
    //      *MenuItems
    //   *MainConatiner
    //     *Buttons
    //     *Video
      <Provider store={store}>
      <div>
        <Head />
        <Body />
      </div>
      </Provider>
  
  );
}

export default App;
