import CartMenu from "@/components/common/CartMenu";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <CartMenu />
    </>
  );
}
