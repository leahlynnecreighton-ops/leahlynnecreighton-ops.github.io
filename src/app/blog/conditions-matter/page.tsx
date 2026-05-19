import Link from "next/link";

export default function ConditionsMatterBlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <article className="container mx-auto px-4 py-24 max-w-4xl">
        <Link href="/blog" className="text-sm font-bold uppercase tracking-widest text-blue-700 hover:text-blue-900 mb-12 inline-block">
          &larr; Back to Blog
        </Link>
        
        <header className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-4">Real Estate Strategy</p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 italic font-serif leading-tight">
            Conditions matter.
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
            Most of the time, it’s the buyer who includes conditions, since they act as a safeguard during the purchase process.
          </p>
          <div className="flex items-center gap-4 text-slate-500 text-sm font-medium uppercase tracking-wider">
            <span>May 19, 2026</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span>Leah Creighton</span>
          </div>
        </header>

        <div className="prose prose-slate prose-lg max-w-none">
          <p className="text-xl text-slate-700 leading-relaxed font-medium mb-8">
            In the excitement of finding the perfect home, it's easy to view conditions as just more paperwork. But in reality, they are the most powerful protection a buyer has.
          </p>

          <p className="mb-6 text-slate-600 leading-relaxed">
            A real estate contract is a legally binding agreement. Without conditions, once you sign, you are committed to the purchase regardless of what you might discover later. Conditions create a "conditional period"—typically 5 to 10 business days—that allows you to perform your due diligence before the deal becomes firm and final.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-8 italic font-serif">
            The Three Pillars of Buyer Protection
          </h2>

          <h3 className="text-2xl font-bold text-slate-900 mb-6 italic font-serif">1. Financing: Beyond the Pre-Approval</h3>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Even if you have a pre-approval (which we always recommend!), the lender still needs to approve the specific property you've chosen. They want to ensure the home's value justifies the loan amount. A financing condition gives your lender time to review the contract and, if necessary, perform an appraisal. If the bank isn't satisfied with the property, this condition allows you to walk away with your deposit intact.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mb-6 italic font-serif">2. Home Inspection: Uncovering the Hidden</h3>
          <p className="mb-6 text-slate-600 leading-relaxed">
            In Saskatchewan, where shifting soils and extreme temperatures are part of life, a professional home inspection is non-negotiable. An inspector looks at the "bones" of the house—the foundation, roof, plumbing, and electrical systems. This safeguard ensures you aren't walking into a "money pit" and gives you the leverage to ask for repairs or a price adjustment if major issues are found.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mb-6 italic font-serif">3. Property Disclosure Review</h3>
          <p className="mb-12 text-slate-600 leading-relaxed">
            Sellers often provide a Property Condition Disclosure Statement (PCDS). This is a document where they disclose their knowledge of the home's history—past basement leaks, roof repairs, or known defects. Reviewing this with your REALTOR® ensures you have a clear picture of what you're buying before you remove your conditions.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-8 italic font-serif">
            What Happens Next?
          </h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Once your conditions are satisfied, you sign a <strong>Notice to Remove Conditions</strong>. At this point, the contract becomes firm and binding. The house is officially yours (pending closing day!), and the "Sold" sign goes up.
          </p>
          <p className="mb-12 text-slate-600 leading-relaxed">
            If, during the conditional period, a condition cannot be met—for example, if the inspection reveals a major structural issue you aren't comfortable with—you can choose not to remove your conditions. The deal then collapses, and your deposit is typically returned to you.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-8 italic font-serif">
            The Bottom Line
          </h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Conditions aren't there to make the process harder; they are there to make it safer. As your REALTOR®, my job is to ensure your contract includes the right safeguards to protect your interests and your investment.
          </p>

          <div className="mt-16 pt-8 border-t border-slate-100 text-sm text-slate-500 italic">
            <p className="mb-4">Leah Creighton | Real Estate Salesperson | LPT Realty</p>
            <p>
              Disclaimer: I am a licensed real estate registrant in the province of Saskatchewan. This information is for general educational purposes and does not constitute legal advice. Always consult with a professional regarding your specific real estate transaction.
            </p>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-slate-100">
          <div className="bg-slate-50 p-12 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 italic font-serif">Ready to start your search?</h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed">
              Buying a home is a big step, but you don't have to do it alone. I'm here to guide you through every safeguard and strategy.
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
