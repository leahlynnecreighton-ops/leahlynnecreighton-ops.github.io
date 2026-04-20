import Link from "next/link";

export default function FirstBlogPost() {
  const points = [
    {
      title: "Market value isn’t the same as list price.",
      description: "The list price is a strategy; market value is what buyers are actually willing to pay."
    },
    {
      title: "Pre-approval comes before shopping.",
      description: "A buyer who’s pre-approved is stronger, faster, and more attractive to sellers."
    },
    {
      title: "Conditions matter.",
      description: "Most of the time, it’s the buyer who includes conditions, since they act as a safeguard during the purchase process."
    },
    {
      title: "Pricing your house higher isn’t always the best.",
      description: "During the first few days your house is on the market is a great window where buyers are excited and agents are looking. You want your house to be priced just right."
    },
    {
      title: "Staging and presentation drive price.",
      description: "Clean, bright, well-presented homes sell faster and for more."
    },
    {
      title: "A REALTOR® protects your interests.",
      description: "You realtor is on your side. They want what’s best for you."
    },
    {
      title: "The deposit isn’t the same as the down payment.",
      description: "The deposit shows commitment; the down payment comes at closing."
    },
    {
      title: "Completion dates and possession dates are different.",
      description: "Legal transfer, payment, and move-in happen on separate but coordinated days."
    },
    {
      title: "Not all renovations add value.",
      description: "Some updates look great but don’t return the cost when selling."
    },
    {
      title: "Avoid the trap of overpricing.",
      description: "Overpriced homes sit longer, accumulate high days on market, and often need price drops—which signals weakness and invites lowball offers."
    },
    {
      title: "Professional photos and marketing aren’t optional.",
      description: "Online presentation determines who books showings."
    },
    {
      title: "Real estate is emotional—but decisions should be logical.",
      description: "Keeping emotions in check during negotiations leads to better outcomes."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <article className="container mx-auto px-4 py-24 max-w-4xl">
        <Link href="/blog" className="text-sm font-bold uppercase tracking-widest text-blue-700 hover:text-blue-900 mb-12 inline-block">
          &larr; Back to Blog
        </Link>
        
        <header className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-4">Real Estate Insights</p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 italic font-serif leading-tight">
            12 Things I Learned About Real Estate in the Past Year
          </h1>
          <div className="flex items-center gap-4 text-slate-500 text-sm font-medium uppercase tracking-wider">
            <span>April 20, 2026</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span>Leah Creighton</span>
          </div>
        </header>

        <div className="aspect-[21/9] bg-slate-100 mb-16 overflow-hidden">
          <div className="w-full h-full bg-slate-200"></div>
        </div>

        <div className="space-y-12">
          {points.map((point, index) => (
            <div key={index} className="group border-l-4 border-blue-700 pl-8 py-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex gap-4">
                <span className="text-blue-700 font-serif italic">{index + 1}.</span>
                {point.title}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
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
