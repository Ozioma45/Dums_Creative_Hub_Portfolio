import { useEffect } from "react";
//import { Footer } from "./elements/Footer";
import { Navbar } from "./elements/Navbar";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export const Layout = ({ title, children }: LayoutProps) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <Navbar />

      <main className="flex flex-col gap-y-6 md:gap-y-15 overflow-hidden lg:mx-30 sm:mx-20 mx-5">
        {children}
      </main>

      {/*<Footer />*/}
    </>
  );
};
