import Link from "next/link";

interface MiniNavProps {
  href: string;
  img: string;
  imgSize: { width: string; height: string };
  desc: string;
}
const MiniNav: React.FC<MiniNavProps> = ({ href, img, desc, imgSize }) => {
  return (
    <Link
      href={href}
      className="grid grid-rows-[30px,20px] items-end justify-center h-full bg-white min-w-0 w-full px-3"
    >
      <img
        className="mx-auto"
        src={img}
        width={imgSize.width}
        height={imgSize.height}
      />
      <span className="my-auto text-black text-sm font-light w-full">
        {desc}
      </span>
    </Link>
  );
};

export default MiniNav;