import React from "react";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand text-white fw-bolder ps-5" href="#">
					Start Bootstrap
				</a>
				<div>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarNavDropdown">
						<div className="d-flex justify-content-end">
							<ul className="navbar-nav">
								<li className="nav-item">
									<a
										className="nav-link active text-white fw-bolder"
										aria-current="page"
										href="#">
										Home
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link text-muted text-opacity-25 fw-bolder"
										href="#">
										About
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link text-muted text-opacity-25 fw-bolder"
										href="#">
										Service
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link text-muted text-opacity-25 fw-bolder "
										href="#">
										Contact
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
