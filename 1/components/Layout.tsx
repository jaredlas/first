// components/Layout.js
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Web Portfolio</title>
      </Head>
      <main className="w-full flex-1 flex flex-col items-center justify-center px-20 text-center">
        {children}
      </main>
      <footer className="w-full h-24 flex items-center justify-center border-t">
        <p>© 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
