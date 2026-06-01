import Link from "next/link";

export default function StagingAndPresentationBlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <article className="container mx-auto px-4 py-24 max-w-4xl">
        <Link href="/blog" className="text-sm font-bold uppercase tracking-widest text-blue-700 hover:text-blue-900 mb-12 inline-block">
          &larr; Back to Blog
        </Link>
        
        <header className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-4">Real Estate Strategy</p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 italic font-serif leading-tight">
            Staging and Presentation drive price. Clean, bright, well-presented homes sell faster and for more
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
            In a market with inventory more than 50% below historical norms, buyers are motivated — but they still pay more for homes that feel right the moment they walk in.
          </p>
          <div className="flex items-center gap-4 text-slate-500 text-sm font-medium uppercase tracking-wider">
            <span>June 1, 2026</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span>Leah Creighton</span>
          </div>
        </header>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 py-12 border-y border-slate-100">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-700 mb-2 font-serif italic">50%+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Below historical inventory</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-700 mb-2 font-serif italic">~2hrs</div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Decision time for buyers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-700 mb-2 font-serif italic">$0–$500</div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500">In cosmetic touch-ups</div>
          </div>
        </div>

        <div className="prose prose-slate prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 italic font-serif">
            First impressions set the price ceiling
          </h2>
          <p className="text-xl text-slate-700 leading-relaxed font-medium mb-8">
            Buying a home is emotional first, logical second. Most buyers make up their minds within the first showing — and that gut reaction translates directly into how much they're willing to offer.
          </p>

          <p className="mb-6 text-slate-600 leading-relaxed">
            A well-presented home doesn't just sell faster. It sells for more. Homes that linger on the market due to condition concerns often end up selling below fair market value — even in a low-inventory environment. Don't let presentation cost you equity.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-8 italic font-serif">
            The Checklist: Three things that move the needle
          </h2>
          
          <div className="space-y-8 mb-12">
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Professional Cleaning</h4>
              <p className="text-slate-600 leading-relaxed">
                A deep clean signals care and maintenance. Bright, fresh-smelling rooms give buyers confidence — and confidence turns into offers.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Declutter and Depersonalize</h4>
              <p className="text-slate-600 leading-relaxed">
                Buyers need to picture themselves living there. Remove excess furniture and personal items from closets and main spaces to let the home — not your stuff — do the talking.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Address the Small Stuff</h4>
              <p className="text-slate-600 leading-relaxed">
                Scuffed walls, a sticky door, a dripping tap — minor defects signal bigger problems to buyers. A quick fix costs little and removes doubt from the equation.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-8 italic font-serif">
            For Buyers: What to look for
          </h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Staging and presentation are a seller's best tool, and as a buyer it's worth knowing the difference between a well-maintained home and a well-staged one. A professional showing reflects care — but your agent's role is to look beneath the surface: asking the right questions, reviewing the disclosure, and helping you see past the paint.
          </p>
          <p className="mb-12 text-slate-600 leading-relaxed">
            A beautiful presentation can inspire confidence, but your offer price should always be grounded in a current Comparative Market Analysis — not how good the kitchen smells.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-8 italic font-serif">
            How your agent helps
          </h2>
          <p className="mb-12 text-slate-600 leading-relaxed">
            Whether you're buying or selling, a Comparative Market Analysis (CMA) shows what real buyers are actually paying in your neighbourhood right now — not six months ago. It's the foundation of a smart pricing and offer strategy.
          </p>

          <div className="bg-slate-900 text-white p-12 mb-16">
            <h3 className="text-2xl font-bold mb-8 italic font-serif">What a CMA tells you:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <li>
                <div className="font-bold text-blue-400 mb-1">Recent comparable sales</div>
                <div className="text-slate-300 text-sm">What similar homes sold for</div>
              </li>
              <li>
                <div className="font-bold text-blue-400 mb-1">Days on market</div>
                <div className="text-slate-300 text-sm">How fast inventory is moving</div>
              </li>
              <li>
                <div className="font-bold text-blue-400 mb-1">List-to-sale price ratio</div>
                <div className="text-slate-300 text-sm">How much negotiating room exists</div>
              </li>
              <li>
                <div className="font-bold text-blue-400 mb-1">Current competition</div>
                <div className="text-slate-300 text-sm">What buyers are choosing between</div>
              </li>
            </ul>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-100 text-sm text-slate-500 italic">
            <p className="mb-4">Leah Creighton | Real Estate Salesperson | LPT Realty</p>
            <p>
              Disclaimer: This blog post is for educational purposes only and does not constitute legal, accounting, or professional advice. Real estate laws and market conditions can vary; please consult with a qualified professional regarding your specific circumstances. While registrants provide valuable guidance, we are not building inspectors, engineers, or lawyers; it is a registrant's duty to recommend that you seek outside professional expertise for specialized matters.
            </p>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-slate-100">
          <div className="bg-slate-50 p-12 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 italic font-serif">Ready to talk numbers?</h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed">
              Whether you're thinking of listing or looking to buy in this market, a conversation starts with a CMA. Reach out to get one prepared for your property or target neighbourhood.
            </p>
            <Link href="/contact" className="inline-block px-10 py-5 bg-blue-700 text-white font-bold uppercase tracking-widest text-sm hover:bg-blue-800 transition-colors">
              Request a CMA
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}
