"use client";

import { updateSearchParams } from "@/lib/utils";
import Button from "./button";
import { useRouter } from "next/navigation";

interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: any;
}

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathName);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <Button
          title="Show More"
          type="button"
          className="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
