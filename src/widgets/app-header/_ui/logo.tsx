import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="flex items-center" href="/">
      <span className="text-sky-500 text-sm font-semibold">Flow</span>
      <Image
        src={"/images/logo.png"}
        priority={false}
        alt="Logo"
        height="36"
        width="36"
      />
      <span className="text-sky-500 text-sm font-semibold">Chat</span>
    </Link>
  );
}
