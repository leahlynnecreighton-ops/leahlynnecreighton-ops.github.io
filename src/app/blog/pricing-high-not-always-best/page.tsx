import Link from "next/link";

export default function PricingHighBlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <article className="container mx-auto px-4 py-24 max-w-3xl">
        <Link href="/blog" className="text-sm font-bold uppercase tracking-widest text-blue-700 hover:text-blue-900 mb-12 inline-block">
          &larr; Back to Blog
        </Link>
        
        <header className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-4">Real Estate Insights</p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 italic font-serif leading-tight">
            Pricing your house higher isn't always the best
          </h1>
          <div className="flex items-center gap-4 text-slate-500 text-sm font-medium uppercase tracking-wider">
            <span>May 25, 2026</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span>Leah Creighton</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none text-slate-600 space-y-6 leading-relaxed">
          <p>
            During the first few days your house is on the market is a great window where buyers are excited and agents are looking. You want your house to priced just right.
          </p>
        </div>

        <footer className="mt-24 pt-12 border-t border-slate-100">
          <div className="bg-slate-50 p-12 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 italic font-serif">Thinking about selling?</h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed">
              Pricing strategy is key to a successful sale. Let's discuss how to position your home for the best possible outcome.
            </p>
            <Link href="/contact" className="inline-block px-10 py-5 bg-blue-700 text-white font-bold uppercase tracking-widest text-sm hover:bg-blue-800 transition-colors">
              Get in Touch
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}
