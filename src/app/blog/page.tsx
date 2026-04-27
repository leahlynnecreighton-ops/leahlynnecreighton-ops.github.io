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
      excerpt: "First impressions are everything. Learn how to highlight your home's best features.",
      date: "April 28, 2026",
      slug: "#",
    },
    {
      title: "Market Trends: What to Expect this Summer",
      excerpt: "An analysis of current inventory levels and interest rate projections.",
      date: "April 10, 2026",
      slug: "#",
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
