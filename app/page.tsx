import Filters from "@/components/filters";
import Hero from "@/components/hero";
import Search from "@/components/search";

export default function Home() {
  return (
    <main className="overflow-hidden ">
      <Hero />
      <div id="discover" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalog</h1>
          <p>Explore cars you might like</p>
        </div>
        <div className="home__filters">
          <Search />
          <div className="home__filter-container">
            <Filters title="fuel" />
            <Filters title="year" />
          </div>
        </div>
      </div>
    </main>
  );
}
