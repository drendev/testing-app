
import db from "@/lib/db";
import { redirect } from "next/navigation";

export default async function MePage() {
	const me = await db.user.current();
	if (!me) redirect("/auth/signin");

	return <p>{me ? `Signed in as ${me.email}.` : "You are not signed in."}</p>;
}