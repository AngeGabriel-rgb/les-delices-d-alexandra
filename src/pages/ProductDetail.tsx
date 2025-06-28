"use client"

import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft, ShoppingCart, Heart, Share2 } from "lucide-react"
import Header from "@/components/Header"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  // Données complètes des produits avec toutes les variantes et chemins d'images corrigés
  const products = [
    // Gâteaux
    {
      id: 1,
      name: "Gâteau au yaourt",
      category: "Gâteaux",
      images: ["/gateaux2.jpg"],
      description: "Gâteau moelleux à base de yaourt nature, parfait pour le goûter.",
      detailedDescription: "Notre gâteau au yaourt est préparé avec des ingrédients frais pour une texture légère et moelleuse. Parfait pour les petits goûters ou les desserts légers.",
      variants: [
        { quantity: "1 gâteau", price: "3000 FCFA" }
      ]
    },
    {
      id: 2,
      name: "Gâteau à l'orange",
      category: "Gâteaux",
      images: ["/orange.jpg"],
      description: "Gâteau parfumé à l'orange, léger et rafraîchissant.",
      detailedDescription: "Ce gâteau à l'orange combine la douceur d'une génoise moelleuse avec le parfum rafraîchissant de l'orange. Idéal pour les occasions spéciales ou comme dessert du quotidien.",
      variants: [
        { quantity: "1 gâteau", price: "3500 FCFA" }
      ]
    },
    {
      id: 3,
      name: "Gâteau au chocolat",
      category: "Gâteaux",
      images: ["/gateaux.jpg"],
      description: "Gâteau riche au chocolat avec option noix de coco ou raisins secs.",
      detailedDescription: "Notre gâteau au chocolat peut être personnalisé avec des raisins secs ou de la noix de coco pour plus de saveur. Préparé avec du chocolat de qualité pour un goût intense.",
      variants: [
        { quantity: "1 gâteau", price: "4000 FCFA" }
      ]
    },
    {
      id: 4,
      name: "Gâteau à l'ananas",
      category: "Gâteaux",
      images: ["/ananas.jpg"],
      description: "Gâteau moelleux avec morceaux d'ananas frais.",
      detailedDescription: "Un gâteau moelleux garni de morceaux d'ananas frais pour une touche tropicale. Parfait pour les anniversaires ou les occasions spéciales.",
      variants: [
        { quantity: "1 gâteau", price: "4500 FCFA" }
      ]
    },

    // Crêpes Sucrées
    {
      id: 5,
      name: "Crêpes nature",
      category: "Crêpes Sucrées",
      images: ["/crepeblanc.png"],
      description: "Crêpes nature légères et moelleuses.",
      detailedDescription: "Nos crêpes nature sont préparées selon une recette traditionnelle pour une texture légère et moelleuse. Parfaites pour le petit-déjeuner ou le goûter.",
      variants: [
        { quantity: "10 crêpes", price: "1500 FCFA" }
      ]
    },
    {
      id: 6,
      name: "Crêpes sucrées",
      category: "Crêpes Sucrées",
      images: ["/sucre.webp"],
      description: "Crêpes légèrement sucrées avec une touche de vanille.",
      detailedDescription: "Crêpes légèrement sucrées avec une touche de vanille naturelle pour plus de parfum. Servies chaudes pour plus de plaisir.",
      variants: [
        { quantity: "10 crêpes", price: "2000 FCFA" }
      ]
    },
    {
      id: 7,
      name: "Crêpes au chocolat",
      category: "Crêpes Sucrées",
      images: ["/crepechoco.png"],
      description: "Crêpes garnies de délicieux chocolat fondu.",
      detailedDescription: "Crêpes garnies de chocolat noir fondant pour les amateurs de chocolat. Un régal pour les papilles.",
      variants: [
        { quantity: "10 crêpes", price: "2500 FCFA" }
      ]
    },
    {
      id: 8,
      name: "Crêpes marbrées au chocolat",
      category: "Crêpes Sucrées",
      images: ["/marbre.jpg"],
      description: "Crêpes avec un effet marbré au chocolat.",
      detailedDescription: "Crêpes avec un effet marbré obtenu en mélangeant délicatement la pâte nature et la pâte au chocolat. Un plaisir visuel et gustatif.",
      variants: [
        { quantity: "10 crêpes", price: "3000 FCFA" }
      ]
    },

    // Crêpes Salées
    {
      id: 9,
      name: "Crêpes à la viande hachée",
      category: "Crêpes Salées",
      images: ["/viande.webp"],
      description: "Crêpes salées garnies de viande hachée assaisonnée.",
      detailedDescription: "Crêpes salées garnies de viande hachée finement assaisonnée. Parfait pour un repas complet et savoureux.",
      variants: [
        { quantity: "10 crêpes", price: "9000 FCFA" }
      ]
    },
    {
      id: 10,
      name: "Crêpes jambon fromage",
      category: "Crêpes Salées",
      images: ["/jambon.jpg"],
      description: "Crêpes garnies de jambon et fromage fondant.",
      detailedDescription: "Crêpes garnies de jambon de qualité et de fromage fondant. Un classique revisité pour votre plus grand plaisir.",
      variants: [
        { quantity: "10 crêpes", price: "9000 FCFA" }
      ]
    },

    // Samoussas
    {
      id: 11,
      name: "Samoussas viande hachée",
      category: "Samoussas",
      images: ["/samoussa1.webp"],
      description: "Samoussas croustillants à la viande hachée.",
      detailedDescription: "Samoussas traditionnels garnis de viande hachée finement assaisonnée et enveloppés dans une pâte croustillante.",
      variants: [
        { quantity: "5 pièces", price: "3000 FCFA" },
        { quantity: "10 pièces", price: "6000 FCFA" },
        { quantity: "20 pièces", price: "12000 FCFA" }
      ]
    },
    {
      id: 12,
      name: "Samoussas poulet",
      category: "Samoussas",
      images: ["/samoussa.jpg"],
      description: "Samoussas croustillants au poulet.",
      detailedDescription: "Samoussas garnis de poulet mariné et épicé, enveloppés dans une pâte fine et croustillante.",
      variants: [
        { quantity: "5 pièces", price: "2500 FCFA" },
        { quantity: "10 pièces", price: "5000 FCFA" },
        { quantity: "20 pièces", price: "10000 FCFA" }
      ]
    },

    // Nems
    {
      id: 13,
      name: "Nems viande hachée",
      category: "Nems",
      images: ["/nems2.jpg"],
      description: "Nems croustillants à la viande hachée.",
      detailedDescription: "Nems traditionnels garnis de viande hachée, légumes et vermicelles, servis avec une sauce aigre-douce.",
      variants: [
        { quantity: "10 pièces", price: "6000 FCFA" }
      ]
    },
    {
      id: 14,
      name: "Nems au poulet",
      category: "Nems",
      images: ["/nems3.webp"],
      description: "Nems croustillants au poulet.",
      detailedDescription: "Nems garnis de poulet mariné, légumes croquants et vermicelles, parfaits pour l'apéritif ou en plat principal.",
      variants: [
        { quantity: "10 pièces", price: "5000 FCFA" }
      ]
    },

    // Pastels
    {
      id: 15,
      name: "Pastels (poulet/viande/jambon)",
      category: "Pastels",
      images: ["/pastels.jpg"],
      description: "Pastels africains croustillants avec différents garnitures.",
      detailedDescription: "Pastels traditionnels africains garnis au choix de poulet, viande hachée ou jambon, avec une pâte croustillante à l'extérieur et moelleuse à l'intérieur.",
      variants: [
        { quantity: "10 pièces", price: "3000 FCFA" },
        { quantity: "20 pièces", price: "6000 FCFA" }
      ]
    },

    // Mini-Burgers
    {
      id: 16,
      name: "Mini-burgers",
      category: "Mini-Burgers",
      images: ["/minib.jpg"],
      description: "Mini-burgers gourmands avec garnitures variées.",
      detailedDescription: "Mini-burgers préparés avec des pains briochés moelleux et garnis selon vos préférences. Parfaits pour les buffets et événements.",
      variants: [
        { quantity: "8 pièces", price: "7000 FCFA" },
        { quantity: "12 pièces", price: "10000 FCFA" },
        { quantity: "20 pièces", price: "15000 FCFA" }
      ]
    },

    // Mini-Quiches
    {
      id: 17,
      name: "Mini-quiches (poulet/jambon/viande)",
      category: "Mini-Quiches",
      images: ["/quiche.jpg"],
      description: "Mini-quiches savoureuses avec différentes garnitures.",
      detailedDescription: "Mini-quiches individuelles garnies au choix de poulet, jambon ou viande hachée, avec une pâte feuilletée et une garniture crémeuse.",
      variants: [
        { quantity: "8 pièces", price: "7000 FCFA" },
        { quantity: "12 pièces", price: "10000 FCFA" },
        { quantity: "20 pièces", price: "15000 FCFA" }
      ]
    },

    // Croques Monsieur
    {
      id: 18,
      name: "Croques monsieur",
      category: "Croques Monsieur",
      images: ["/cro.jpg"],
      description: "Croques monsieur classiques jambon-fromage.",
      detailedDescription: "Croques monsieur préparés avec du pain de mie frais, du jambon de qualité et du fromage fondant. Grillés à la perfection.",
      variants: [
        { quantity: "5 pièces", price: "7000 FCFA" },
        { quantity: "10 pièces", price: "10000 FCFA" },
        { quantity: "15 pièces", price: "15000 FCFA" }
      ]
    },

    // Roulettes de Saucisse
    {
      id: 19,
      name: "Roulettes de Saucisse",
      category: "Roulettes de Saucisse",
      images: ["/saucisse.jpg"],
      description: "Roulettes de saucisse enrobées de pâte, croustillantes à l'extérieur et moelleuses à l'intérieur.",
      detailedDescription: "Roulettes de saucisse enrobées d'une pâte fine et dorée. Parfaites pour l'apéritif ou comme encas.",
      variants: [
        { quantity: "10 pièces", price: "4000 FCFA" },
        { quantity: "15 pièces", price: "6000 FCFA" },
        { quantity: "20 pièces", price: "8000 FCFA" }
      ]
    },

    // Croquettes
    {
      id: 20,
      name: "Croquettes",
      category: "Croquettes",
      images: ["/croquettes.jpg"],
      description: "Croquettes croustillantes servies dans un pot pratique.",
      detailedDescription: "Croquettes maison préparées avec des ingrédients frais et servies dans un pot pratique pour le partage. Extérieur croustillant, intérieur moelleux.",
      variants: [
        { quantity: "1 pot", price: "2000 FCFA" }
      ]
    }
  ]

  // Images similaires pour chaque catégorie (mises à jour avec les bons chemins)
  const similarImages = {
    "Gâteaux": ["/gateaux.jpg", "/gateaux2.jpg", "/orange.jpg", "/ananas.jpg"],
    "Crêpes Sucrées": ["/crepeblanc.png", "/sucre.webp", "/crepechoco.png", "/marbre.jpg"],
    "Crêpes Salées": ["/viande.webp", "/jambon.jpg"],
    "Samoussas": ["/samoussa1.webp", "/samoussa.jpg"],
    "Nems": ["/nems2.jpg", "/nems3.webp"],
    "Pastels": ["/pastels1.webp"],
    "Mini-Burgers": ["/minib.jpg"],
    "Mini-Quiches": ["/quiche1.webp"],
    "Croques Monsieur": ["/cro2.jpg"],
    "Roulettes de Saucisse": ["/saucisse1.jpg"],
    "Croquettes": ["/croquettes.jpg"]
  }

  const product = products.find((p) => p.id === Number.parseInt(id || "0"))

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Produit non trouvé</h1>
          <Button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all"
          >
            Retour à l'accueil
          </Button>
        </div>
      </div>
    )
  }

  const handleWhatsAppOrder = (selectedVariant: string) => {
    const phoneNumber = "24174504103"
    const productImage = product.images[0]
    const message = `Bonjour ! Je souhaite commander :\n\n🍰 ${product.name} (${selectedVariant})\n💰 Prix: ${product.variants.find(v => v.quantity === selectedVariant)?.price || product.variants[0].price}\n📦 Pouvez-vous me confirmer la disponibilité et les modalités de commande ?\n\nMerci !`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Lien copié dans le presse-papiers !")
    }
  }

  const categoryImages = similarImages[product.category as keyof typeof similarImages] || []
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0].quantity)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-purple-600 hover:text-pink-500 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Retour à la galerie
        </button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            {/* Images Section */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={product.images[selectedImageIndex] || "/placeholder.svg?height=500&width=500"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImageIndex === index ? "border-purple-600" : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg?height=80&width=80"}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info Section */}
            <div className="space-y-6">
              <div>
                <span className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  {product.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                <p className="text-xl text-gray-600 mb-4">{product.description}</p>
                
                {/* Variantes de quantité et prix */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Options disponibles :</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedVariant(variant.quantity)}
                        className={`px-4 py-2 rounded-full border transition-all ${
                          selectedVariant === variant.quantity
                            ? "bg-purple-600 text-white border-purple-600"
                            : "bg-white text-gray-800 border-gray-300 hover:border-purple-400"
                        }`}
                      >
                        {variant.quantity} - {variant.price}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => handleWhatsAppOrder(selectedVariant)}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-lg transition-all"
                >
                  <ShoppingCart size={20} className="mr-2" />
                  Commander via WhatsApp
                </Button>
                <Button variant="outline" onClick={handleShare} className="px-4">
                  <Share2 size={20} />
                </Button>
                <Button variant="outline" className="px-4">
                  <Heart size={20} />
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Description détaillée</h3>
                  <p className="text-gray-600 leading-relaxed">{product.detailedDescription}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Images similaires */}
          {categoryImages.length > 0 && (
            <div className="border-t p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Produits similaires</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categoryImages.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-lg overflow-hidden bg-gray-100 hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => {
                      const similarProduct = products.find(p => p.images.includes(image))
                      if (similarProduct) {
                        navigate(`/product/${similarProduct.id}`)
                      }
                    }}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Produit similaire ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail