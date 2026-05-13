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
            Pre-approval comes before shopping.
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
            A buyer who’s pre-approved is stronger, faster, and more attractive to sellers.
          </p>
          <div className="flex items-center gap-4 text-slate-500 text-sm font-medium uppercase tracking-wider">
            <span>May 13, 2026</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span>Leah Creighton</span>
          </div>
        </header>

        <div className="prose prose-slate prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 italic font-serif">
            Why Pre-Approval Isn't Optional — It's Your Secret Weapon
          </h2>

          <p className="text-xl text-slate-700 leading-relaxed font-medium mb-8">
            Start with your lender.
          </p>
          
          <p className="mb-6 text-slate-600 leading-relaxed">
            There's a moment every first-time homebuyer knows: you find the one. The kitchen, the backyard, the light through the windows at 4 p.m. Your heart is already moving in. You send a message to your agent, ready to make an offer — and that's when you hear it.
          </p>
          
          <p className="mb-8 text-slate-600 leading-relaxed italic font-serif border-l-4 border-blue-700 pl-6">
            "Do you have a pre-approval letter?"
          </p>
          
          <p className="mb-12 text-slate-600 leading-relaxed">
            If the answer is no, you're already behind.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mb-6 italic font-serif">The Order Matters More Than You Think</h3>
          <p className="mb-6 text-slate-600 leading-relaxed">
            In a competitive real estate market, the sequence of your homebuying steps isn't just a suggestion — it's a strategy. And the cardinal rule is this:
          </p>
          <p className="mb-12 text-slate-600 leading-relaxed font-bold text-blue-700">
            Pre-approval comes before shopping. Always.
          </p>
          <p className="mb-12 text-slate-600 leading-relaxed">
            It sounds simple. It's surprisingly easy to ignore. Many buyers fall into the trap of browsing homes for weeks — getting emotionally attached, mentally decorating rooms, mapping commutes — without ever picking up the phone to call a lender. By the time they find a home they love and scramble to get pre-approved, the house is gone.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mb-6 italic font-serif">What Pre-Approval Actually Is</h3>
          <p className="mb-6 text-slate-600 leading-relaxed">
            A pre-approved mortgage establishes the maximum loan amount you qualify for, based on a thorough, professional review of your financial situation and a satisfactory credit assessment. This isn't a ballpark guess — it's a verified number backed by documentation.
          </p>
          <p className="mb-12 text-slate-600 leading-relaxed">
            During the process, lenders evaluate what's known as the Five Cs of Credit: Character, Capital, Capacity, Credit, and Collateral. Each factor helps the lender gauge both your ability and your likelihood to repay the debt. In today's lending environment, the process also includes a federal stress test, which ensures your income can still service the debt even if interest rates rise above your negotiated contract rate. It's a layer of protection — for both you and the lender — that keeps borrowers from overextending in an unpredictable rate environment.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mb-6 italic font-serif">What Pre-Approval Does For You</h3>
          <p className="mb-8 text-slate-600 leading-relaxed">
            Getting pre-approved isn't just paperwork. It's a transformation in how you shop, how sellers see you, and how confidently you can move.
          </p>

          <div className="space-y-8 mb-12">
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">1. You Know Your Real Budget</h4>
              <p className="text-slate-600 leading-relaxed">
                Pre-approval gives you an honest, verified number. That number shapes everything: which neighborhoods make sense, what monthly payment is realistic, and where you shouldn't stretch. Knowing your realistic price range before you begin shopping provides genuine peace of mind and protects you from the financial risk of falling in love with a home you can't responsibly afford.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">2. Your Rate Is Protected</h4>
              <p className="text-slate-600 leading-relaxed">
                One underappreciated benefit: a pre-approval often locks in your interest rate for 60 to 120 days. That means even if market rates climb while you're searching, your budget stays intact. In a volatile rate environment, that kind of protection is worth real money.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">3. You Move Faster</h4>
              <p className="text-slate-600 leading-relaxed">
                In a hot market, homes can receive multiple offers within 48 hours of listing. A pre-approved buyer can move at the speed of the market. You're not waiting on a bank to process documents while someone else — already approved — is signing a contract.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">4. You're More Attractive to Sellers</h4>
              <p className="text-slate-600 leading-relaxed">
                Sellers have one goal: a clean, certain close. Financing is often the most critical and uncertain element of any transaction — and pre-approval means that uncertainty has already been resolved. An offer from a pre-approved buyer carries far less risk of falling through. When sellers compare two similar offers and one comes with pre-approval, the math is simple. They choose certainty.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">5. You Negotiate From Strength</h4>
              <p className="text-slate-600 leading-relaxed">
                A pre-approval letter signals to every seller and listing agent in the room that you're not a tire-kicker. You've sat down with a lender, submitted your financial documents, and had a professional confirm: this person can actually buy a home. That status lets you negotiate from a position of credibility — as a serious, qualified candidate who is prepared to follow through.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-6 italic font-serif">Pre-Approval vs. Pre-Qualification: Know the Difference</h3>
          <p className="mb-6 text-slate-600 leading-relaxed">
            These two terms get used interchangeably, but they're not the same thing.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Pre-qualification is a quick, informal estimate based on self-reported financial information. It takes minutes and means relatively little to a sophisticated seller.
          </p>
          <p className="mb-12 text-slate-600 leading-relaxed">
            Pre-approval is a formal process where the lender verifies your income, assets, employment, and credit — including the stress test. It takes longer and carries real weight. When you walk into a negotiation with a pre-approval letter, you walk in with leverage.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mb-6 italic font-serif">The Emotional Case For Going First</h3>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Here's the underrated benefit no one talks about: pre-approval gives you confidence.
          </p>
          <p className="mb-12 text-slate-600 leading-relaxed">
            When you know your number, you can shop without anxiety. You're not mentally hedging every home tour with "but can I actually afford this?" You know what you're working with. That clarity makes you a better, calmer, more decisive buyer — and that mindset matters when you're making one of the biggest financial decisions of your life.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mb-6 italic font-serif">How to Get Started</h3>
          <div className="space-y-6 mb-12">
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
              <p className="text-slate-600 leading-relaxed pt-1">Choose a lender — your bank, a credit union, or a mortgage broker. Shop around; rates and terms vary.</p>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
              <p className="text-slate-600 leading-relaxed pt-1">Gather your documents</p>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
              <p className="text-slate-600 leading-relaxed pt-1">Submit your application — A pre-approved mortgage establishes the maximum loan for which you qualify based on a professional review of your financial situation and a credit assessment. Unlike a general estimate, this is a verified calculation based on documentation</p>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
              <p className="text-slate-600 leading-relaxed pt-1">Then go shopping — now you're ready.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-6 italic font-serif">The Bottom Line</h3>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Securing pre-approval before you start shopping ensures that your search is focused, your offers are strong and credible, and your path to homeownership is as smooth as possible. A buyer who shows up pre-approved is stronger at the negotiating table, faster in a competitive situation, and more attractive in every seller's eyes.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Don't let the excitement of browsing homes pull you past the most important first step. Before you fall in love with a house, make sure a lender has already confirmed you can have one.
          </p>
          <p className="text-2xl font-bold text-slate-900 italic font-serif text-center mt-12 border-y border-slate-100 py-8">
            Pre-approval first. Everything else second.
          </p>
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
