"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Eye, Heart, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

const Gallery = () => {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState("Tous")

  const products = [
    // Gâteaux
    {
      id: 1,
      name: "Gâteau au yaourt",
      category: "Gâteaux",
      image: "/gateaux2.jpg",
      description: "Gâteau moelleux à base de yaourt nature, parfait pour le goûter.",
    },
    {
      id: 2,
      name: "Gâteau à l'orange",
      category: "Gâteaux",
      image: "/orange.jpg",
      description: "Gâteau parfumé à l'orange, léger et rafraîchissant.",
    },
    {
      id: 3,
      name: "Gâteau au chocolat",
      category: "Gâteaux",
      image: "/gateaux.jpg",
      description: "Gâteau riche au chocolat avec option noix de coco ou raisins secs.",
    },
    {
      id: 4,
      name: "Gâteau à l'ananas",
      category: "Gâteaux",
      image: "/ananas.jpg",
      description: "Gâteau moelleux avec morceaux d'ananas frais.",
    },

    // Crêpes Sucrées
    {
      id: 5,
      name: "Crêpes nature",
      category: "Crêpes Sucrées",
      image: "/crepeblanc.png",
      description: "Crêpes nature légères et moelleuses.",
    },
    {
      id: 6,
      name: "Crêpes sucrées",
      category: "Crêpes Sucrées",
      image: "/sucre.webp",
      description: "Crêpes légèrement sucrées avec une touche de vanille.",
    },
    {
      id: 7,
      name: "Crêpes au chocolat",
      category: "Crêpes Sucrées",
      image: "/crepechoco.png",
      description: "Crêpes garnies de délicieux chocolat fondu.",
    },
    {
      id: 8,
      name: "Crêpes marbrées au chocolat",
      category: "Crêpes Sucrées",
      image: "/marbre.jpg",
      description: "Crêpes avec un effet marbré au chocolat.",
    },

    // Crêpes Salées
    {
      id: 9,
      name: "Crêpes à la viande hachée",
      category: "Crêpes Salées",
      image: "/viande.webp",
      description: "Crêpes salées garnies de viande hachée assaisonnée.",
    },
    {
      id: 10,
      name: "Crêpes jambon fromage",
      category: "Crêpes Salées",
      image: "/jambon.jpg",
      description: "Crêpes garnies de jambon et fromage fondant.",
    },

    // Samoussas
    {
      id: 11,
      name: "Samoussas viande hachée",
      category: "Samoussas",
      image: "/samoussa1.webp",
      description: "Samoussas croustillants à la viande hachée.",
    },
    {
      id: 12,
      name: "Samoussas poulet",
      category: "Samoussas",
      image: "/samoussa.jpg",
      description: "Samoussas croustillants au poulet.",
    },

    // Nems
    {
      id: 13,
      name: "Nems viande hachée",
      category: "Nems",
      image: "/nems2.jpg",
      description: "Nems croustillants à la viande hachée.",
    },
    {
      id: 14,
      name: "Nems au poulet",
      category: "Nems",
      image: "/nems3.webp",
      description: "Nems croustillants au poulet.",
    },

    // Pastels
    {
      id: 15,
      name: "Pastels (poulet/viande/jambon)",
      category: "Pastels",
      image: "/pastels.jpg",
      description: "Pastels africains croustillants avec différents garnitures.",
    },

    // Mini-Burgers
    {
      id: 16,
      name: "Mini-burgers",
      category: "Mini-Burgers",
      image: "/minib.jpg",
      description: "Mini-burgers gourmands avec garnitures variées.",
    },

    // Mini-Quiches
    {
      id: 17,
      name: "Mini-quiches (poulet/jambon/viande)",
      category: "Mini-Quiches",
      image: "/quiche.jpg",
      description: "Mini-quiches savoureuses avec différentes garnitures.",
    },

    // Croques Monsieur
    {
      id: 18,
      name: "Croques monsieur",
      category: "Croques Monsieur",
      image: "/cro.jpg",
      description: "Croques monsieur classiques jambon-fromage.",
    },

    // Roulettes de Saucisse
    {
      id: 19,
      name: "Roulettes de Saucisse",
      category: "Roulettes de Saucisse",
      image: "/saucisse.jpg",
      description: "Roulettes de saucisse enrobées de pâte, croustillantes à l'extérieur et moelleuses à l'intérieur.",
    },
     {
      id: 20,
      name: "Croquettes",
      category: "Croquettes",
      image: "/croquettes.jpg",
      description: "Croquettes croustillantes servies dans un pot pratique.",
    },
  
  ]

  const categories = [
    "Tous",
    "Gâteaux",
    "Crêpes Sucrées",
    "Crêpes Salées",
    "Samoussas",
    "Nems",
    "Pastels",
    "Mini-Burgers",
    "Mini-Quiches",
    "Croques Monsieur",
    "Cupcakes",
    "Croquettes",
    "Pain de Mie",
    "Brochettes",
    "Roulettes de Saucisse"
  ]

  const filteredProducts =
    activeFilter === "Tous" ? products : products.filter((product) => product.category === activeFilter)

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`)
  }

  const getCategoryCount = (category: string) => {
    if (category === "Tous") return products.length
    return products.filter((product) => product.category === category).length
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Gâteaux":
        return "🎂"
      case "Crêpes Sucrées":
      case "Crêpes Salées":
        return "🥞"
      case "Samoussas":
        return "🌯"
      case "Nems":
        return "🥢"
      case "Pastels":
        return "🥟"
      case "Mini-Burgers":
        return "🍔"
      case "Mini-Quiches":
        return "🥧"
      case "Croques Monsieur":
        return "🥪"
      case "Cupcakes":
        return "🧁"
      case "Croquettes":
        return "🍘"
      case "Pain de Mie":
        return "🍞"
      case "Brochettes":
        return "🍢"
      case "Roulettes de Saucisse":
        return "🌭"
      default:
        return "🍽️"
    }
  }

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Notre Collection Gourmande
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de pâtisseries et snacks artisanaux faits avec amour et des ingrédients de qualité
          </p>
        </div>

        {/* Filtres améliorés */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="text-purple-600" size={20} />
            <span className="text-lg font-semibold text-gray-700">Filtrer par catégorie :</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveFilter(category)}
                variant={activeFilter === category ? "default" : "outline"}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg transform scale-105"
                    : "border-purple-200 text-purple-600 hover:border-purple-400 hover:bg-purple-50"
                }`}
              >
                <span className="mr-2">{getCategoryIcon(category)}</span>
                {category}
                <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full font-medium">
                  {getCategoryCount(category)}
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Résultats avec statistiques */}
        <div className="text-center mb-8">
          <p className="text-gray-600 text-lg">
            <span className="font-semibold text-purple-600">{filteredProducts.length}</span> produit
            {filteredProducts.length > 1 ? "s" : ""}
            {activeFilter !== "Tous" && (
              <>
                {" "}
                dans la catégorie{" "}
                <span className="font-semibold text-purple-600">
                  {getCategoryIcon(activeFilter)} "{activeFilter}"
                </span>
              </>
            )}
          </p>
        </div>

        {/* Grille de produits améliorée */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              {/* Badge catégorie */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-white/90 backdrop-blur-sm text-purple-600 px-3 py-1 rounded-full text-xs font-semibold">
                  {getCategoryIcon(product.category)} {product.category}
                </span>
              </div>

              <div className="aspect-square overflow-hidden relative">
                <img
                  src={product.image || "/placeholder.svg?height=400&width=400"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Actions flottantes */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      // Logique favoris
                    }}
                    className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-lg"
                  >
                    <Heart size={18} className="text-purple-600" />
                  </button>
                  <button
                    onClick={() => handleProductClick(product.id)}
                    className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-lg"
                  >
                    <Eye size={18} className="text-purple-600" />
                  </button>
                </div>
              </div>

              {/* Contenu de la carte */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">{product.description}</p>

                <div className="flex justify-center">
                  <button
                    onClick={() => handleProductClick(product.id)}
                    className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all transform hover:scale-105"
                  >
                    Voir détails
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message si aucun produit */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">😔</div>
            <p className="text-gray-500 text-lg mb-4">Aucun produit trouvé dans cette catégorie.</p>
            <Button
              onClick={() => setActiveFilter("Tous")}
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white"
            >
              Voir tous les produits
            </Button>
          </div>
        )}

        {/* Section informative */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="font-semibold text-gray-800 mb-2">Qualité Artisanale</h3>
              <p className="text-gray-600 text-sm">
                Tous nos produits sont préparés quotidiennement avec des ingrédients frais et de qualité
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">🚚</div>
              <h3 className="font-semibold text-gray-800 mb-2">Livraison Rapide</h3>
              <p className="text-gray-600 text-sm">
                Commandez via WhatsApp et recevez vos pâtisseries fraîches directement chez vous
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">💝</div>
              <h3 className="font-semibold text-gray-800 mb-2">Personnalisation</h3>
              <p className="text-gray-600 text-sm">
                Possibilité de personnaliser vos commandes selon vos goûts et occasions spéciales
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery