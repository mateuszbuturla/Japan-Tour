import Theme from "config/styled";
import { Footer } from "components/layout";

function MyApp({ Component, pageProps }: any) {
  return (
    <Theme>
      <Component {...pageProps} />
      <Footer />
    </Theme>
  );
}

export default MyApp;
