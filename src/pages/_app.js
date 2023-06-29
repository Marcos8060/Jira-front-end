import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
