import logo from '../assets/logo.png'
import Icon from './Icon'
import { WHATSAPP_DISPLAY } from '../data'

export default function Footer() {
  return (
    <footer className="site-footer" id="contato">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="CR Limpeza Profissional" />
            <p>Qualidade, economia e praticidade para deixar tudo sempre limpo!</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <Icon name="facebook" alt="" />
              </a>
              <a href="#" aria-label="Instagram">
                <Icon name="instagram" alt="" />
              </a>
              <a href="#" aria-label="WhatsApp">
                <Icon name="whatsapp" alt="" />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>FALE CONOSCO</h5>
            <ul className="footer-contact">
              <li>
                <Icon name="whatsapp" alt="" />
                <span>{WHATSAPP_DISPLAY}</span>
              </li>
              <li>
                <Icon name="house" alt="" />
                <span>São Gonçalo - RJ</span>
              </li>
              <li>
                <Icon name="headset" alt="" />
                <span>Segunda a Sábado - 8h às 18h</span>
              </li>
            </ul>
            <div className="payment-icons">
              <span>
                <Icon name="pix" alt="Pix" />
              </span>
              <span>
                <Icon name="visa" alt="Visa" />
              </span>
              <span>
                <Icon name="mastercard" alt="Mastercard" />
              </span>
              <span>
                <Icon name="hipercard" alt="Hipercard" />
              </span>
              <span>
                <Icon name="boleto" alt="Boleto" />
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} CR Limpeza. Todos os direitos reservados. Desenvolvido com{' '}
          <a href="#">❤</a> para você!
        </div>
      </div>
    </footer>
  )
}
