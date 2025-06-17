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
      name: "Gâteau au chocolat",
      category: "Gâteaux",
      price: "12500 FCFA",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Un délice riche en chocolat, parfait pour les amateurs.",
    },
    {
      id: 2,
      name: "Tarte aux fruits",
      category: "Viennoiseries",
      price: "9500 FCFA",
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Une croûte croustillante garnie de fruits frais.",
    },
    {
      id: 3,
      name: "Crêpes Suzette",
      category: "Crêpes",
      price: "6500 FCFA",
      image:
        "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Crêpes délicates flambées avec une sauce à l'orange.",
    },
    {
      id: 4,
      name: "Macarons assortis",
      category: "Viennoiseries",
      price: "5500 FCFA",
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Des douceurs colorées aux saveurs variées.",
    },
    {
      id: 5,
      name: "Éclair au café",
      category: "Viennoiseries",
      price: "3500 FCFA",
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Pâte à choux garnie de crème pâtissière au café.",
    },
    {
      id: 6,
      name: "Millefeuille",
      category: "Viennoiseries",
      price: "8500 FCFA",
      image: "/mil2.jpg",
      description: "Feuilletage croustillant et crème pâtissière vanille.",
    },
    {
      id: 7,
      name: "Croquembouche",
      category: "Gâteaux",
      price: "15000 FCFA",
      image:
        "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Tour de choux à la crème reliés par du caramel doré.",
    },
    {
      id: 8,
      name: "Tarte Tatin",
      category: "Viennoiseries",
      price: "10500 FCFA",
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Tarte aux pommes caramélisées, renversée à la française.",
    },
    {
      id: 9,
      name: "Profiteroles",
      category: "Viennoiseries",
      price: "7500 FCFA",
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Choux à la crème glacée nappés de chocolat chaud.",
    },
    {
      id: 10,
      name: "Opéra",
      category: "Gâteaux",
      price: "3500 FCFA",
      image: "/opera.jpg",
      description: "Gâteau aux amandes, ganache chocolat et glaçage miroir.",
    },
    {
      id: 11,
      name: "Paris-Brest",
      category: "Viennoiseries",
      price: "6000 FCFA",
      image:
        "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Couronne de pâte à choux garnie de crème pralinée.",
    },
    {
      id: 12,
      name: "Saint-Honoré",
      category: "Gâteaux",
      price: "14000 FCFA",
      image:
        "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Pâte brisée, choux caramélisés et crème Chiboust.",
    },
    {
      id: 13,
      name: "Religieuse",
      category: "Viennoiseries",
      price: "4500 FCFA",
      image:
        "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Deux choux superposés garnis de crème pâtissière.",
    },
    {
      id: 14,
      name: "Forêt-Noire",
      category: "Gâteaux",
      price: "12000 FCFA",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Génoise au chocolat, cerises et chantilly au kirsch.",
    },
    {
      id: 15,
      name: "Madeleine de Commercy",
      category: "Viennoiseries",
      price: "2500 FCFA",
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Petits gâteaux moelleux en forme de coquillage.",
    },
    {
      id: 16,
      name: "Financier",
      category: "Viennoiseries",
      price: "2000 FCFA",
      image: "/financier.webp",
      description: "Petit gâteau aux amandes, moelleux et parfumé.",
    },
    {
      id: 17,
      name: "Crêpe au Nutella",
      category: "Crêpes",
      price: "4500 FCFA",
      image:
        "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Crêpe moelleuse garnie de délicieux Nutella.",
    },
    {
      id: 18,
      name: "Crêpe aux fruits rouges",
      category: "Crêpes",
      price: "5500 FCFA",
      image:
        "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Crêpe fraîche accompagnée de fruits rouges de saison.",
    },
  ]

  const categories = ["Tous", "Gâteaux", "Crêpes", "Viennoiseries"]

  const filteredProducts =
    activeFilter === "Tous" ? products : products.filter((product) => product.category === activeFilter)

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`)
  }

  const getCategoryCount = (category: string) => {
    if (category === "Tous") return products.length
    return products.filter((product) => product.category === category).length
  }

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Notre Collection Gourmande
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de pâtisseries faites avec amour
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="text-purple-600" size={20} />
            <span className="text-lg font-semibold text-gray-700">Filtrer par :</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveFilter(category)}
                variant={activeFilter === category ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg transform scale-105"
                    : "border-purple-200 text-purple-600 hover:border-purple-400 hover:bg-purple-50"
                }`}
              >
                {category}
                <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">{getCategoryCount(category)}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Résultats */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            {filteredProducts.length} produit{filteredProducts.length > 1 ? "s" : ""}
            {activeFilter !== "Tous" && ` dans la catégorie "${activeFilter}"`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                    <Heart size={18} className="text-purple-600" />
                  </button>
                  <button
                    onClick={() => handleProductClick(product.id)}
                    className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <Eye size={18} className="text-purple-600" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm bg-purple-600/80 px-2 py-1 rounded-full">{product.category}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
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
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Aucun produit trouvé dans cette catégorie.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery
