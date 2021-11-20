import { FindIcon } from '../assets/icons';

export const SearchBox = ({ value = '', onChange = () => {}, placeholder = 'Search' }) => {
  return (
    <form className="flex items-center px-4 w-72 md:w-96 max-w-md gap-2.5 bg-neutral-200 rounded-lg border-2 border-transparent focus-within:border-neutral-300">
      <label htmlFor="headerSearch">
        <FindIcon width={20} height={20} />
      </label>
      <input
        className="bg-transparent outline-none px-0 py-3 border-0 focus:shadow-none focus:border-transparent  w-full focus:ring-transparent"
        type="text"
        id="headerSearch"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </form>
  );
};

export default SearchBox;