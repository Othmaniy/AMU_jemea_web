import React, { useEffect, useState } from 'react'
import basepath from '../../../components/url/url'
import UpdateBook from '../../../components/updateBook/UpdateBook'


function Controlbooks() {
    const [books,SetBooks]=useState([])
    const [openupdate,Setopenupdate]=useState(false);
    const [selectedBook,setSelectedBook]=useState(null)

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
      
       const handleClick=async(book)=>{
        const newStatus = book.available=="available"?"taken":"available";
        console.log(book);
        console.log(book.id);
        try{
          const response =await basepath.patch(`/library/updatebook/${book.id}`,{status:newStatus})
          if(response.status==200){
            SetBooks(books.map(b => b.id === book.id ? { ...b, available: newStatus } : b))
          }
          console.log(response);
        }
        catch(err){
          console.log(err);
        }
        

       }


  return (
    <><table className="table table-dark table-hover z-3 position-relative">
    <thead>
      <tr>
        <th scope="col">Book name</th>
        <th scope="col">Author</th>
        <th scope="col">category</th>
        {/* <th scope="col">publishedYear</th> */}
        <th scope="col">status</th>
        <th scope="col">status</th>
        <th scope="col">status</th>
      </tr>
    </thead>
    <tbody>
      {books.map((b)=>( <tr key={b.id}>
        {/* todo published year */}
        <th scope="row">{b.book_name}</th>
        <td>{b.Author}</td>
        <td>{b.category}</td> 
        <td className={b.available=="available"?"text-success":"text-danger"}>{b.available}</td>
        <td>
        <button onClick={()=> handleClick(b)} className={b.available=="available"?"btn btn-outline-danger":"btn btn-outline-primary"}>{b.available=="available"?"reserve":"return"}</button>
      </td>
      <td>
        <button className="btn btn-success" onClick={() => { Setopenupdate(true); setSelectedBook(b); }} >update</button>
      </td>
      {/* {openupdate&&<UpdateBook Setopenupdate={Setopenupdate} book={b} key={b.id} />} */}
      {openupdate && selectedBook && selectedBook.id === b.id && <UpdateBook Setopenupdate={Setopenupdate} book={selectedBook} key={b.id} />}
      </tr>))}
      

    </tbody>
  </table>
 
  
  </>
  
  )
}

export default Controlbooks