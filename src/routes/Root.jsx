import { Outlet } from "react-router-dom"
import React from 'react';



const Root = () => {
    

	return (
	<div>
		<header>
			<nav>
				<ul></ul>
			</nav>
		</header>
		<main>
		<Outlet/>
		</main>
		<footer>
		</footer>
	</div>
	);
}

export default Root