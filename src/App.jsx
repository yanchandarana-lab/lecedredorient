import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Presentation from './components/Presentation'
import Gallery from './components/Gallery'
import PracticalInfo from './components/PracticalInfo'
import MenuModal from './components/MenuModal'
import Footer from './components/Footer'

function App() {
  const [modal, setModal] = useState(null) // null | 'order' | 'full'

  return (
    <>
      <Header onOpenMenu={() => setModal('full')} onOpenOrder={() => setModal('order')} />
      <main>
        <Hero />
        <Presentation />
        <Gallery />
        <PracticalInfo />
      </main>
      <Footer />
      {modal && <MenuModal mode={modal} onClose={() => setModal(null)} />}
    </>
  )
}

export default App
