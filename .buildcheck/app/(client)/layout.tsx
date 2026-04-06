import Header from "@/components/header/Header";
import Footer from "@/components/common/Footer";
import CartMenu from "@/components/common/CartMenu";
import LinkBadge from "@/components/common/LinkBadge";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <LinkBadge />
      {children}
      <CartMenu />
      <Footer />
    </>
  );
}
