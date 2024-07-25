import { useRouter } from "next/router";
import React from "react";

const Deatils = () => {
  const router = useRouter();
  const { slug } = router.query;
  return <div>Deatils: {slug}</div>;
};

export default Deatils;
