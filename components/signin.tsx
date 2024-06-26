"use client";

import { Label } from "./label";
import { Input } from "./input";
import { useState } from "react";
import { signIn } from "next-auth/react";

const SignIn: React.FC = () => {
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		setLoading(true);
		e.preventDefault();
		signIn("email", {
			email: email,
			callbackUrl: `${window.location.origin}/me`
		});
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4 w-96">
			<div className="space-y-2">
				<Label htmlFor="email">Email</Label>
				<Input
					id="email"
					name="email" 
					placeholder="norman@tae.com"
					required
					type="email"
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<button
				disabled={loading}
				className="bg-zinc-900 py-2 text-zinc-100 shadow hover:bg-zinc/90 w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
				type="submit"
			>
				Send Verification Link
			</button>
		</form>
	);
};

export default SignIn;