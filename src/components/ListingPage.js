import React, {useState} from "react";
import ListingDetail from "./ListingDetail";
import Filter from "./Filter";



function ListingPage({listings}) {
  console.log(listings)
    const [filterSearch, setFilterSearch] = useState("All");
       
    function handleFilter(event){
      setFilterSearch(event.target.value)
    }
  
  
  
    const displayedListings = listings.filter((listing) => {
      if (filterSearch === "All") return true;
  
      return listing.inactive.toString() === filterSearch;
    })
  
    const resultListing = displayedListings.map(listing => {
      return(
        <ListingDetail
        key={listings.id}
        id={listings.id}
        image_url={listings.image_url}
        list_price={listings.list_price}
        storey={listings.storey}
        bedroom={listings.bedroom}
        bathroom={listings.bathroom}
        garage={listings.garage}
        building_size={listings.building_size}
        lot_size={listings.lot_size}
        year_built={listings.year_built}
        pool={listings.pool}
        

        />
    )
})

return (
  <div>
    <Filter handleFilter={handleFilter}/>
    <ul className="listings-grid">{resultListing}</ul>      
  </div>
  
  
)
}
export default ListingPage;