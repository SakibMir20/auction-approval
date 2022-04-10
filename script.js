document.querySelector("#token").addEventListener("change", function () {
	localStorage.setItem("token", this.value);
});

document.querySelector("#token").value = localStorage.getItem("token");

document.querySelector("#submit-button").addEventListener("click", function () {
	const hostUrl = document.querySelector("#host-url").value;
	const token = localStorage.getItem("token");
	const auctionID = document.querySelector("#id").value;
	const status = document.querySelector("#status").value;

	const obj = {
		approval: status,
	};
	const apiUrl = `${hostUrl}/api/admin/auctions-update/${auctionID}`;
	fetch(apiUrl, {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			authorization: `Bearer ${token}`,
		},
		method: "PATCH",
		body: JSON.stringify(obj),
	})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);
		});
});
