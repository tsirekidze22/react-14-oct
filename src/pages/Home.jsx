// import heroImage from "../assets/hero.jpg";
import heroImage2 from "../assets/hero-2.jpg";
import ProductsList from "../components/ProductsList";

function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 md:grid-cols-2 md:py-16">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
            Thoughtfully selected
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Everyday essentials.
          </h1>

          <p className="mt-4 max-w-xl text-lg leading-8 text-gray-600">
            Discover simple, functional pieces designed for everyday life.
          </p>
        </div>

        <img
          src={heroImage2}
          alt="Thoughtfully selected home and lifestyle essentials"
          // width="1200"
          // height="900"
          className="h-[320px] w-full rounded-2xl object-cover md:h-[420px]"
        />
      </section>

      <ProductsList />
    </>
  );
}

export default Home;
