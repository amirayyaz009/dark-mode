import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
