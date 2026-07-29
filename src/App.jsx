import Header from './components/Header'
import Hero from './components/Hero'
import InfoBar from './components/InfoBar'
import Banners from './components/Banners'
import Products from './components/Products'
import Kits from './components/Kits'
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
import { OrderModalProvider } from './context/OrderModalContext'
import { CartProvider } from './context/CartContext'

export default function App() {
  return (
    <CartProvider>
      <OrderModalProvider>
        <Header />
        <main>
          <Hero />
          <InfoBar />
          <Banners />
          <Products />
          <Kits />
          <BeforeAfter />
          <Gallery />
          <ServiceForm />
          <Indique />
          <WhyChoose />
          <Testimonials />
        </main>
        <Footer />
        <OrderModal />
        <CartModal />
        <FloatCart />
      </OrderModalProvider>
    </CartProvider>
  )
}
