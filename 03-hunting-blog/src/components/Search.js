import React from "react";
import Input from "./Input";
import { useSearchParams } from "next/navigation";

const Search = ({ value, onChange }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const params = new URLSearchParams(searchParams.toString());
  console.log(params);

  return <Input value={value} onChange={onChange} className="search" />;
};

export default Search;
