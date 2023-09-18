import React from "react";

import useSignInAction from "./useSignInAction";
import { LOGIN_BTN_LBL, WHATS_APP_TITLE } from "../../lib/properties/properties";
import "./style.css";

const SignIn: React.FC = () => {

	const {
		phoneNumber,
		password,
		handlePhoneNumberChange,
		handlePasswordChange,
		handleSubmit
	} = useSignInAction(); // Use the hook

	return (
		<div className="login-container">
			<div className="login-box">
				<h1>{WHATS_APP_TITLE}</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Phone number"
						value={phoneNumber}
						onChange={(e) => handlePhoneNumberChange(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => handlePasswordChange(e.target.value)}
					/>
					<button type="submit">{LOGIN_BTN_LBL}</button>
				</form>
			</div>
		</div>
	);
};

export default SignIn;
