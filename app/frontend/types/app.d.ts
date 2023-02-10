// eslint-disable-next-line @typescript-eslint/ban-types
export type PageWithLayout = EmotionJSX.Element & {
    // getLayout?: (page: ReactElement) => ReactNode
    Layout?: EmotionJSX.Element
}

// type AppPropsWithLayout = {
//     Component: PageWithLayout
// }
