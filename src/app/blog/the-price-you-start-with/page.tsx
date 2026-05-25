import Link from "next/link";

export default function FourthBlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <article className="container mx-auto px-4 py-24 max-w-3xl">
        <Link href="/blog" className="text-sm font-bold uppercase tracking-widest text-blue-700 hover:text-blue-900 mb-12 inline-block">
          &larr; Back to Blog
        </Link>
        
        <header className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-4">Real Estate Insights</p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 italic font-serif leading-tight">
            The Price You Start With Can Make, Or Cost You Tens of Thousands of Dollars
          </h1>
          <div className="flex items-center gap-4 text-slate-500 text-sm font-medium uppercase tracking-wider">
            <span>May 25, 2026</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span>Leah Creighton</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none text-slate-600 space-y-6 leading-relaxed">
          <p className="text-xl font-medium text-slate-900">
            Whether you're listing your home or hunting for one, understanding how pricing works is your single biggest advantage in today's market.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 italic font-serif">For Sellers: The Golden Window Is Real</h2>
          <p>
            The first few days your home hits the MLS® are when buyer excitement peaks and agents are actively searching for new listings. A sharp, accurate price gets you in front of the right buyers at exactly the right moment. Miss that window, and you're playing catch-up.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 italic font-serif">Why Overpricing Quietly Works Against You</h2>
          <p>
            It's tempting to list high and "see what happens." But overpricing rarely results in a higher sale price. It usually results in a lower one.
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>You end up helping the competition.</strong> An overpriced home makes nearby, correctly priced homes look like a steal. Buyers will choose them over yours.</li>
            <li><strong>Days on market tell a story.</strong> A listing that sits too long raises red flags. Buyers start wondering what's wrong and begin offering less, not more.</li>
            <li><strong>You become invisible.</strong> Buyers filter searches by price range. If your home is priced above your actual buyer pool, it simply won't show up in their results.</li>
          </ul>
          <p>
            For buyers, this works in your favour: a home that's been sitting is often a sign the seller is ready to negotiate or that a price drop is coming.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 italic font-serif">How a CMA Cuts Through the Guesswork</h2>
          <p>
            A Comparative Market Analysis (CMA) is the tool professionals use to find the right price range grounded in what buyers have actually paid, not what sellers hope to get. It looks at three things:
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>Recently sold properties</strong> — real transactions that show what qualified buyers are actually willing to pay for homes like yours, right now.</li>
            <li><strong>Active listings</strong> — your direct competition. If similar homes are priced lower or offer more, buyers will notice.</li>
            <li><strong>Expired listings</strong> — the price points the market already rejected, and a clear signal of where not to list.</li>
          </ul>

          <p>
            As a buyer, asking to see a CMA on any home you're considering is one of the smartest moves you can make. It tells you whether a listing price is reasonable or whether you're walking into an overpriced situation.
          </p>

          <div className="mt-16 pt-8 border-t border-slate-100 text-sm text-slate-500 italic">
            <p>
              This information is provided for educational purposes based on general real estate principles and Saskatchewan market trends. Pricing recommendations are supported by Comparative Market Analysis (CMA) data in accordance with SREC guidelines.
            </p>
            <p className="mt-2">*Based on the SRA April 2026 Market Report</p>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-slate-100">
          <div className="bg-slate-50 p-12 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 italic font-serif">Ready for a Strategic Price?</h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed">
              Let's look at the data and ensure your home is positioned to win. Contact me today for a comprehensive Comparative Market Analysis.
            </p>
            <Link href="/contact" className="inline-block px-10 py-5 bg-blue-700 text-white font-bold uppercase tracking-widest text-sm hover:bg-blue-800 transition-colors">
              Get Your CMA
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}
