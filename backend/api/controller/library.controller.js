const pool = require("../../db.config");
const { InsertNEwBook, getAllBooksService } = require("../service/library.service");

const addNewBook = (req, res) => {
  const { bookname,Author,category, isavailable } = req.body;
  if (!bookname || !category ||!Author) {
    return res.status(401).json({
      message: "please provide full infromation",
    });
  }
  InsertNEwBook(req.body,(err,results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "server error ",
      });
    }
    else{
        return res.status(200).json({message:"book sucessfuly added "})
    }


  });

  return res.status(200).json({message:"book added sucessfuly"})
  // console.log(results);
 
};

const getAllBooks =(req,res)=>{
    getAllBooksService(req,(err,results)=>{
        if(err){
            return res.status(500).json({message:"db conection error"})
        }
        console.log("results");
        return res.status(200).json({
            data:results
        })
    })

}
const updateBook=(req,res)=>{
    const bookId = req.params.id;
    const fieldsToUpdate=[]
    const values =[]
    if(req.body.bookname){
        fieldsToUpdate.push("book_name")
        values.push(req.body.bookname)
    }
    if(req.body.author){
        fieldsToUpdate.push("Author")
        values.push(req.body.author)
    }
    if(req.body.category){
        fieldsToUpdate.push("category")
        values.push(req.body.category)
    }
  if(req.body.available!==undefined){
    fieldsToUpdate.push("avaialable")
    values.push(req.body.available)
  }
    // const available =req.body.available?req.body.available:"available"
    // const{bookname,author,category} = req.body
    if (fieldsToUpdate.length === 0) {
        return res.status(400).json({ message: "No fields provided to update" });
    }
    const sql = `UPDATE books SET ${fieldsToUpdate.join(', ')} WHERE id = ?`;
    values.push(bookId); 
    // const sql ="Update books SET book_name=?,A  uthor=?,category=?,available=? WHERE id =?";
    pool.query(sql,values,(err,results)=>{
        if(err){
            console.log(err);
            return res.status(500).json({message:"database connection error"})
        }
        console.log(("results"));
        console.log(results.affectedRows);
        if(results.affectedRows>0){
            return res.status(200).json({message:"updated sucessfully"})
        }
        return res.status(200).json({message:"no rows updated"})
    })
}
const deleteBook=(req,res)=>{
    const bookid = req.params.id;
    const sql = "DELETE FROM books WHERE id =?";
    pool.query(sql,[bookid],(err,results)=>{
        if(err){
            return res.status(500).json({message:"server error"})
        }
        if(results.affectedRows>0){
            return res.status(200).json({message:"book deleted sucessfully"})
        }
    })
}
module.exports = { addNewBook,getAllBooks,updateBook,deleteBook };
