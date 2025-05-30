const Contact = () => (
  <section className="container mx-auto px-4 py-10">
    <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-3xl mx-auto">
      <img
        src="https://images.unsplash.com/photos/a-rainbow-arches-over-a-majestic-mountain-landscape-vwFvhJf6u_I?auto=format&fit=crop&w=1600&q=80"
        alt="Contact illustration"
        className="w-full h-64 object-cover"
      />

      <div className="p-6 text-gray-700 text-center">
        <p className="text-lg mb-2">We'd love to hear from you! Reach out to us anytime.</p>
        <p className="text-base">
          📧 <span className="font-medium">Email:</span> hello@simplesite.com
        </p>
        <p className="text-base">
          📞 <span className="font-medium">Phone:</span> +1 234 567 890
        </p>
      </div>
    </div>
  </section>
);

export default Contact;
