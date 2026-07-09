import Header from './components/Header'
import Hero from './components/Hero'
import InfoBar from './components/InfoBar'
import Products from './components/Products'
import Kits from './components/Kits'
import Services from './components/Services'
import BeforeAfter from './components/BeforeAfter'
import Gallery from './components/Gallery'
import ServiceForm from './components/ServiceForm'
import Indique from './components/Indique'
import WhyChoose from './components/WhyChoose'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import OrderModal from './components/OrderModal'
import { OrderModalProvider } from './context/OrderModalContext'

export default function App() {
  return (
    <OrderModalProvider>
      <Header />
      <main>
        <Hero />
        <InfoBar />
        <Products />
        <Kits />
        <Services />
        <BeforeAfter />
        <Gallery />
        <ServiceForm />
        <Indique />
        <WhyChoose />
        <Testimonials />
      </main>
      <Footer />
      <OrderModal />
    </OrderModalProvider>
  )
}
