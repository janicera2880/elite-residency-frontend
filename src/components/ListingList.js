import React, {useState} from "react";
import ListingCard from "./ListingCard";
import Search from "./Search";

function ListingList({listings, onDeleteProperty, onUpdateProperty, listingsToDisplay, setListingsToDisplay}) {
  const [dataNext, setDataNext] = useState(0)
 
  .slice(dataNext, dataNext + 8)


  const shownList = listings.map((listings) => 
  <ListingCard
      key={listings.id}
      listingData={listings}
      onDeleteProperty={onDeleteProperty}
      onUpdateProperty={onUpdateProperty}
  />)

function handleClickNext() {
  setDataNext((dataNext) => (dataNext + 8) % listings.length);
}

return (
  <>
  <Search listings={listings} listingsToDisplay={listingsToDisplay} setListingsToDisplay={setListingsToDisplay} />
  <div className="event-list">
    {shownList}
    </div>
  <br/>
  <br/>
  <br/>
  <br/>
  <div className="next-container">
      <button className="next-button" onClick={handleClickNext}>Next</button>
  </div>
  </>    
)
}


export default ListingList;