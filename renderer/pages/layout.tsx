import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
