import Link from "next/link";
import Image from "next/image";
import GODL from "@/public/images/GODL.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
          <Image
            className="rounded-md transition-all duration-500 hover:shadow-lg hover:shadow-indigo-500"
            src={GODL}
            alt="Cruip Logo"
            width={162}
            height={62}
          />
        </Link>
  );
}
