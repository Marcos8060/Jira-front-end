// import "@/styles/globals.css";
// import { ToastContainer } from "react-toastify";
// import { Provider } from "react-redux";
// import { store } from "@/redux/store";
// import { loadCurrentUser } from "@/redux/features/authSlice";

// store.dispatch(loadCurrentUser()).then(() => {
//   export default function App({ Component, pageProps }) {
//     return (
//       <>
//         <ToastContainer />
//         <Provider store={store}>
//           <Component {...pageProps} />
//         </Provider>
//       </>
//     );
//   }
// });


// pages/_app.js
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { store } from "@/redux/store";
import { loadCurrentUser } from "@/redux/features/authSlice";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Dispatch loadCurrentUser action when the app initializes
    store.dispatch(loadCurrentUser());
  }, []);

  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;

