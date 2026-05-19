import Link from "next/link";
import Image from "next/image";

export default function PreApprovalBlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <article className="container mx-auto px-4 py-24 max-w-4xl">
        <Link href="/blog" className="text-sm font-bold uppercase tracking-widest text-blue-700 hover:text-blue-900 mb-12 inline-block">
          &larr; Back to Blog
        </Link>
        
        <header className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-4">Real Estate Advice</p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 italic font-serif leading-tight">
            Pre-approval Comes Before Shopping: Your Competitive Edge in the 2026 Market
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
            In the fast-paced 2026 Saskatchewan real estate market, securing your financing first is the single most important step in the residential buying process.
          </p>
          <div className="flex items-center gap-4 text-slate-500 text-sm font-medium uppercase tracking-wider">
            <span>May 19, 2026</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span>Leah Creighton</span>
          </div>
        </header>

        <div className="prose prose-slate prose-lg max-w-none">
          <p className="text-xl text-slate-700 leading-relaxed font-medium mb-8">
            A pre-approved buyer is mathematically stronger, strategically faster, and far more attractive to sellers.
          </p>

          <p className="mb-6 text-slate-600 leading-relaxed">
            In the fast-paced 2026 Saskatchewan real estate market, viewing homes without a mortgage pre-approval is like trying to buy groceries without a wallet. While attending open houses is exciting, securing your financing first is the single most important step in the residential buying process.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-8 italic font-serif">
            A Stronger Buyer: Mathematical Certainty
          </h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            A mortgage pre-approval is a formal "borrower qualification" process where a lender evaluates your financial health using the five Cs of credit: Character, Capital, Capacity, Credit, and Collateral. By analyzing your Gross Debt Service Ratio (GDSR) and Total Debt Service Ratio (TDSR), a lender determines the exact mortgage amount you can afford.
          </p>
          <p className="mb-12 text-slate-600 leading-relaxed">
            This process specifically accounts for the federal "mortgage stress test," which requires you to qualify at a higher interest rate. Knowing these limits upfront provides "tremendous peace of mind" and prevents you from focusing on properties that are financially out of reach.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-8 italic font-serif">
            A Faster Buyer: Speed in a Supply Crisis
          </h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Speed is paramount in the current climate. As of April 2026, Saskatchewan’s residential housing market has tightened further, with inventory levels sitting more than 50% below historical norms in almost all regions. In this environment, desirable homes are often sold within days of hitting the market.
          </p>
          <p className="mb-12 text-slate-600 leading-relaxed">
            A pre-approved buyer is faster because they can move directly to an offer without the delay of initial qualification. Furthermore, lenders typically guarantee an interest rate for 60 to 120 days while you shop. This protects your purchasing power from market fluctuations, ensuring that your budget remains stable even if interest rates rise before you find "the one."
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-8 italic font-serif">
            More Attractive to Sellers: Certainty in Multiple Offers
          </h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            In a market defined by low supply, multiple offer situations are common. For a seller, the "best" offer isn't always the one with the highest price; it is the one with the highest probability of closing successfully.
          </p>
          <p className="mb-12 text-slate-600 leading-relaxed">
            Most residential contracts are "conditional," meaning they depend on the buyer obtaining bank approval. An offer from a pre-approved buyer signals to the seller that your financial background has already been vetted by a professional lender. This minimizes the seller's risk and places your offer in a "position of strength" compared to competing bids that may still face financing hurdles.
          </p>

          <div className="mt-16 pt-8 border-t border-slate-100 text-sm text-slate-500 italic">
            <p className="mb-4">Leah Creighton | Real Estate Salesperson | LPT Realty</p>
            <p>
              Disclaimer: I am a licensed real estate registrant in the province of Saskatchewan, not a licensed mortgage specialist or financial advisor. The information provided above is for general educational purposes and is based on the April 2026 Saskatchewan Housing Market Report. I strongly recommend that all buyers seek independent professional advice from a qualified mortgage specialist or financial institution regarding their specific financing requirements.
            </p>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-slate-100">
          <div className="bg-slate-50 p-12 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 italic font-serif">Have questions about the market?</h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed">
              Real estate can be complex, but it doesn't have to be daunting. Whether you're buying or selling, I'm here to help you navigate every step with confidence.
            </p>
            <Link href="/contact" className="inline-block px-10 py-5 bg-blue-700 text-white font-bold uppercase tracking-widest text-sm hover:bg-blue-800 transition-colors">
              Book a Consultation
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}
