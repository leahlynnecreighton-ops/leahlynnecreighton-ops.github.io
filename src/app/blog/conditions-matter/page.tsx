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
            The Safeguard of the Sale: Why Conditions Matter in Real Estate
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
            In the journey toward homeownership, the Conditions section of your contract acts as the vital roadmap to a successful closing.
          </p>
          <div className="flex items-center gap-4 text-slate-500 text-sm font-medium uppercase tracking-wider">
            <span>May 19, 2026</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span>Leah Creighton</span>
          </div>
        </header>

        <div className="prose prose-slate prose-lg max-w-none">
          <p className="text-xl text-slate-700 leading-relaxed font-medium mb-8">
            Often referred to in the industry as "subject to" clauses, these are formally known as conditions precedent.
          </p>

          <p className="mb-6 text-slate-600 leading-relaxed">
            In the journey toward homeownership, the Residential Contract of Purchase and Sale is the roadmap that guides both buyers and sellers to a successful closing. One of the most critical sections of this contract is the Conditions section.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-8 italic font-serif">
            What is a Condition Precedent?
          </h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            A condition precedent is a term in a contract that must be satisfied before the contract is to be performed. Essentially, while the buyer and seller have reached an agreement on price and basic terms, the transaction remains "conditional" until specific unknowns are resolved.
          </p>
          <p className="mb-12 text-slate-600 leading-relaxed">
            If these conditions are not satisfied or waived in writing by a specified deadline, the contract typically becomes null and void, and the buyer's deposit is returned.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-8 italic font-serif">
            The Buyer’s Safeguard
          </h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Most of the time, it is the buyer who includes conditions because they act as a vital safeguard during the purchase process. These clauses allow a buyer to demonstrate serious intent while protecting themselves from risks they cannot immediately assess. Common safeguards include:
          </p>
          
          <div className="space-y-8 mb-12">
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Mortgage Financing Approval</h4>
              <p className="text-slate-600 leading-relaxed">
                Even if a buyer is pre-qualified, this condition ensures they can secure a formal commitment from a lender for the specific property at terms they can afford.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Professional Home Inspection</h4>
              <p className="text-slate-600 leading-relaxed">
                This allows a buyer to have a qualified expert evaluate the property’s physical condition, identifying "red flags" or latent defects that may not be visible to the untrained eye.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Review of Condominium Documents</h4>
              <p className="text-slate-600 leading-relaxed">
                For re-sale condominiums, this typically involves reviewing an estoppel certificate and other corporate records to understand the financial health and bylaws of the condominium corporation.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-8 italic font-serif">
            The Seller’s Perspective
          </h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            While conditions protect buyers, sellers often view them as a period of uncertainty. To manage this risk, sellers may negotiate shorter timelines for condition removal.
          </p>
          <p className="mb-12 text-slate-600 leading-relaxed">
            A common strategy is the Option Clause (sometimes called a time clause), which allows a seller to continue marketing the property. If the seller receives another offer, they can give the first buyer a set number of hours (e.g., a "48-hour notice") to either remove all conditions or let the contract collapse so the seller can move forward with the second buyer.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-8 italic font-serif">
            The Importance of Precision
          </h2>
          <p className="mb-12 text-slate-600 leading-relaxed">
            Drafting these clauses requires skill and diligence. As a registrant, my role is to ensure these conditions reflect the true intent of my clients and are worded clearly to avoid future disputes. Once a condition is met, it must be formally removed using the mandatory Notice to Remove Condition(s) form.
          </p>

          <div className="mt-16 pt-8 border-t border-slate-100 text-sm text-slate-500 italic">
            <p className="mb-4">Leah Creighton | Real Estate Salesperson | LPT Realty</p>
            <p>
              Disclaimer: This blog post is for educational purposes only and does not constitute legal, accounting, or professional advice. Real estate laws and market conditions can vary; please consult with a qualified professional regarding your specific circumstances. While registrants provide valuable guidance, we are not building inspectors, engineers, or lawyers; it is a registrant's duty to recommend that you seek outside professional expertise for specialized matters.
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
