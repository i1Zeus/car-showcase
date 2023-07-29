import Link from "next/link";
import Image from "next/image";

import Button from "@/components/button";

const Navbar = () => {
  return (
    <div className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            alt="CarHub Logo"
            src={"logo.svg"}
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <Button
          title="Sign In"
          type="button"
          className="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </div>
  );
};

export default Navbar;
