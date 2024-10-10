import Link from "next/link";
import { Button } from "../ui/button";
import { FaPaw } from "react-icons/fa6";

const Logo = () => {
  return (
    <Button
      asChild
      variant="ghost"
      className="hover:bg-transparent hover:text-red-500"
    >
      <Link href="/">
        <FaPaw size={40} />
        <span className="ml-2 text-4xl uppercase">paws</span>
      </Link>
    </Button>
  );
};
export default Logo;
