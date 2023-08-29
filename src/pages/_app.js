import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { AuthProvider } from "@/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
