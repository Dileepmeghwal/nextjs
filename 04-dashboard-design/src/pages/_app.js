import Header from "@/components/Header/Header";
import Layout from "@/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
  );
}
