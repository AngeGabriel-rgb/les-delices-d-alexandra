"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Délicieuses Pâtisseries",
      subtitle: "Découvrez notre sélection de douceurs irrésistibles",
    },
    {
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Gâteaux Artisanaux",
      subtitle: "Des créations uniques pour toutes les occasions",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Crêpes Gourmandes",
      subtitle: "Savourez nos crêpes sucrées et salées",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Macarons Colorés",
      subtitle: "Une explosion de saveurs et de couleurs",
    },
   
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
            {/* Overlay léger pour la lisibilité du texte */}
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
              <div className="max-w-4xl px-4 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl text-shadow-lg animate-slide-up">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-3xl mb-10 drop-shadow-xl text-shadow animate-slide-up animation-delay-200">
                  {slide.subtitle}
                </p>
                <button
                  onClick={() => {
                    const gallerySection = document.getElementById("gallery")
                    if (gallerySection) {
                      gallerySection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="bg-white/95 text-gray-800 px-10 py-4 rounded-full text-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110 shadow-2xl animate-bounce-subtle"
                >
                  Découvrir nos créations
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/40 transition-all shadow-xl hover:scale-110"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/40 transition-all shadow-xl hover:scale-110"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 shadow-lg ${
              index === currentSlide
                ? "bg-white scale-125 shadow-white/50"
                : "bg-white/60 hover:bg-white/80 hover:scale-110"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  )
}

export default Hero
