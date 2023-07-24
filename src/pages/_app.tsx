import { AppProps } from "next/app"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { Provider, useDispatch } from 'react-redux'

import "../styles/main.css"
import { persistor, store } from "../state/store"
import { registerAuthListener } from "../services/users"
import { PersistGate } from "redux-persist/integration/react"
import { setSidebarIsOpen } from "../state/global"

const App = ({ component }: { component: JSX.Element }) => {
  const dispatch = useDispatch()

  const router = useRouter()

  useEffect(() => {

    registerAuthListener();

    const handleRouteChange = () => dispatch(setSidebarIsOpen(false))
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
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <App component={component} />
        </Provider>
      </PersistGate>
    </QueryClientProvider>
  )
}

export default MyApp
