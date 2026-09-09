import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import InfoBar from './components/InfoBar'
import Banners from './components/Banners'
import Products from './components/Products'
import Kits from './components/Kits'
import Lixeiras from './components/Lixeiras'
import Sinuca from './components/Sinuca'
import BeforeAfter from './components/BeforeAfter'
import Gallery from './components/Gallery'
import ServiceForm from './components/ServiceForm'
import Indique from './components/Indique'
import WhyChoose from './components/WhyChoose'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import OrderModal from './components/OrderModal'
import CartModal from './components/CartModal'
import FloatCart from './components/FloatCart'
import CookieConsent from './components/CookieConsent'
import { OrderModalProvider } from './context/OrderModalContext'
import { CartProvider } from './context/CartContext'
import { getConsent } from './utils/cookieConsent'
import { detectVisitSource } from './utils/customerTracking'

export default function App() {
  // Só identifica a origem da visita (link/indicação/campanha) se o
  // visitante já tiver aceitado os cookies em uma visita anterior.
  useEffect(() => {
    if (getConsent() === 'accepted') detectVisitSource()
  }, [])

  return (
    <CartProvider>
      <OrderModalProvider>
        <Header />
        <main>
          {/* Ordem pensada para o funil de conversão:
              Hero -> Produtos -> Kits -> Lixeiras -> Sinuca -> Transformações reais (com CTA) -> Galeria -> Contratar serviço */}
          <Hero />
          <InfoBar />
          <Banners />
          <Products />
          <Kits />
          <Lixeiras />
          <Sinuca />
          <BeforeAfter />
          <Gallery />
          <ServiceForm />
          <WhyChoose />
          <Testimonials />
          <Indique />
        </main>
        <Footer />
        <OrderModal />
        <CartModal />
        <FloatCart />
        <CookieConsent />
      </OrderModalProvider>
    </CartProvider>
  )
}
