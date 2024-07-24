import React, { useState } from "react";
import "./updatebook.css";
import basepath from "../url/url";
function UpdateBook({ Setopenupdate, book }) {
	console.log(book);
	const [bookname, setBookname] = useState("");
	const [Author, setAuthor] = useState("");
	const [category, setCategory] = useState("");
	const [message, setMessage] = useState("");
	const formdata = { bookname, Author, category };
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await basepath.patch(
				`/library/updatebook/${book.id}`,
				formdata,
			);
			setMessage(response.data.message);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<>
			<div className="updateBook col-lg-6 col-md-12 flex align-items-center mx-auto">
				<div className="contact-main white-bg p-5  ">
					<div className="d-flex justify-content-between">
						<h2 className="title mb-4">
							update <span>book </span>
						</h2>
						<button
							onClick={() => Setopenupdate(false)}
							className="updateButton btn btn-outline-danger px-4  "
						>
							X
						</button>
					</div>

					<h6 className="text-black">
						please fill the fields only you want to update
					</h6>
					<form id="update-form" onSubmit={handleSubmit}>
						<div className="messages"></div>
						<div className="form-group">
							<input
								id="book_name"
								type="text"
								name="book_name"
								className="form-control"
								placeholder={book.book_name}
								data-error="Username is required."
								onChange={(e) => setBookname(e.target.value)}
							/>
							<div className="help-block with-errors"></div>
						</div>
						<div className="form-group">
							<input
								id="Author"
								name="Author"
								className="form-control"
								placeholder={book.Author}
								onChange={(e) => setAuthor(e.target.value)}
							/>
							<div className="help-block with-errors"></div>
						</div>
						<div className="form-group">
							<input
								id="category"
								name="category"
								className="form-control"
								placeholder={book.category}
								onChange={(e) => setCategory(e.target.value)}
							/>
							<div className="help-block with-errors"></div>
						</div>

						<button type="submit" className="btn btn-border btn-radius">
							<span>update</span>
						</button>
						<p className="mt-3" style={{ color: "red" }}>
							{message}
						</p>
					</form>
				</div>
			</div>
		</>
	);
}

export default UpdateBook;
