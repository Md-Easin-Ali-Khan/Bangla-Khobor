import { redirect } from "next/navigation";

const defaultId = "01"

export default async function Home() {
  redirect(`category/${defaultId}`)
}
