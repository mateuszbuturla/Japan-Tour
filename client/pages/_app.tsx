import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import Theme from "config/styled";
import { Footer, Nav } from "components/layout";
import { theme } from "config/styled";

const progress = new ProgressBar({
  size: 3,
  color: theme.colors.first,
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }: any) {
  return (
    <Theme>
      <Nav />
      <div>
        <Component {...pageProps} />
        <Footer />
      </div>
    </Theme>
  );
}

export default MyApp;
