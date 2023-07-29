interface filtersProps {
  title: string;
}

const Filters = ({ title }: filtersProps) => {
  return (
    <div>
      {title}
    </div>
  );
};

export default Filters;
