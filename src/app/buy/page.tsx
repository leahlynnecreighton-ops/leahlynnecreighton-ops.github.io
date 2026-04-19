export default function BuyPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-3xl">
        <h1 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-4">Buying a Home</h1>
        <h2 className="text-5xl font-bold text-slate-900 mb-8 italic font-serif">Find your next chapter.</h2>
        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
          The home buying process can be complex, but it doesn't have to be overwhelming. I am here to provide the local market expertise and personalized attention you need to find the perfect property.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        <div className="bg-slate-50 p-10 border border-slate-100">
          <h3 className="text-2xl font-bold mb-6">Personalized Search</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Get access to the latest listings as soon as they hit the market. We'll refine your search based on what matters most to you.
          </p>
          <ul className="space-y-3 text-slate-700 font-medium">
            <li className="flex items-center gap-2"><span className="text-blue-700">✓</span> Real-time market updates</li>
            <li className="flex items-center gap-2"><span className="text-blue-700">✓</span> Off-market property access</li>
            <li className="flex items-center gap-2"><span className="text-blue-700">✓</span> Neighborhood analysis</li>
          </ul>
        </div>
        <div className="bg-slate-50 p-10 border border-slate-100">
          <h3 className="text-2xl font-bold mb-6">Expert Negotiation</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            From the initial offer to the closing table, I'll represent your interests and ensure you get the best possible terms.
          </p>
          <ul className="space-y-3 text-slate-700 font-medium">
            <li className="flex items-center gap-2"><span className="text-blue-700">✓</span> Strategic offer preparation</li>
            <li className="flex items-center gap-2"><span className="text-blue-700">✓</span> Inspection guidance</li>
            <li className="flex items-center gap-2"><span className="text-blue-700">✓</span> Seamless closing coordination</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
