import HomePage from "~/pages/home";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Restro - Homepage" },
    { name: "description", content: "Welcome to Restro!" },
  ];
}

export default function Home() {
  return <HomePage />;
}
