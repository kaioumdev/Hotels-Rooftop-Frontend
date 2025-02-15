import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ToastContainer />
    <RouterProvider router={router}>
    </RouterProvider>
  </Provider>,
)
