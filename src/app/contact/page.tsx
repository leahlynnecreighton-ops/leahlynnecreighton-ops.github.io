export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="flex-1">
          <h1 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-4">Contact Me</h1>
          <h2 className="text-5xl font-bold text-slate-900 mb-8 italic font-serif">Let's connect.</h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            Ready to discuss your real estate goals? Fill out the form below or reach out directly via phone or email.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-2">Direct Line</h3>
              <p className="text-xl font-medium text-blue-700">(555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-2">Email Address</h3>
              <p className="text-xl font-medium text-blue-700">leah@example.com</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-2">Office Location</h3>
              <p className="text-slate-600 leading-relaxed">
                123 Realty Way, Suite 400<br />
                City, ST 12345
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-slate-50 p-10 border border-slate-100 shadow-sm">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest">First Name</label>
                <input type="text" className="w-full px-4 py-3 border border-slate-200 focus:outline-none focus:border-blue-700 bg-white" placeholder="Jane" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest">Last Name</label>
                <input type="text" className="w-full px-4 py-3 border border-slate-200 focus:outline-none focus:border-blue-700 bg-white" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest">Email Address</label>
              <input type="email" className="w-full px-4 py-3 border border-slate-200 focus:outline-none focus:border-blue-700 bg-white" placeholder="jane@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest">Interest</label>
              <select className="w-full px-4 py-3 border border-slate-200 focus:outline-none focus:border-blue-700 bg-white">
                <option>Buying a Home</option>
                <option>Selling a Home</option>
                <option>Investment Opportunities</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 border border-slate-200 focus:outline-none focus:border-blue-700 bg-white" placeholder="Tell me about your goals..."></textarea>
            </div>
            <button className="w-full py-4 bg-blue-700 text-white font-bold uppercase tracking-widest text-sm hover:bg-blue-800 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
