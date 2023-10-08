import { createRoot } from 'react-dom/client'
import './styles.css'
import { Overlay } from './components'
import { Canvas } from './components'
createRoot(document.getElementById('root')).render(
  <>
<Canvas/>
    <Overlay />
  </>
)
