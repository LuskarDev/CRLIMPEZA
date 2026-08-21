import Icon from './Icon'
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../data'

export default function Footer() {
  return (
    <footer className="site-footer" id="contato">
      <div className="wrap">
        <div className="footer-strip">
          <div className="footer-strip-item">
            <span className="footer-strip-icon">
              <Icon name="whatsapp" alt="" />
            </span>
            <div>
              <strong>Fale conosco agora pelo WhatsApp</strong>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-strip-highlight"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </div>
          </div>

          <div className="footer-strip-item">
            <span className="footer-strip-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3.5 2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <strong>Atendimento</strong>
              <span className="footer-strip-text">
                Segunda a Sexta: 8h às 18h
                <br />
                Sábado: 8h às 12h
              </span>
            </div>
          </div>

          <div className="footer-strip-item">
            <span className="footer-strip-icon">
              <Icon name="house" alt="" />
            </span>
            <div>
              <strong>Localização</strong>
              <span className="footer-strip-text">São Gonçalo - RJ</span>
            </div>
          </div>

          <div className="footer-strip-item">
            <span className="footer-strip-icon">
              <Icon name="peopleplus" alt="" />
            </span>
            <div>
              <strong>Siga-nos</strong>
              <span className="footer-strip-text">Acompanhe nosso trabalho nas redes sociais!</span>
              <div className="footer-strip-social">
                <a href="#" aria-label="Instagram">
                  <Icon name="instagram" alt="" />
                </a>
                <a href="#" aria-label="Facebook">
                  <Icon name="facebook" alt="" />
                </a>
              </div>
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
