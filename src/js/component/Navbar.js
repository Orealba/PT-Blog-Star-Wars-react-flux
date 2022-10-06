import React, { useContext } from "react";
import { Link } from "react-router-dom";
import   "../../styles/Navbar.css"
import star_wars_logo from "/src/img/star_wars_logo.png"
import { Context } from "../store/appContext"

export const Navbar = () => {
	const {store,actions}= useContext(Context)
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light  navbarBlog">
				<div className="container-fluid">
				
				<Link to={'/'}>
                        <button href="#" className="btn btn-primary botonlogo"><img src={star_wars_logo}  className="logo" /></button>
                        </Link>
					<div className="btn-group dropstart">
						
						<button
						type="button"
						className="btn btn-secondary dropdown-toggle favoritosBoton "
						data-bs-toggle="dropdown"
						aria-expanded="false">
									Favoritos
									
						</button>	

							<ul className="dropdown-menu">
								{store.favPer.length ==0? "Sin personajes":
								store.favPer.map((name,i)=>{
									return <li key={i}>{name}</li>
									})
								}
								<hr></hr>
								{store.favPeli.length ==0? "Sin películas":
								store.favPeli.map((name,i)=>{
									return <li key={i}>{name}</li>
									})
								}
								<hr></hr>
								{store.favPla.length ==0? "Sin planetas":
								store.favPla.map((name,i)=>{
									return <li key={i}>{name}</li>
									})
								}

								
								

							</ul>	
						
							 
					
							
						
					
						
					</div>
				</div>
			</nav>
		</>
	);
};

