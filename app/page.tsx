import CarCard from "@/components/car-card";
import Filters from "@/components/filters";
import Hero from "@/components/hero";
import Search from "@/components/search";
import { fetchCars } from "@/lib/utils";

export default async function Home({ searchParams }) {
  const allCars = await fetchCars({
    manufacturer: searchParams?.manufacturer || "",
    year: searchParams?.year || 2022,
    fuel: searchParams?.fuel || "",
    limit: searchParams?.limit || 10,
    model: searchParams?.model || "",
  });

  const isEmpty = !Array.isArray(allCars) || !allCars.length || !allCars;

  // console.log(allCars);
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

        {!isEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-2xl font-bold">Oops no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
