import Image from "next/image";
import { ProfileForm } from "./ui/profileform";
export default function Home() {
  return (
    <main className="signup flex min-h-screen flex-col items-center justify-center">
     <ProfileForm/>
    </main>
  );
}
