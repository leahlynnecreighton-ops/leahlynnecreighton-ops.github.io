import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  const posts = [
    {
      title: "12 Things I Learned About Real Estate in the Past Year",
      excerpt: "The market is constantly evolving. From list price strategies to the emotional logic of negotiations, here is what 12 months in real estate taught me.",
      date: "April 20, 2026",
      slug: "first-blog",
      image: "/images/blog/city-map.jpg",
    },
    {
      title: "Market Value isn't the same as List Price",
      excerpt: "A list price isn’t a promise. It’s a strategy. Learn why market value and list price aren't always the same.",
      date: "April 28, 2026",
      slug: "market-value-vs-list-price",
    },
    {
      title: "Pre-approval comes before shopping.",
      excerpt: "A buyer who's pre-approved is stronger, faster, and more attractive to sellers.",
      date: "May 13, 2026",
      slug: "pre-approval-before-shopping",
    },
    {
      title: "Conditions matter.",
      excerpt: "Most of the time, it’s the buyer who includes conditions, since they act as a safeguard during the purchase process.",
      date: "May 19, 2026",
      slug: "conditions-matter",
    },
    {
      title: "Pricing your house higher isn't always the best",
      excerpt: "During the first few days your house is on the market is a great window where buyers are excited and agents are looking. You want your house to priced just right.",
      date: "May 25, 2026",
      slug: "pricing-high-not-always-best",
    },
    {
      title: "The Price You Start With Can Make, Or Cost You Tens of Thousands of Dollars",
      excerpt: "Whether you're listing your home or hunting for one, understanding how pricing works is your single biggest advantage in today's market.",
      date: "May 25, 2026",
      slug: "the-price-you-start-with",
    },
    {
      title: "Staging and Presentation drive price. Clean, bright, well-presented homes sell faster and for more",
      excerpt: "Buying a home is emotional first, logical second. Most buyers make up their minds within the first showing — and that gut reaction translates directly into how much they're willing to offer.",
      date: "June 1, 2026",
      slug: "staging-and-presentation-drive-price",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-3xl mb-16">
        <h1 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-4">Real Estate Blog</h1>
        <h2 className="text-5xl font-bold text-slate-900 mb-8 italic font-serif">Insights & Advice.</h2>
        <p className="text-xl text-slate-600 leading-relaxed">
          Stay informed with the latest market updates, home improvement tips, and real estate strategies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <Link key={i} href={post.slug === "#" ? "/blog" : `/blog/${post.slug}`} className="group cursor-pointer block">
            <div className="aspect-[16/10] bg-slate-100 mb-6 overflow-hidden relative">
              {post.image ? (
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full bg-slate-200 group-hover:scale-105 transition-transform duration-500"></div>
              )}
            </div>
            <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-2">{post.date}</p>
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-700 transition-colors">{post.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
            <span className="text-xs font-bold uppercase tracking-widest border-b-2 border-blue-700 pb-1 group-hover:border-blue-900 transition-colors">Read More</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
