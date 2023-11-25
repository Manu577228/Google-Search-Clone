import Image from "next/image";
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

const Header: React.FC = () => {
  const url: string =
    "https://cdn.pixabay.com/photo/2016/06/07/23/12/letter-1442857_640.png";

  return (
    <div className="flex justify-between px-4 py-3 md:px-8 md:py-4 items-center">
      <div className="flex space-x-4 items-center">
        <Link
          href="https://mail.google.com"
          className="text-xs md:text-sm hover:underline cursor-pointer"
        >
          Gmail
        </Link>
        <Link
          href="https://images.google.com"
          className="text-xs md:text-sm hover:underline cursor-pointer"
        >
          Images
        </Link>
      </div>
      <div className="flex items-center">
        <TbGridDots className="text-2xl cursor-pointer" />
        <Image
          src={url}
          alt="picture"
          width={30}
          height={30}
          className="rounded-full object-cover cursor-pointer ml-2 md:ml-4"
        />
      </div>
    </div>
  );
};

export default Header;
