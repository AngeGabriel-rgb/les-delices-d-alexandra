
const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-kre-lavender/20 to-kre-pink-light/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-kre-violet to-kre-pink-bright bg-clip-text text-transparent">
            À propos de KRE Shop
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                KRE Shop est votre destination mode privilégiée, offrant une sélection soigneusement 
                choisie de vêtements pour hommes et femmes. Nous croyons que la mode doit être 
                accessible, élégante et refléter votre personnalité unique.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Depuis notre création, nous nous engageons à vous proposer des pièces de qualité, 
                alliant style contemporain et confort, pour que vous vous sentiez confiant et 
                authentique dans chaque tenue.
              </p>
              <div className="flex space-x-8 text-center mt-8">
                <div>
                  <div className="text-3xl font-bold text-kre-violet">500+</div>
                  <div className="text-gray-600">Produits</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-kre-violet">1000+</div>
                  <div className="text-gray-600">Clients satisfaits</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-kre-violet">3</div>
                  <div className="text-gray-600">Années d'expérience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="KRE Shop Collection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-kre-violet to-kre-pink-bright rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">KRE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
