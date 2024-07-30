// import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/main.scss";
import { AuthProvider } from "@/context/authContext";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Toaster
        position="top-center"
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <Component {...pageProps} />
    </AuthProvider>
  );
}
