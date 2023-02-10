import { Box } from "@chakra-ui/react";
import { Header } from "components/Header";
import { Posts } from "components/Posts";
import DefaultLayout from "layouts/DefaultLayout";
import { PageWithLayout } from "types/app";
import { renderPage } from "utils/render";

const Home = (): PageWithLayout => {
    return <>
        <Header />
        <Box px={3}>
            <Posts data={[{ id: 1, title: "2" }, { id: 1, title: "1234" }]} />
        </Box>
    </>
}

Home.Layout = DefaultLayout

export default renderPage(Home)