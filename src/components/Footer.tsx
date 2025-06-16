
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-kre-violet to-kre-pink-bright text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">KRE Shop</h3>
            <p className="text-white/80 mb-4 max-w-md">
              Votre boutique de mode préférée, proposant une sélection unique de vêtements 
              pour hommes et femmes. Style, qualité et élégance à chaque saison.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/kreshop"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all transform hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/kreshop"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:contact@kreshop.fr"
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+33123456789"
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all transform hover:scale-110"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('home');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  À propos
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('gallery');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Galerie
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-white/80">
              <p>123 Rue de la Mode</p>
              <p>75001 Paris, France</p>
              <p>+33 1 23 45 67 89</p>
              <p>contact@kreshop.fr</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm">
            © {currentYear} KRE Shop. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
              Politique de confidentialité
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
              Conditions d'utilisation
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
