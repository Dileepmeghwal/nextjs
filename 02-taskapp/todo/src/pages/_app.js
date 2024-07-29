import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "../store";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.webdevelopment.lk" />
      </Head>

      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '7173341442767986');
fbq('track', 'PageView');
        `}
      </Script>
      

      <Component {...pageProps} />
    </Provider>
  );
}
