import { AppProps } from "next/app"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import Notification from "../components/sub-components/Notification"
import { NotificationState, sidebarIsOpenState } from "../state/state"

import "../styles/main.css"

const App = ({ component }: { component: JSX.Element }) => {
  const [, setSidebarIsOpen] = useRecoilState(sidebarIsOpenState)
  const notification = useRecoilValue(NotificationState)

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => setSidebarIsOpen(false)
    router.events.on("routeChangeStart", handleRouteChange)
    return () => router.events.off("routeChangeStart", handleRouteChange)
  }, [])

  return (
    <>
      <Notification {...notification} />
      {component}
    </>
  )
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient()

  const component = <Component {...pageProps} />

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <App component={component} />
      </RecoilRoot>
    </QueryClientProvider>
  )
}

export default MyApp
