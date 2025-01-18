import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import FavoritesContextProvider from './context/FavoritesContext.jsx'

createRoot(document.getElementById('root')).render(
 <FavoritesContextProvider>
  <Provider store={store}>
  <App />
</Provider>
 </FavoritesContextProvider>
)
