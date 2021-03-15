import Theme from "config/styled";

function MyApp({ Component, pageProps }: any) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
