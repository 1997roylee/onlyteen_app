import { PageWithLayout } from 'types/app';

export const renderPage = (Page: PageWithLayout) => {
    const Layout = Page.Layout || null
    const Component = () => <Layout>
        <Page />
    </Layout>

    Component.displayName = 'Page'

    return Component
}