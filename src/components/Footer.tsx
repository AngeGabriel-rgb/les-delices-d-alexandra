import { Facebook, Instagram, Mail, Phone, MessageCircle, Video } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Les Délices d'Alexandra</h3>
            <p className="text-sm">
              Votre destination gourmande pour des douceurs exquises et des créations pâtissières uniques.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">Adresse: Libreville, Gabon</p>
            <p className="text-sm">Email: lesdelicesdalexandra@gmail.com</p>
            <p className="text-sm">Téléphone: +241 74 50 41 03</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="list-none p-0">
              <li>
                <a href="#" className="text-sm hover:text-gray-300">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/Lesdelicesdalexandra"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all transform hover:scale-110"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/lesdelicesdalexandra/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all transform hover:scale-110"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:lesdelicesdalexandra@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all transform hover:scale-110"
                title="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+24174504103"
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all transform hover:scale-110"
                title="Téléphone"
              >
                <Phone size={20} />
              </a>
              <a
                href="https://wa.me/24174504103"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all transform hover:scale-110"
                title="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@les.dlices.dalex?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all transform hover:scale-110"
                title="TikTok"
              >
                <Video size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm">&copy; {new Date().getFullYear()} Les Délices d'Alexandra. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
