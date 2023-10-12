import axios from "axios";
import { useCallback, useState } from "react";
import { NextPageContext } from "next";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

import Input from "@/components/Input";
import Head from "next/head";

export async function getServerSideProps(context: NextPageContext) {
	const session = await getSession(context);

	if (session) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
}

const Auth = () => {
	const router = useRouter();

	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");

	const [variant, setVariant] = useState("login");

	const toggleVariant = useCallback(() => {
		setVariant((currentVariant) =>
			currentVariant === "login" ? "register" : "login"
		);
	}, []);

	const login = useCallback(async () => {
		try {
			await signIn("credentials", {
				email,
				password,
				redirect: false,
				callbackUrl: "/",
			});

			router.push("/profiles");
		} catch (error) {
			console.log(error);
		}
	}, [email, password, router]);

	const register = useCallback(async () => {
		try {
			await axios.post("/api/register", {
				email,
				name,
				password,
			});

			login();
		} catch (error) {
			console.log(error);
		}
	}, [email, name, password, login]);

	return (
		<>
		<Head>
      <title> Auth </title>
    </Head>
		<div className="relative h-[100vh] w-[100vw] bg-[url('/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
			<div className="bg-black w-full h-full lg:bg-opacity-70">
				<nav className="px-12 py-5">
					<span className="text-2xl text-green-700 font-bold ">
						CHESS CHAIN
					</span>
				</nav>
				<div className="flex justify-center">
					<div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
						<h2 className="text-white text-4xl mb-8 font-semibold">
							{variant === "login" ? "Sign in" : "Register"}
						</h2>
						<div className="flex flex-col gap-4">
							{variant === "register" && (
								<Input
									id="name"
									type="text"
									label="Username"
									value={name}
									onChange={(e: any) => setName(e.target.value)}
								/>
							)}
							<Input
								id="email"
								type="email"
								label="Email address"
								value={email}
								onChange={(e: any) => setEmail(e.target.value)}
							/>
							<Input
								type="password"
								id="password"
								label="Password"
								value={password}
								onChange={(e: any) => setPassword(e.target.value)}
							/>
						</div>
						<button
							onClick={variant === "login" ? login : register}
							className="bg-green-700 py-3 text-white rounded-md w-full mt-10 hover:bg-green-800 transition"
						>
							{variant === "login" ? "Login" : "Sign up"}
						</button>
						<div className="flex flex-row items-center gap-4 mt-8 justify-center">
							<div
								onClick={() => signIn("github", { callbackUrl: "/profiles" })}
								className="w-10 h-10  rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
							>
								<svg
									className="w-10 h-10"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fillRule="evenodd"
										d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
						</div>
						<p className="text-neutral-500 mt-12">
							{variant === "login"
								? "First time using Chess chain?"
								: "Already have an account?"}
							<span
								onClick={toggleVariant}
								className="text-white ml-1 hover:underline cursor-pointer"
							>
								{variant === "login" ? "Create an account" : "Login"}
							</span>
							.
						</p>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

export default Auth;
