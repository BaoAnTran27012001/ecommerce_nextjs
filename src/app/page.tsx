import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5">
      <div className="w-100 flex justify-end">
        <ThemeToggle />
      </div>
      <h1 className="text-red-500 font-poppins">Welcome to the course</h1>
      <Button variant="destructive">Click Here</Button>
    </div>
  );
}
