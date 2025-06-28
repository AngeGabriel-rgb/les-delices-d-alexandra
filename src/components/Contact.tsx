"use client"

import React, { useState } from "react"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"
import emailjs from "@emailjs/browser"
import { useToast } from "@/hooks/use-toast"

const Contact = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  // ========================================
  // CONFIGURATION EMAILJS - REMPLACEZ VOS CLÉS ICI
  // ========================================
  const EMAILJS_CONFIG = {
    serviceId: "service_m5dm4d2", // Exemple: "service_abc123"
    templateId: "template_l0rz84d", // Exemple: "template_xyz789"
    publicKey: "onWteZyTuYYW4U1eE", // Exemple: "abcdef123456"
    destinationEmail: "marieayele901@gmail.com",
  }

  // Initialisation d'EmailJS (optionnel mais recommandé)
  React.useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.publicKey)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Envoi avec EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: EMAILJS_CONFIG.destinationEmail,
          reply_to: formData.email,
        },
        EMAILJS_CONFIG.publicKey,
      )

      console.log("✅ Email envoyé avec succès :", result.status, result.text)

      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      })

      // Reset du formulaire
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("❌ Erreur lors de l'envoi de l'email :", error)

      // Gestion d'erreur détaillée
      let errorMessage = "Une erreur est survenue lors de l'envoi du message."

      if (error.text) {
        errorMessage = `Erreur EmailJS: ${error.text}`
      } else if (error.message) {
        errorMessage = error.message
      }

      toast({
        title: "Erreur d'envoi",
        description: errorMessage + " Veuillez réessayer ou nous contacter par WhatsApp.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Fonction de fallback WhatsApp
  const sendViaWhatsApp = () => {
    const phoneNumber = "24174504103" // Votre numéro WhatsApp
    const message = `
🌟 Nouveau message depuis le site web:

👤 Nom: ${formData.name}
📧 Email: ${formData.email}
📋 Sujet: ${formData.subject}
💬 Message: ${formData.message}

Envoyé depuis le formulaire de contact.
    `.trim()

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")

    toast({
      title: "Redirection WhatsApp",
      description: "Message préparé pour WhatsApp. Cliquez sur 'Envoyer' dans WhatsApp.",
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une question ? Un conseil pâtisserie ? N'hésitez pas à nous contacter !
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Informations de contact - Colonne gauche */}
            <div className="space-y-6">
              {/* Carte principale des coordonnées */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 h-fit">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mr-3">
                    <Mail className="text-white" size={16} />
                  </div>
                  Nos coordonnées
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-3 rounded-full flex-shrink-0">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                      <a
                        href="mailto:gabruielange748@gmail.com"
                        className="text-purple-600 hover:text-purple-700 transition-colors"
                      >
                        marieayele901@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-full flex-shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Téléphone</h4>
                      <a href="tel:+24162489699" className="text-green-600 hover:text-green-700 transition-colors">
                        +241 74 50 41 03
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full flex-shrink-0">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Adresse</h4>
                      <p className="text-gray-600">
                        Alibandeng Et Akamda
                        <br />
                        Libreville, Gabon
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact rapide WhatsApp */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <MessageCircle className="mr-2" size={20} />
                  Contact rapide
                </h3>
                <p className="text-green-100 mb-4 text-sm">
                  Besoin d'une réponse immédiate ? Contactez-nous directement sur WhatsApp !
                </p>
                <a
                  href="https://wa.me/24174504103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  <MessageCircle className="mr-2" size={16} />
                  Ouvrir WhatsApp
                </a>
              </div>
            </div>

            {/* Formulaire de contact - Colonne droite */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 h-fit">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mr-3">
                  <Send className="text-white" size={16} />
                </div>
                Envoyez-nous un message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-50 disabled:bg-gray-50"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-50 disabled:bg-gray-50"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-50 disabled:bg-gray-50"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:bg-gray-50"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </div>

                {/* Boutons d'envoi */}
                <div className="space-y-3">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <Send size={20} />
                    <span>{isLoading ? "Envoi en cours..." : "Envoyer par Email"}</span>
                  </button>

                  {/* Bouton WhatsApp de secours */}
                  <button
                    type="button"
                    onClick={sendViaWhatsApp}
                    disabled={!formData.name || !formData.email || !formData.message}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <MessageCircle size={20} />
                    <span>Ou envoyer via WhatsApp</span>
                  </button>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-700 text-center flex items-center justify-center">
                    <span className="mr-2">💡</span>
                    En cas de problème avec l'email, utilisez le bouton WhatsApp pour un contact direct
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
