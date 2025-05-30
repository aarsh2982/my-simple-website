const Services = () => (
  <section className="container mx-auto px-4 py-10">
    <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
    
    <div className="grid gap-8 md:grid-cols-3">
      {/* Web Development */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581090700227-1e8a6bfa44e2?auto=format&fit=crop&w=800&q=80"
          alt="Web Development"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="text-gray-600">Build modern and performant websites tailored to your business needs.</p>
        </div>
      </div>

      {/* UI/UX Design */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80"
          alt="UI/UX Design"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
          <p className="text-gray-600">Craft intuitive and engaging interfaces to enhance user experience.</p>
        </div>
      </div>

      {/* SEO Optimization */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
          alt="SEO Optimization"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
          <p className="text-gray-600">Boost your visibility with on-page and technical SEO strategies.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
