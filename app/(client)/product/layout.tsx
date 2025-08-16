import Header from "@/components/header/Header";
import Footer from "@/components/common/Footer";
import CartMenu from "@/components/common/CartMenu";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
      <CartMenu />
      <Footer />
    </>
  );
}
