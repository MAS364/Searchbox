import React, { useState, useEffect } from "react";

const Search = ({ query }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("MOCK_DATA.json");
    const fetcheddata = await res.json();
    setData(fetcheddata);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filtereddata = data.filter((item) =>
    item.first_name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <ul className="list">
        {filtereddata.map((item, index) => (
          <li key={index}>{item.first_name}</li>
        ))}
      </ul>
    </>
  );
};
export default Search;
