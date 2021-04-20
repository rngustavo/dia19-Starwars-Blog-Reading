import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [mensaje, setmensaje] = useState("");
	const { store, actions } = useContext(Context);
	const { islogin } = store;
	const { setLogin } = actions;

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email: email,
			password: password
		};
		//setLogin(true);
		// fetch de LOGIN
		fetch("https://3000-black-koala-jisgb2cv.ws-us03.gitpod.io/login", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);

				// añadir token a session
				//usuario valido
				let token = data.token;
				console.log(token);
				if (token) {
					sessionStorage.setItem("my_token", data.token);
					setLogin(true);
					console.log(islogin);
					setmensaje("");
				} else setmensaje(data.msg);

				// let token = sessionStorage.getItem("my_token")
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="mx-auto pt-5">
			<h1>Login</h1>
			<form onSubmit={handleSubmit} style={{ width: "500px" }}>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input
						onChange={e => {
							setEmail(e.target.value);
							setmensaje("");
						}}
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
					<div id="emailHelp" className="form-text">
						Well never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Password
					</label>
					<input
						onChange={e => setPassword(e.target.value)}
						type="password"
						className="form-control"
						id="exampleInputPassword1"
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
				<div>
					<h2>{mensaje}</h2>
				</div>
			</form>
			{islogin ? <Redirect to="/" /> : null}
		</div>
	);
};
