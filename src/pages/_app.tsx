import { AppProps } from "next/app"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { RecoilRoot, useRecoilState } from "recoil"
import { sidebarIsOpenState } from "../state/old-state"
import { Provider } from 'react-redux'

import "../styles/main.css"
import { store } from "../state/store"
import { registerAuthListener } from "../services/users"

const App = ({ component }: { component: JSX.Element }) => {
  const [, setSidebarIsOpen] = useRecoilState(sidebarIsOpenState)

  const router = useRouter()

  useEffect(() => {

    registerAuthListener();

    const handleRouteChange = () => setSidebarIsOpen(false)
    router.events.on("routeChangeStart", handleRouteChange)
    return () => router.events.off("routeChangeStart", handleRouteChange)
  }, [])

  return component
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient()

  const component = <Component {...pageProps} />

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Provider store={store}>
          <App component={component} />
        </Provider>
      </RecoilRoot>
    </QueryClientProvider>
  )
}

export default MyApp
