import React from "react";

function Footer() {
	return (
		<div
			className="bg-dark mt-5"
			style={{
				height: "50px",
				display: "grid",
				justifyContent: "center",
				alignItems: "center",
				fontSize: "0.875em",
			}}>
			<p className="text-white">Copyright © Your Website 2022</p>
		</div>
	);
}

export default Footer;
