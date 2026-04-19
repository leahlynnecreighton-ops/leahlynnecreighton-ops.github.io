export default function SellPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-3xl">
        <h1 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-4">Selling Your Property</h1>
        <h2 className="text-5xl font-bold text-slate-900 mb-8 italic font-serif">Maximum exposure, premium results.</h2>
        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
          Selling a home is more than just a transaction; it's a major life transition. My goal is to make the process as seamless as possible while achieving the highest possible return on your investment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        <div className="bg-slate-50 p-10 border border-slate-100">
          <h3 className="text-2xl font-bold mb-6">Strategic Marketing</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            I use data-driven strategies and premium marketing tools to ensure your property reaches the right audience.
          </p>
          <ul className="space-y-3 text-slate-700 font-medium">
            <li className="flex items-center gap-2"><span className="text-blue-700">✓</span> Professional photography & staging</li>
            <li className="flex items-center gap-2"><span className="text-blue-700">✓</span> High-impact digital advertising</li>
            <li className="flex items-center gap-2"><span className="text-blue-700">✓</span> Extensive broker network</li>
          </ul>
        </div>
        <div className="bg-slate-50 p-10 border border-slate-100">
          <h3 className="text-2xl font-bold mb-6">Market Analysis</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Receive a comprehensive valuation of your home based on current market trends and recent sales in your area.
          </p>
          <ul className="space-y-3 text-slate-700 font-medium">
            <li className="flex items-center gap-2"><span className="text-blue-700">✓</span> Detailed CMA (Comparative Market Analysis)</li>
            <li className="flex items-center gap-2"><span className="text-blue-700">✓</span> Pricing strategy optimization</li>
            <li className="flex items-center gap-2"><span className="text-blue-700">✓</span> Value-add renovation advice</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
