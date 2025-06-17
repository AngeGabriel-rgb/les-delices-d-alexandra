"use client"

import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import Header from "@/components/Header"
import { useState } from "react"

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  // Données des produits avec détails complets pour les IDs 1-10
  const products = [
    {
      id: 1,
      name: "Gâteau au chocolat",
      category: "Gâteaux",
      price: "12500 FCFA",
      images: [
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      ],
      description: "Un délice riche en chocolat, parfait pour les amateurs.",
      detailedDescription:
        "Ce gâteau au chocolat est préparé avec du chocolat noir de première qualité et des ingrédients frais. La texture moelleuse et le goût intense en font un dessert irrésistible. Parfait pour les anniversaires, les célébrations ou simplement pour se faire plaisir.",
      ingredients: [
        "Chocolat noir 70%",
        "Beurre fermier",
        "Œufs frais",
        "Farine de blé",
        "Sucre roux",
        "Crème fraîche",
      ],
      allergens: ["Gluten", "Œufs", "Lait"],
      weight: "500g",
      servings: "6-8 personnes",
    },
    {
      id: 2,
      name: "Tarte aux fruits",
      category: "Pâtisseries",
      price: "9500 FCFA",
      images: [
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      ],
      description: "Une croûte croustillante garnie de fruits frais.",
      detailedDescription:
        "Cette tarte aux fruits combine une pâte sablée croustillante avec une crème pâtissière onctueuse et des fruits de saison soigneusement sélectionnés. Chaque tarte est décorée à la main pour un rendu visuel parfait.",
      ingredients: ["Pâte sablée", "Crème pâtissière", "Fruits de saison", "Nappage neutre"],
      allergens: ["Gluten", "Œufs", "Lait"],
      weight: "400g",
      servings: "4-6 personnes",
    },
    {
      id: 3,
      name: "Crêpes Suzette",
      category: "Crêpes",
      price: "6500 FCFA",
      images: [
        "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      ],
      description: "Crêpes délicates flambées avec une sauce à l'orange.",
      detailedDescription:
        "Les célèbres crêpes Suzette, flambées devant vous avec notre sauce signature à l'orange et au Grand Marnier. Une expérience gustative unique qui allie tradition française et spectacle culinaire.",
      ingredients: ["Pâte à crêpes", "Beurre", "Sucre", "Jus d'orange", "Grand Marnier"],
      allergens: ["Gluten", "Œufs", "Lait", "Alcool"],
      weight: "300g",
      servings: "2-3 personnes",
    },
    {
      id: 4,
      name: "Macarons assortis",
      category: "Pâtisseries",
      price: "5500 FCFA",
      images: [
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1587736797991-c5ee4fe1fc23?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      ],
      description: "Des douceurs colorées aux saveurs variées.",
      detailedDescription:
        "Nos macarons sont préparés selon la tradition française avec une coque croquante et un cœur fondant. Chaque boîte contient un assortiment de 6 parfums différents : vanille, chocolat, framboise, pistache, caramel et citron.",
      ingredients: ["Poudre d'amande", "Sucre glace", "Blancs d'œufs", "Colorants naturels", "Ganaches variées"],
      allergens: ["Fruits à coque", "Œufs", "Lait"],
      weight: "120g",
      servings: "6 pièces",
    },
    {
      id: 5,
      name: "Éclair au café",
      category: "Pâtisseries",
      price: "3500 FCFA",
      images: [
        "https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      ],
      description: "Pâte à choux garnie de crème pâtissière au café.",
      detailedDescription:
        "Éclair traditionnel garni d'une crème pâtissière au café arabica et recouvert d'un fondant au café. La pâte à choux est cuite à la perfection pour obtenir une texture légère et aérée.",
      ingredients: ["Pâte à choux", "Crème pâtissière", "Café arabica", "Fondant", "Beurre"],
      allergens: ["Gluten", "Œufs", "Lait"],
      weight: "80g",
      servings: "1 personne",
    },
    {
      id: 6,
      name: "Millefeuille",
      category: "Pâtisseries",
      price: "8500 FCFA",
      images: [
        "/mil2.jpg",
        "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      ],
      description: "Feuilletage croustillant et crème pâtissière vanille.",
      detailedDescription:
        "Le millefeuille classique avec ses trois couches de pâte feuilletée croustillante et sa crème pâtissière à la vanille bourbon. Surmonté d'un glaçage royal décoré à la main selon la tradition.",
      ingredients: ["Pâte feuilletée", "Crème pâtissière", "Vanille bourbon", "Glaçage royal"],
      allergens: ["Gluten", "Œufs", "Lait"],
      weight: "150g",
      servings: "1-2 personnes",
    },
    {
      id: 7,
      name: "Croquembouche",
      category: "Gâteaux",
      price: "15000 FCFA",
      images: [
        "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      ],
      description: "Tour de choux à la crème reliés par du caramel doré.",
      detailedDescription:
        "Pièce montée traditionnelle française composée de choux à la crème assemblés en pyramide et liés par un caramel doré. Parfait pour les grandes occasions et les célébrations.",
      ingredients: ["Pâte à choux", "Crème pâtissière", "Caramel", "Sucre", "Décoration spun sugar"],
      allergens: ["Gluten", "Œufs", "Lait"],
      weight: "800g",
      servings: "10-12 personnes",
    },
    {
      id: 8,
      name: "Tarte Tatin",
      category: "Pâtisseries",
      price: "10500 FCFA",
      images: [
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      ],
      description: "Tarte aux pommes caramélisées, renversée à la française.",
      detailedDescription:
        "La célèbre tarte Tatin avec ses pommes caramélisées et sa pâte brisée croustillante. Cuite dans un moule spécial et retournée pour révéler les pommes dorées au caramel.",
      ingredients: ["Pommes Golden", "Pâte brisée", "Beurre salé", "Sucre", "Cannelle"],
      allergens: ["Gluten", "Lait"],
      weight: "450g",
      servings: "4-6 personnes",
    },
    {
      id: 9,
      name: "Profiteroles",
      category: "Pâtisseries",
      price: "7500 FCFA",
      images: [
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      ],
      description: "Choux à la crème glacée nappés de chocolat chaud.",
      detailedDescription:
        "Petits choux garnis de glace à la vanille et nappés d'une sauce chocolat chaude. Servis immédiatement pour contraster les températures et les textures.",
      ingredients: ["Pâte à choux", "Glace vanille", "Chocolat noir", "Crème liquide", "Sucre"],
      allergens: ["Gluten", "Œufs", "Lait"],
      weight: "250g",
      servings: "2-3 personnes",
    },
    {
      id: 10,
      name: "Opéra",
      category: "Gâteaux",
      price: "3500 FCFA",
      images: [
        "/opera.jpg",
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      ],
      description: "Gâteau aux amandes, ganache chocolat et glaçage miroir.",
      detailedDescription:
        "L'Opéra est un gâteau sophistiqué composé de biscuit Joconde aux amandes, de ganache au chocolat et de crème au beurre au café, le tout recouvert d'un glaçage chocolat miroir parfaitement lisse.",
      ingredients: [
        "Biscuit Joconde",
        "Ganache chocolat",
        "Crème au beurre café",
        "Glaçage chocolat",
        "Poudre d'amande",
      ],
      allergens: ["Gluten", "Œufs", "Lait", "Fruits à coque"],
      weight: "400g",
      servings: "4-6 personnes",
    },
  ]

  const product = products.find((p) => p.id === Number.parseInt(id || "0"))

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Produit non trouvé</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-kre-violet to-kre-pink-bright text-white px-6 py-3 rounded-full hover:shadow-lg transition-all"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    )
  }

  const handleWhatsAppOrder = () => {
    const phoneNumber = "24174504103" // Remplacez par le vrai numéro de la vendeuse
    const message = `Bonjour ! Je souhaite commander :\n\n🍰 ${product.name}\n💰 Prix: ${product.price}\n📦 Poids: ${product.weight}\n👥 Portions: ${product.servings}\n\nPouvez-vous me confirmer la disponibilité et les modalités de commande ?\n\nMerci !`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-kre-violet hover:text-kre-pink-bright transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Retour à la galerie
        </button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            {/* Images Section */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-xl">
                <img
                  src={product.images[selectedImageIndex] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImageIndex === index ? "border-kre-violet" : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
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
                <span className="inline-block bg-kre-lavender text-kre-violet px-3 py-1 rounded-full text-sm font-medium mb-2">
                  {product.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                <p className="text-xl text-gray-600 mb-4">{product.description}</p>
                <div className="text-4xl font-bold text-kre-violet mb-6">{product.price}</div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Description détaillée</h3>
                  <p className="text-gray-600">{product.detailedDescription}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-semibold text-gray-800">Poids:</span>
                    <p className="text-gray-600">{product.weight}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Portions:</span>
                    <p className="text-gray-600">{product.servings}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Ingrédients</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient, index) => (
                      <span key={index} className="bg-gray-100 px-2 py-1 rounded text-sm">
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Allergènes</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.allergens.map((allergen, index) => (
                      <span key={index} className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                        {allergen}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={handleWhatsAppOrder}
                  className="flex items-center gap-2 bg-gradient-to-r from-kre-violet to-kre-pink-bright text-white px-6 py-3 rounded-full hover:shadow-lg transition-all w-full justify-center"
                >
                  <ShoppingCart size={20} />
                  Commander via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
