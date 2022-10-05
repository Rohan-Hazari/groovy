import { ContextProvider } from "../contexts/ContextProvider";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      {/* set active menu */}
      <div className="flex">
        <Sidebar />

        <div className="min-h-screen w-full bg-woman-in-black bg-contain bg-right bg-no-repeat">
          <div className="w-full">
            <Navbar />
          </div>

          <div>
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </ContextProvider>
  );
};

export default MyApp;
