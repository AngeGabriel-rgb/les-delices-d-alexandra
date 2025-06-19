"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Eye, Heart, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

const Gallery = () => {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState("Tous")

  const products = [
    {
      id: 1,
      name: "Gâteau à la crème",
      category: "Gâteaux",
      price: "12500 FCFA",
      image: "/blanc.png",
      description: "Un délice moelleux, recouvert d'une onctueuse couche de crème fouettée.",
      weight: "500g",
      servings: "6-8 personnes",
    },
    {
      id: 2,
      name: "Gâteau nature",
      category: "Gâteaux",
      price: "9500 FCFA",
      image: "/gateaux2.jpg",
      description: "Un gâteau simple et savoureux, parfait pour accompagner votre thé ou café.",
      weight: "400g",
      servings: "4-6 personnes",
    },
    {
      id: 3,
      name: "Crêpes",
      category: "Crêpes",
      price: "6500 FCFA",
      image: "/crepes.png",
      description: "Crêpes délicates au chocolat noir, fines et savoureuses.",
      weight: "300g",
      servings: "2-3 personnes",
    },
    {
      id: 4,
      name: "Mini-burger",
      category: "Viennoiseries et autres",
      price: "5500 FCFA",
      image: "/burger.png",
      description: "Délicieux mini-burgers parfaits pour l'apéritif ou comme collation gourmande.",
      weight: "250g",
      servings: "4-6 pièces",
    },
    {
      id: 5,
      name: "Croquettes en pot",
      category: "Viennoiseries et autres",
      price: "3500 FCFA",
      image: "/pot.jpeg",
      description: "Croquettes croustillantes servies dans un pot pratique, parfaites à partager.",
      weight: "200g",
      servings: "2-3 personnes",
    },
    {
      id: 6,
      name: "Donuts",
      category: "Viennoiseries et autres",
      price: "8500 FCFA",
      image: "/donnut.jpg",
      description: "Donuts moelleux et colorés, glacés avec différents parfums pour tous les goûts.",
      weight: "300g",
      servings: "4-6 pièces",
    },
    {
      id: 7,
      name: "Mini-pizza",
      category: "Viennoiseries et autres",
      price: "15000 FCFA",
      image: "/minipizza.jpg",
      description: "Mini-pizzas savoureuses avec une pâte croustillante et des garnitures variées.",
      weight: "400g",
      servings: "6-8 pièces",
    },
    {
      id: 8,
      name: "Box personnalisable",
      category: "Viennoiseries et autres",
      price: "10500 FCFA",
      image: "/box .jpg",
      description: "Box gourmande personnalisable avec une sélection de nos meilleures pâtisseries.",
      weight: "Variable",
      servings: "4-6 personnes",
    },
    {
      id: 9,
      name: "Gâteau au chocolat",
      category: "Gâteaux",
      price: "7500 FCFA",
      image: "/anniv.jpg",
      description: "Gâteau au chocolat riche et intense, parfait pour les anniversaires et célébrations.",
      weight: "450g",
      servings: "6-8 personnes",
    },
    {
      id: 10,
      name: "Crêpe nature",
      category: "Crêpes",
      price: "9500 FCFA",
      image: "/crepeblanc.png",
      description: "Crêpes nature légères et moelleuses, parfaites pour le petit-déjeuner ou le goûter.",
      weight: "250g",
      servings: "3-4 pièces",
    },
  ]

  const categories = ["Tous", "Gâteaux", "Crêpes", "Viennoiseries et autres"]

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
      case "Crêpes":
        return "🥞"
      case "Viennoiseries et autres":
        return "🥐"
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
            Découvrez notre sélection de pâtisseries artisanales faites avec amour et des ingrédients de qualité
          </p>
          <div className="mt-6 flex justify-center items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Produits frais du jour
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Livraison disponible
            </span>
          </div>
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

                {/* Informations en overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <div className="font-medium">{product.weight}</div>
                      <div className="text-xs opacity-90">{product.servings}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenu de la carte */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">{product.description}</p>

                {/* Informations produit */}
                <div className="flex justify-between items-center mb-4 text-xs text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">{product.weight}</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">{product.servings}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-purple-600">{product.price}</span>
                  <button
                    onClick={() => handleProductClick(product.id)}
                    className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all transform hover:scale-105"
                  >
                    Voir détails
                  </button>
                </div>
              </div>

              {/* Indicateur de nouveauté pour certains produits */}
              {[1, 8, 9].includes(product.id) && (
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                  NOUVEAU
                </div>
              )}
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
