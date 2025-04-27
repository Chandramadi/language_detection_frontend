import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './App.jsx'
import TextDetection from './pages/TextDetection'
import Layout from './components/Layout'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><App /></Layout>} />
        <Route path="/text-detection" element={<Layout><TextDetection /></Layout>} />
        <Route path="/:lang" element={<Layout><App /></Layout>} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
