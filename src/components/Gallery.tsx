
import { useState } from 'react';
import { Eye, Heart } from 'lucide-react';

const Gallery = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const products = [
    {
      id: 1,
      name: "Robe d'été fleurie",
      category: "Femme",
      price: "89€",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Robe légère et élégante parfaite pour l'été"
    },
    {
      id: 2,
      name: "Chemise classique blanche",
      category: "Homme",
      price: "65€",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Chemise intemporelle pour un look professionnel"
    },
    {
      id: 3,
      name: "Pull en cachemire",
      category: "Femme",
      price: "120€",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Douceur et élégance pour les journées fraîches"
    },
    {
      id: 4,
      name: "Veste en jean vintage",
      category: "Unisexe",
      price: "75€",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Un classique revisité pour un style décontracté"
    },
    {
      id: 5,
      name: "Pantalon chino beige",
      category: "Homme",
      price: "55€",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Confort et style pour toutes les occasions"
    },
    {
      id: 6,
      name: "Blouse en soie",
      category: "Femme",
      price: "95€",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Élégance raffinée pour vos soirées"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-kre-violet to-kre-pink-bright bg-clip-text text-transparent">
            Notre Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de vêtements soigneusement choisis pour vous
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                    <Heart size={18} className="text-kre-violet" />
                  </button>
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <Eye size={18} className="text-kre-violet" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm bg-kre-violet/80 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-kre-violet">{product.price}</span>
                  <button className="bg-gradient-to-r from-kre-violet to-kre-pink-bright text-white px-4 py-2 rounded-full hover:shadow-lg transition-all transform hover:scale-105">
                    Voir détails
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for product details */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <div className="grid md:grid-cols-2 gap-8">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full aspect-square object-cover rounded-xl"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{selectedProduct.name}</h3>
                  <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                  <div className="text-3xl font-bold text-kre-violet mb-6">{selectedProduct.price}</div>
                  <button className="w-full bg-gradient-to-r from-kre-violet to-kre-pink-bright text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                    Nous contacter pour commander
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
