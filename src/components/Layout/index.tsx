import { memo } from "react";
import Head from "next/head";
import { Header, Container } from "components";
import { LayoutProps } from "./types";
import { useIntl } from "react-intl";
import * as C from "@chakra-ui/react";

const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
  const { formatMessage } = useIntl();

  const isHomepage = title === formatMessage({ id: "page.home.title" });

  const currentPageTitle = isHomepage
    ? formatMessage({ id: "page.home.title" })
    : `${formatMessage({ id: "page.home.title" })} | ${title}`;

  return (
    <>
      <Head>
        <title>{currentPageTitle}</title>
        <meta name="description" content={formatMessage({ id: description })} />
      </Head>
      <Container>
        <Header />
        {children}
      </Container>
    </>
  );
};

export default memo(Layout);
