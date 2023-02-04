import React from 'react'
import ListingList from './ListingList';


function ListingPage({listings,  onDeleteProperty, onUpdateProperty}) {

    return(
    <>
    <br/>
    <h2>All Listings</h2>
    <br/>
        <ListingList
        data={listings} 
        handleDelete={onDeleteProperty}
        handleUpdate={onUpdateProperty}
        />
    </>
    )
}

export default ListingPage;