import React, { useState, useEffect } from "react";
import SearchData from "./SearchData";
import { Card, Input } from "semantic-ui-react";
import "./SearchComponent.css";

export default function SearchComponent() {
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const APIData = SearchData;
  // console.log("searchdata=========>", APIData);
//   console.log("searchdata=========>", APIData);
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <Input
        icon="search"
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)}
      />
      <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
        {searchInput.length > 1 &&
          filteredResults.map((item) => {
            return (
              <div className="search-card">
                <Card>
                  <Card.Content>
                    <div>
                    <h6><Card.Description>{item.category} - </Card.Description></h6>
                        <div className="search-category" style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                            <h5><Card.Header>{item.name}</Card.Header> </h5>
                            <img style={{width:'22px', borderRadius:'2px', marginLeft:'6px'}} src={item.img} alt="" />
                        </div> 
                    </div>
                  </Card.Content>
                </Card>
              </div>
            );
          })}
      </Card.Group>
    </div>
  );
}
