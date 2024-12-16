import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaPinterestP } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import Logo from "../navbar/Logo";

function Footer() {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center w-full">
      <div className="max-w-7xl w-full flex justify-center p-16 sm:px-10 lg:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="w-full">
            <Logo />
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              illum tempora quos id.
            </p>
            <ul className="flex gap-4 text-2xl">
              <li className="cursor-pointer hover:text-gray-300 hover:scale-110 transition-all duration-100"><a href="#"><FaFacebookF /></a></li>
              <li className="cursor-pointer hover:text-gray-300 hover:scale-110 transition-all duration-100"><a href="#"><FaInstagram /></a></li>
              <li className="cursor-pointer hover:text-gray-300 hover:scale-110 transition-all duration-100"><a href="#"><FaPinterestP /></a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
            <ul>
              <li className="underline cursor-pointer hover:text-gray-300"><a href="#">Sets & Bundles</a></li>
              <li className="underline cursor-pointer hover:text-gray-300"><a href="#">Build Your Set</a></li>
              <li className="underline cursor-pointer hover:text-gray-300"><a href="#">All products</a></li>
              <li className="underline cursor-pointer hover:text-gray-300"><a href="#">Lookbook</a></li>
              <li className="underline cursor-pointer hover:text-gray-300"><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">CONTACT INFO</h3>
            <p>Streen Name, City, Lithuania</p>
            <p className="underline cursor-pointer hover:text-gray-300">mail@example.com</p>
            <p>(123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">NEWSLETTER</h3>
          <div className="relative w-full">
            <input
                type="text"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none bg-transparent"
            />
            <IoIosSend className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer text-2xl hover:text-gray-300 transition-all duration-300" />
          </div>
          </div>
        </div>
      </div>
      <div className="py-4 flex justify-center border-t-[1px] border-gray-400 w-full">
        Copyright © {new Date().getFullYear()}
      </div>
    </div>
  );
}
export default Footer;
