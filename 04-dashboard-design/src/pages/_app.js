import Header from "@/components/Header/Header";
import Layout from "@/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <div className=" text-primary bg-secondary border-b-3 border-black">
        <Header />
      </div>
      <Component {...pageProps} />
    </Layout>
  );
}
