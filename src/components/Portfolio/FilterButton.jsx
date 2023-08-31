export default function FilterButton({ filterName, selected, onFilterSelect }) {
  const onClick = (e) => {
    e.preventDefault();
    onFilterSelect(filterName);
  };

  return (
    <button
      type="button"
      className={`btn${filterName === selected ? ' selected' : ''}`}
      onClick={onClick}
    >
      {filterName}
    </button>
  );
}
