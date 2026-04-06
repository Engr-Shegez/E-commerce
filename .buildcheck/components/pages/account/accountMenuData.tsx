import {
  FaClipboardList,
  FaRegHeart,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { IoBookmarks } from "react-icons/io5";
import { IoMdBookmarks } from "react-icons/io";
import { MdStars } from "react-icons/md";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";

export const accountMenuItems = [
  { title: "Orders", icon: <IoBookmarks />, href: "/account/orders" },
  { title: "Cart", icon: <FaShoppingCart />, href: "/cart" },
  { title: "Edit Profile", icon: <FaUser />, href: "/account/edit" },
  { title: "Addresses", icon: <IoMdBookmarks />, href: "/account/addresses" },
  { title: "WishList", icon: <FaRegHeart />, href: "/wishlist" },
  {
    title: "Your Transactions",
    icon: <PiCurrencyDollarSimpleFill />,
    href: "/account/transactions",
  },
  { title: "Tech Points", icon: <MdStars />, href: "/account/points" },
  { title: "Quote", icon: <FaClipboardList />, href: "/account/quote" },
  { title: "Quick Add", icon: <FaCirclePlus />, href: "/account/add" },
];
