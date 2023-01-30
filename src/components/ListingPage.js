import React from 'react'
import ListingList from './ListingList';


function ListingPage({listingData,  onDeleteProperty, onUpdateProperty}) {

    return(
    <>
    <br/>
    <h2>All Listings</h2>
    <br/>
        <ListingList
        data={listingData} 
        handleDelete={onDeleteProperty}
        handleUpdate={onUpdateProperty}
        />
    </>
    )
}

export default ListingPage;