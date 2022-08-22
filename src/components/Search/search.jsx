import { useSearchParams } from "react-router-dom";

export const Search = ({ searchParam, placseHolder }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <input
      placeholder={placseHolder}
      value={searchParams.get(searchParam) || ""}
      onChange={(event) =>
        setSearchParams({ [searchParam]: event.target.value })
      }
    />
  );
};
