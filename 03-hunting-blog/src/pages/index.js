import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { supabase } from "../../supabase";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ blogdata }) {
  const router = useRouter();
  const { accessToken } = useAuth();
  console.log("accessToken,", accessToken);

  // useEffect(() => {
  //   if (accessToken !== null) {
  //     router.replace("/");
  //   } else {
  //     router.push("/login");
  //   }
  // }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h3>Welcome!</h3>
      </main>
    </>
  );
}

// Home.getInitialProps = async () => {
//   const { data, error } = await supabase.from("blog_posts").select("*");

//   if (error) {
//     console.log(error)
//     throw error;
//   }
//   return { blogdata: data };
// };
