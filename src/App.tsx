import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import GlobalStyle from './Styles/global'
import store from './Redux/store'
import RegisterContact from './Pages/RegisterContact'

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: '/add-contact',
    element: (
      <>
        <RegisterContact />
      </>
    ),
  },
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={routes} />
    </Provider>
  )
}

export default App
