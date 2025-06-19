import { Facebook, Instagram, Mail, Phone, MessageCircle, Video, MapPin, Clock, Heart } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white py-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-300 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                <Heart size={16} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                Les Délices d'Alexandra
              </h3>
            </div>
            <p className="text-purple-100 leading-relaxed">
              Votre destination gourmande pour des douceurs exquises et des créations pâtissières uniques, préparées
              avec amour et passion depuis le cœur du Gabon.
            </p>
            <div className="flex items-center space-x-2 text-purple-200">
              <Clock size={16} />
              <span className="text-sm">Ouvert tous les jours</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 text-pink-300">Contactez-nous</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-purple-100 hover:text-white transition-colors">
                <MapPin size={18} className="text-pink-400 flex-shrink-0" />
                <span className="text-sm">Libreville, Gabon</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-100 hover:text-white transition-colors">
                <Mail size={18} className="text-pink-400 flex-shrink-0" />
                <a href="mailto:lesdelicesdalexandra@gmail.com" className="text-sm hover:underline">
                  lesdelicesdalexandra@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-purple-100 hover:text-white transition-colors">
                <Phone size={18} className="text-pink-400 flex-shrink-0" />
                <a href="tel:+24174504103" className="text-sm hover:underline">
                  +241 74 50 41 03
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 text-pink-300">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-purple-100 hover:text-pink-300 transition-colors text-sm flex items-center space-x-2 group"
                >
                  <span className="w-1 h-1 bg-pink-400 rounded-full group-hover:w-2 transition-all"></span>
                  <span>Accueil</span>
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-purple-100 hover:text-pink-300 transition-colors text-sm flex items-center space-x-2 group"
                >
                  <span className="w-1 h-1 bg-pink-400 rounded-full group-hover:w-2 transition-all"></span>
                  <span>Notre Collection</span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-purple-100 hover:text-pink-300 transition-colors text-sm flex items-center space-x-2 group"
                >
                  <span className="w-1 h-1 bg-pink-400 rounded-full group-hover:w-2 transition-all"></span>
                  <span>À Propos</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-purple-100 hover:text-pink-300 transition-colors text-sm flex items-center space-x-2 group"
                >
                  <span className="w-1 h-1 bg-pink-400 rounded-full group-hover:w-2 transition-all"></span>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 text-pink-300">Suivez-nous</h3>
            <p className="text-purple-100 text-sm mb-4">
              Découvrez nos dernières créations et actualités sur nos réseaux sociaux
            </p>
            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://www.facebook.com/Lesdelicesdalexandra"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-110 hover:shadow-lg group"
                title="Facebook"
              >
                <Facebook size={20} className="mx-auto group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.instagram.com/lesdelicesdalexandra/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-110 hover:shadow-lg group"
                title="Instagram"
              >
                <Instagram size={20} className="mx-auto group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:lesdelicesdalexandra@gmail.com"
                className="bg-gradient-to-r from-red-500 to-red-600 p-3 rounded-xl hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-110 hover:shadow-lg group"
                title="Email"
              >
                <Mail size={20} className="mx-auto group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="tel:+24174504103"
                className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-110 hover:shadow-lg group"
                title="Téléphone"
              >
                <Phone size={20} className="mx-auto group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://wa.me/24174504103"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-400 to-green-500 p-3 rounded-xl hover:from-green-500 hover:to-green-600 transition-all transform hover:scale-110 hover:shadow-lg group"
                title="WhatsApp"
              >
                <MessageCircle size={20} className="mx-auto group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.tiktok.com/@les.dlices.dalex?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gray-800 to-gray-900 p-3 rounded-xl hover:from-gray-900 hover:to-black transition-all transform hover:scale-110 hover:shadow-lg group"
                title="TikTok"
              >
                <Video size={20} className="mx-auto group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-purple-700/50 pt-8 mb-8">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-pink-300 mb-2">Restez informé de nos nouveautés</h4>
            <p className="text-purple-200 text-sm mb-4">
              Soyez les premiers à découvrir nos nouvelles créations et offres spéciales
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-purple-400/30 text-white placeholder-purple-300 focus:outline-none focus:border-pink-400 focus:bg-white/20 transition-all"
              />
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 font-medium">
                S'abonner
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-purple-200 text-sm">
              &copy; {new Date().getFullYear()} Les Délices d'Alexandra. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 text-sm text-purple-200">
              <a href="#" className="hover:text-pink-300 transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-pink-300 transition-colors">
                Conditions d'utilisation
              </a>
              <a href="#" className="hover:text-pink-300 transition-colors">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
