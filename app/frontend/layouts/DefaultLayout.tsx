import loadable from "@loadable/component"

// const Header = loadable(() => import('components/Header').then(mod => mod.Header))
const Footer = loadable(() => import('components/Footer').then(mod => mod.Footer))

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    return <>
        {/* header */}
        {/* <Header /> */}
        {children}
        <Footer />
        {/* footer */}
    </>
}