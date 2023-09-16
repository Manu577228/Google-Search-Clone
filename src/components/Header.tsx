import Image from "next/image";
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

const Header: React.FC = () => {
  const url: string =
    "https://cdn.pixabay.com/photo/2016/06/07/23/12/letter-1442857_640.png";

  return (
    <div className="flex justify-end pr-4 pt-3 space-x-4 items-center">
      <Link
        href="https://mail.google.com"
        className="text-sm hover:underline cursor-pointer"
      >
        Gmail
      </Link>
      <Link
        href="https://images.google.com"
        className="text-sm hover:underline cursor-pointer"
      >
        Images
      </Link>
      <TbGridDots className="cursor-pointer" />
      <Image
        src={url}
        alt="picture"
        width={30}
        height={100}
        className="rounded-full object-cover cursor-pointer"
      />
    </div>
  );
};

export default Header;
