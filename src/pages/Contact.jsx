function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
        We're here to help
      </p>

      <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
        Get in touch.
      </h1>

      <p className="mt-4 max-w-xl leading-7 text-gray-600">
        Have a question about an order or one of our products? We'd love to hear
        from you.
      </p>

      <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Customer support
        </h2>

        <p className="mt-2 text-gray-600">
          Email us and we'll get back to you.
        </p>

        <a
          href="mailto:hello@forma.example"
          className="mt-3 inline-block font-medium text-gray-900 underline underline-offset-4"
        >
          hello@forma.example
        </a>
      </div>
    </section>
  );
}

export default Contact;
