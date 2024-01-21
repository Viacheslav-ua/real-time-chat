import { Button } from "@/shared/ui/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p>Messenger</p>
      <Button size={"lg"} variant={"ghost"} color="antialiased">
        Button default
      </Button>
    </div>
  );
}
