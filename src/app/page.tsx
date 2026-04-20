import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] bg-slate-100 flex items-center overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-2xl opacity-40"></div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
              Find Your <br />
              <span className="text-blue-700 italic font-serif">Perfect Home.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              Dedicated real estate expertise tailored to your goals. Whether you are buying your first home or selling a luxury estate, I am here to guide you every step of the way.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/buy" className="px-8 py-4 bg-blue-700 text-white font-semibold rounded-none hover:bg-blue-800 transition-all uppercase tracking-widest text-sm">
                Explore Listings
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-semibold rounded-none hover:bg-slate-50 transition-all uppercase tracking-widest text-sm">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* Featured Services Preview */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-4">Our Expertise</h2>
            <h3 className="text-4xl font-bold text-slate-900">Services Designed for Your Success</h3>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300">
            <h4 className="text-xl font-bold mb-4">Buying</h4>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Navigating the market to find the best value and the right neighborhood for your lifestyle.
            </p>
            <Link href="/buy" className="text-sm font-bold uppercase tracking-widest text-blue-700 hover:text-blue-900 flex items-center gap-2">
              Learn More <span>&rarr;</span>
            </Link>
          </div>
          
          <div className="p-8 border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300">
            <h4 className="text-xl font-bold mb-4">Selling</h4>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Strategic marketing and expert negotiation to ensure you get the maximum value for your home.
            </p>
            <Link href="/sell" className="text-sm font-bold uppercase tracking-widest text-blue-700 hover:text-blue-900 flex items-center gap-2">
              Learn More <span>&rarr;</span>
            </Link>
          </div>
          
          <div className="p-8 border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300">
            <h4 className="text-xl font-bold mb-4">Consultation</h4>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Personalized advice on market trends, property investments, and long-term real estate planning.
            </p>
            <Link href="/contact" className="text-sm font-bold uppercase tracking-widest text-blue-700 hover:text-blue-900 flex items-center gap-2">
              Learn More <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 py-20 w-full text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 italic font-serif">Ready to take the next step?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Contact me today for a complimentary market analysis or to begin your home search journey.
          </p>
          <Link href="/contact" className="inline-block px-10 py-5 bg-white text-blue-700 font-bold uppercase tracking-widest text-sm hover:bg-blue-50 transition-colors">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
