const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-kre-lavender/20 to-kre-pink-light/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-kre-violet to-kre-pink-bright bg-clip-text text-transparent">
            À propos de Les Délices d'Alexandra
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Les Délices d'Alexandra est votre destination sucrée, offrant une sélection 
                soigneusement choisie de pâtisseries, gâteaux, crêpes et autres douceurs. Nous croyons 
                que chaque bouchée doit être une expérience délicieuse et mémorable.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Depuis notre création, nous nous engageons à vous proposer des produits de qualité, 
                alliant saveurs authentiques et techniques artisanales, pour que vous puissiez savourer 
                chaque moment avec gourmandise.
              </p>
              <div className="flex space-x-8 text-center mt-8">
                <div>
                  <div className="text-3xl font-bold text-kre-violet">200+</div>
                  <div className="text-gray-600">Recettes</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-kre-violet">3000+</div>
                  <div className="text-gray-600">Clients satisfaits</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-kre-violet">5</div>
                  <div className="text-gray-600">Années de passion</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/alex1.jpg" // Remplace par une image de pâtisserie
                  alt="Collection de pâtisseries"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-kre-violet to-kre-pink-bright rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">Alex</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;