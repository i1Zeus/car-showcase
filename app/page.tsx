"use client";

import CarCard from "@/components/car-card";
import Filters from "@/components/filters";
import Hero from "@/components/hero";
import Search from "@/components/search";
import ShowMore from "@/components/show-more";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/lib/utils";
import { useEffect, useState } from "react";

// @ts-ignore
export default function Home() {
  const [allCars, setAllCars] = useState([]);

  const [loading, setLoading] = useState(false);

  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    try {
      setLoading(true);
      const results = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });

      setAllCars(results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [manufacturer, model, fuel, year, limit]);

  const isEmpty = !Array.isArray(allCars) || !allCars.length || !allCars;

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
            <Filters title="fuel" options={fuels} />
            <Filters title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(limit || 10) / 10}
              isNext={(limit || 10) < allCars.length}
            />
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
