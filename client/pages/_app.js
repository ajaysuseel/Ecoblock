import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return(
    <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </>
  )
  
}
