import "@/styles/globals.css";

import { useEffect, useState } from "react";
import { supabase } from "../../supabase";
export default function App({ Component, pageProps }) {
  

 
  return <Component {...pageProps} />;
}
