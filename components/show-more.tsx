"use client";

import Button from "./button";

interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (newLimit: number) => void;
}

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit);
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
