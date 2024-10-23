const getuser = async () => {
	const token = await JSON.parse(localStorage.getItem("user"));
	console.log("get user component");
	console.log("User from localStorage:", token);

	if (token) {
		console.log("Token found:", token); // Add this line to check if token exists
		const decodetoken = await decodepayload(token);
		console.log("Decoded token:", decodetoken); // Add this line to check if decoding works
		const user = {
			token: token,
			userid: decodetoken.id,
			Username: decodetoken.name,
			lastname: decodetoken.lastname,
			role: decodetoken.role,
		};
		return user;
	} else {
		return {};
	}
};

//I am going numb my soul is feeling

//to decode token we use decoder
const decodepayload = (token) => {
	console.log("Token to decode:", token);
	const base64Url = token.split(".")[1];
	const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
	const jsonpayload = decodeURIComponent(
		atob(base64)
			.split("")
			.map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
			.join(""),
	);
	console.log("Decoded payload:", jsonpayload);
	return JSON.parse(jsonpayload);
};

export default getuser;
