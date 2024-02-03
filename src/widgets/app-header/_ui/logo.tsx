import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="flex items-center space-x-2" href="/">
      <h2 className="text-sky-500">Flow</h2>
          <Image
            src={"/images/logo.png"}
            priority={false}
            alt="Logo"
            height="36"
            width="36"
          />
          <h2 className="text-sky-500">Chat</h2>
    </Link>
  );
}