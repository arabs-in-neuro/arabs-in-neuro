import React from "react";
import "../app/styles/tailwind.css";
import LanguageContext from "../context/LanguageContext";
import Navbar from "../app/components/Navbar";
import Footbar from "../app/components/FootBar";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ReactGA from "react-ga4";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    console.log("GA is running");

    ReactGA.initialize("G-MT2DWPRC04", {
      gaOptions: { debug_mode: true },
    });

    const handleRouteChange = (url) => {
      console.log("Tracking page:", url);

      ReactGA.send({
        hitType: "pageview",
        page: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // track first load
    handleRouteChange(window.location.pathname);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  
  const enContent = require("../locales/enContent.json");
  const arContent = require("../locales/arContent.json");
  const [preferredLanguage, setPreferredLanguage] = React.useState("en");
  const currentContent = preferredLanguage === "en" ? enContent : arContent;

  const isArabic = preferredLanguage === "ar";

  const direction = isArabic ? "rtl" : "ltr";
  const Layout = Component.Layout || (({ children }) => <>{children}</>);

  return (
    <LanguageContext.Provider
      value={{
        preferredLanguage,
        currentContent,
        setPreferredLanguage,
      }}
    >
      <div dir={direction} className="flex flex-col min-h-screen">
        <Head>
          <link rel="icon" href="/logo/ain.png" />
        </Head>
        <Navbar setPreferredLanguage={setPreferredLanguage} />
        <div className="mt-20 flex-grow">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
        <Footbar setPreferredLanguage={setPreferredLanguage} />
      </div>
    </LanguageContext.Provider>
  );
}

export default MyApp;
