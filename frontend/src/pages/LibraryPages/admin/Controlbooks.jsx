import React, { useEffect, useState } from "react";
import basepath from "../../../components/url/url";
import UpdateBook from "../../../components/updateBook/UpdateBook";

function Controlbooks() {
	const [books, SetBooks] = useState([]);
	const [openupdate, Setopenupdate] = useState(false);
	const [selectedBook, setSelectedBook] = useState(null);
    const [searchbooks,setSearchBooks]=useState("")
	// const [deleteResponseMessage,setDeleteResponseMessage]
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	
		const fetchBooks = async (page=1) => {
			try {
				const responseb = await basepath.get("/library/getallbooks",{
					params:{
						page,
						limit:10
					}
				});
				console.log(responseb);
				setCurrentPage(page);
				console.log(responseb.data);
			console.log(responseb.data.totalCount);
			setTotalPages(Math.ceil(responseb.data.totalCount / 10));
				console.log(responseb.data);
				console.log(responseb.data.data);
				//  SetBooks(responseb.data)
				SetBooks(responseb.data.data);
				console.log(books);
			} catch (err) {
				console.log(err);
			}
		};
		useEffect(() => {
			fetchBooks(currentPage);
		}, [currentPage]);
	

	const handleClick = async (book) => {
		const newStatus = book.available == "available" ? "taken" : "available";
		console.log(book);
		console.log(book.id);
		try {
			const response = await basepath.patch(`/library/updatebook/${book.id}`, {
				status: newStatus,
			});
			if (response.status == 200) {
				SetBooks(
					books.map((b) =>
						b.id === book.id ? { ...b, available: newStatus } : b,
					),
				);
			}
			console.log(response);
		} catch (err) {
			console.log(err);
		}
	};
	const handleBookDelete = async (book) => {
		console.log("handle delete book is working");
		try {
			const deleteResponse = await basepath.delete(`/library/deletebook/${book.id}`);
			
			console.log(deleteResponse);
			if (deleteResponse.status == 200) {
				SetBooks(books.filter(b => b.id !== book.id));
			}
		} catch (err) {
			console.log(err);
		}
	};
	const handlePageChange = (page) => {
		if (page > 0 && page <= totalPages) {
			setCurrentPage(page);
		}
	};
	return (
		<section className="table-page-wrapper px-5 z-3 position-relative">
			<div className="search-container d-flex justify-content-center gap-4 z-3 position-relative">
				<input
					type="text"
					name="batch"
					placeholder="search by book name"
					onChange={(e)=>setSearchBooks(e.target.value)}
					className="search-input"
				/>
				{/* <button onClick={handleSearch} className="btn btn-danger">
					Search
				</button> */}
			</div>
			<div className="col-sm-4">
        <h2 className="title">manage <span>books</span></h2>
      </div>
			<div className="table-container">
			<table className="table table-dark table-hover z-3 position-relative">
				<thead>
					<tr>
						<th scope="col">Book name</th>
						<th scope="col">Author</th>
						<th scope="col">category</th>
						{/* <th scope="col">publishedYear</th> */}
						<th scope="col">published year</th>
						<th scope="col">status</th>
						<th scope="col">reserve/return</th>
						<th scope="col">update</th>
						<th scope="col">delete</th>
					</tr>
				</thead>
				<tbody>
					{books.filter((b)=>{
						return searchbooks.toLowerCase()===""?b:b.book_name.toLowerCase().includes(searchbooks)
					})
					.map((b) => (
						<tr key={b.id}>
							{/* todo published year */}
							<th scope="row">{b.book_name}</th>
							<td>{b.Author}</td>
							<td>{b.category}</td>
							<td>
							{b.published_year}
							</td>
							<td
								className={
									b.available == "available" ? "text-success" : "text-danger"
								}
							>
								{b.available}
							</td>
							
							<td>
								<button
									onClick={() => handleClick(b)}
									className={
										b.available == "available"
											? "btn btn-outline-danger"
											: "btn btn-outline-primary"
									}
								>
									{b.available == "available" ? "reserve" : "return"}
								</button>
							</td>
							<td>
								<button
									className="btn btn-success"
									onClick={() => {
										Setopenupdate(true);
										setSelectedBook(b);
									}}
								>
									update
								</button>
							</td>
							<td>
								<button
									className="btn btn-danger"
									onClick={()=>{handleBookDelete(b)}}
								>
									Delete
								</button>
							</td>
							{/* {openupdate&&<UpdateBook Setopenupdate={Setopenupdate} book={b} key={b.id} />} */}
							{openupdate && selectedBook && selectedBook.id === b.id && (
								<UpdateBook
									Setopenupdate={Setopenupdate}
									book={selectedBook}
									key={b.id}
								/>
							)}
						</tr>
					))}
				</tbody>
			</table>
			<div className="pagination-controls d-flex justify-content-center align-items-center m-0 p-0">
					<button
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}
						className="btn btn-outline-danger"
					>
						previous
					</button>
					<span className="">
						page {currentPage} of {totalPages}
					</span>
					<button
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						className="btn btn-outline-primary"
					>
						next
					</button>
				</div>
			</div>
			  
			
		</section>
	);
}

export default Controlbooks;
