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

  // Données synchronisées avec la galerie
  const products = [
    {
      id: 1,
      name: "Gâteau à la crème",
      category: "Gâteaux",
      price: "12500 FCFA",
      images: ["/creme4.jpg", "/creme.avif", "/creme3.jpg"],
      description: "Un délice moelleux, recouvert d'une onctueuse couche de crème fouettée.",
      detailedDescription:
        "Ce gâteau à la crème est préparé avec des ingrédients frais et de qualité. La génoise moelleuse est garnie d'une crème fouettée légère et aérienne, créant un dessert parfait pour toutes les occasions spéciales.",
      ingredients: ["Farine de blé", "Œufs frais", "Sucre", "Beurre", "Crème fraîche", "Vanille"],
      allergens: ["Gluten", "Œufs", "Lait"],
      weight: "500g",
      servings: "6-8 personnes",
    },
    {
      id: 2,
      name: "Gâteau nature",
      category: "Gâteaux",
      price: "9500 FCFA",
      images: ["/gateaux2.jpg", "/gat2.webp", "/gat3.jpeg"],
      description: "Un gâteau simple et savoureux, parfait pour accompagner votre thé ou café.",
      detailedDescription:
        "Notre gâteau nature est préparé selon une recette traditionnelle. Sa texture moelleuse et son goût authentique en font un classique intemporel, idéal pour le goûter ou comme base pour vos créations personnalisées.",
      ingredients: ["Farine de blé", "Œufs", "Sucre", "Beurre", "Levure", "Lait"],
      allergens: ["Gluten", "Œufs", "Lait"],
      weight: "400g",
      servings: "4-6 personnes",
    },
    {
      id: 3,
      name: "Crêpes",
      category: "Crêpes",
      price: "6500 FCFA",
      images: ["/crepeschoco.jpg", "/crepechoco.png"],
      description: "Crêpes délicates au chocolat noir, fines et savoureuses.",
      detailedDescription:
        "Nos crêpes sont préparées avec une pâte fine et légère, garnies de chocolat noir de qualité. Servies chaudes, elles offrent une expérience gustative exceptionnelle avec leur texture fondante et leur goût riche en chocolat.",
      ingredients: ["Farine", "Œufs", "Lait", "Chocolat noir", "Beurre", "Sucre"],
      allergens: ["Gluten", "Œufs", "Lait"],
      weight: "300g",
      servings: "2-3 personnes",
    },
    {
      id: 4,
      name: "Mini-burger",
      category: "Viennoiseries et autres",
      price: "5500 FCFA",
      images: ["/burger.png", "/minib.jpg"],
      description: "Délicieux mini-burgers parfaits pour l'apéritif ou comme collation gourmande.",
      detailedDescription:
        "Ces mini-burgers sont préparés avec des pains briochés moelleux et garnis d'ingrédients frais et savoureux. Parfaits pour les réceptions, les pique-niques ou comme en-cas original et délicieux.",
      ingredients: ["Pain brioché", "Garniture variée", "Salade", "Tomate", "Sauce maison"],
      allergens: ["Gluten", "Œufs", "Lait"],
      weight: "250g",
      servings: null ,
    },
    {
      id: 5,
      name: "Croquettes en pot",
      category: "Viennoiseries et autres",
      price: "3500 FCFA",
      images: ["/croquettes.jpg", "/pot.jpeg" ],
      description: "Croquettes croustillantes servies dans un pot pratique, parfaites à partager.",
      detailedDescription:
        "Nos croquettes sont préparées avec des ingrédients de qualité et cuites à la perfection pour obtenir un extérieur croustillant et un intérieur fondant. Servies dans un pot pratique, elles sont idéales pour les moments de partage.",
      ingredients: ["Pommes de terre", "Fromage", "Herbes", "Chapelure", "Huile végétale"],
      allergens: ["Gluten", "Lait"],
      weight: "200g",
      servings: "2-3 personnes",
    },
    {
      id: 6,
      name: "Donuts",
      category: "Viennoiseries et autres",
      price: "8500 FCFA",
      images: ["/donnut.jpg", "/donuts.jpg?height=400&width=400"],
      description: "Donuts moelleux et colorés, glacés avec différents parfums pour tous les goûts.",
      detailedDescription:
        "Nos donuts sont préparés avec une pâte levée moelleuse et recouverts de glaçages colorés aux parfums variés. Chaque donut est une petite œuvre d'art gourmande qui ravira petits et grands.",
      ingredients: ["Farine", "Sucre", "Œufs", "Beurre", "Levure", "Glaçage coloré"],
      allergens: ["Gluten", "Œufs", "Lait"],
      weight: "300g",
      servings:null,
    },
    {
      id: 7,
      name: "Mini-pizza",
      category: "Viennoiseries et autres",
      price: "15000 FCFA",
      images: ["/minipizza.jpg", "/minipizza1.jpg?"],
      description: "Mini-pizzas savoureuses avec une pâte croustillante et des garnitures variées.",
      detailedDescription:
        "Nos mini-pizzas sont préparées avec une pâte fine et croustillante, garnies de sauce tomate maison, de fromage de qualité et d'ingrédients frais. Parfaites pour l'apéritif ou un repas léger.",
      ingredients: ["Pâte à pizza", "Sauce tomate", "Fromage", "Garnitures variées", "Herbes de Provence"],
      allergens: ["Gluten", "Lait"],
      weight: "400g",
      servings: "6-8 pièces",
    },
    {
      id: 8,
      name: "Box personnalisable",
      category: "Viennoiseries et autres",
      price: "10500 FCFA",
      images: ["/box .jpg", "/panier.webp", "/panier2.webp"],
      description: "Box gourmande personnalisable avec une sélection de nos meilleures pâtisseries.",
      detailedDescription:
        "Cette box personnalisable vous permet de composer votre assortiment de pâtisseries selon vos préférences. Idéale pour les cadeaux ou pour découvrir notre gamme de produits. Chaque box est préparée avec soin et présentée dans un emballage élégant.",
      ingredients: ["Assortiment de pâtisseries", "Emballage personnalisé"],
      allergens: ["Varie selon la sélection"],
      weight: "Variable",
      servings: "4-6 personnes",
    },
    {
      id: 9,
      name: "Gâteau au chocolat",
      category: "Gâteaux",
      price: "7500 FCFA",
      images: ["/anniv.jpg", "/noir.jpg", "/placeholder.svg?height=400&width=400"],
      description: "Gâteau au chocolat riche et intense, parfait pour les anniversaires et célébrations.",
      detailedDescription:
        "Ce gâteau au chocolat est préparé avec du chocolat noir de première qualité. Sa texture moelleuse et son goût intense en font le dessert idéal pour les anniversaires et toutes les occasions spéciales. Décoré avec soin pour un rendu visuel parfait.",
      ingredients: ["Chocolat noir", "Farine", "Œufs", "Sucre", "Beurre", "Cacao"],
      allergens: ["Gluten", "Œufs", "Lait"],
      weight: "450g",
      servings: "6-8 personnes",
    },
    {
      id: 10,
      name: "Crêpe nature",
      category: "Crêpes",
      price: "9500 FCFA",
      images: ["/crepeblanc.png", "/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
      description: "Crêpes nature légères et moelleuses, parfaites pour le petit-déjeuner ou le goûter.",
      detailedDescription:
        "Nos crêpes nature sont préparées avec une pâte traditionnelle fine et légère. Leur texture moelleuse et leur goût authentique en font un classique incontournable, parfait pour accompagner vos confitures préférées ou simplement dégusté nature.",
      ingredients: ["Farine", "Œufs", "Lait", "Beurre", "Sucre", "Sel"],
      allergens: ["Gluten", "Œufs", "Lait"],
      weight: "250g",
      servings: "3-4 pièces",
    },
    {
      id: 11,
      name: "Croques monsieur",
      category: "Viennoiseries et autres",
      price: "12000 FCFA",
      images: ["/cro.jpg", "/cro2.jpg"],
      description: "Croques monsieur croustillants, garnis de jambon et de fromage fondant.",
      detailedDescription:
        "Nos croques monsieur sont préparés avec du pain de mie doré à la perfection, garni de jambon savoureux et de fromage fondant. Parfaits pour un déjeuner rapide ou un dîner léger, ils sont toujours appréciés.",
      ingredients: ["Farine de blé", "Jambon", "Fromage", "Beurre", "Œufs", "Lait"],
      allergens: ["Gluten", "Œufs", "Lait"],
      weight: "300g",
    },
 {
  id: 12,
  name: "Nems",
  category: "Viennoiseries et autres",
  price: "13000 FCFA",
  images: ["/nems.jpg", "/nems2.jpeg"],
  description: "Des rouleaux croustillants farcis de légumes et de viande, servis avec une sauce aigre-douce.",
  detailedDescription: "Ces nems sont des rouleaux croustillants, préparés avec des légumes frais et de la viande, offrant une combinaison parfaite de saveurs. Ils sont généralement servis avec une sauce aigre-douce, ce qui les rend irrésistibles en entrée ou en plat principal.",
  ingredients: ["Pâte à nems", "Légumes", "Viande", "Sauce aigre-douce"],
  allergens: ["Gluten", "Viande"],
  weight: null,
  
}

  ]

  // Images similaires pour chaque catégorie
  const similarImages = {
    Gâteaux: [
      "/gateaux.jpg",
      "/doris.png",
      "/gateaux4.jpg",
    ],
    Crêpes: ["/crepes.png", "/crepeblanc.png?height=200&width=200"],
    "Viennoiseries et autres": [
      "/minib.jpg",
      "/minipizza1.jpg",
      "/pastels.jpg",
      "/donnut.jpg",
    ],
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

  const handleWhatsAppOrder = () => {
    const phoneNumber = "24174504103"
    const productImage = product.images[0]
    const message = `Bonjour ! Je souhaite commander :\n\n🍰 ${product.name}\n💰 Prix: ${product.price}\n📦 Poids: ${product.weight}\n👥 Pouvez-vous me confirmer la disponibilité et les modalités de commande ?\n\nMerci !`
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
                <div className="text-4xl font-bold text-purple-600 mb-6">{product.price}</div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleWhatsAppOrder}
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

                <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-semibold text-gray-800 block">Poids:</span>
                    <p className="text-gray-600">{product.weight}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800 block">Portions:</span>
                    <p className="text-gray-600">{product.servings}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Ingrédients</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient, index) => (
                      <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Allergènes</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.allergens.map((allergen, index) => (
                      <span key={index} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        ⚠️ {allergen}
                      </span>
                    ))}
                  </div>
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
