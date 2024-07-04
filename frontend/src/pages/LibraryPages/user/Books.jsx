import axios from 'axios'
import React, { useEffect, useState } from 'react'
import basepath from '../../../components/url/url'

function Books() {
  const [books,SetBooks]=useState([])

  useEffect(()=>{
   const  fetchBooks=async()=>{
  try{
    const responseb =await basepath.get("/library/getallbooks")
    console.log(responseb); 
    console.log(responseb.data); 
    console.log(responseb.data.data); 
  //  SetBooks(responseb.data)
   SetBooks(responseb.data.data)
   console.log(books);
  }
  catch(err){
    console.log(err);
  }
     
   }
   fetchBooks()
  },[])
  return (
    <>
    <table className="table table-dark table-hover">
  <thead>
    <tr>
      <th scope="col">Book name</th>
      <th scope="col">Author</th>
      <th scope="col">category</th>
      {/* <th scope="col">publishedYear</th> */}
      <th scope="col">status</th>
    </tr>
  </thead>
  <tbody>
    {books.map((b)=>( <tr key={b.id}>
      {/* todo published year */}
      <th scope="row">{b.book_name}</th>
      <td>{b.Author}</td>
      <td>{b.category}</td>
      <td>{b.available}</td>
     
    </tr>))}
  </tbody>
</table>



    </>
  )
}

export default Books