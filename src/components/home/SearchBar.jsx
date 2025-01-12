import { Search } from "lucide-react"; 

const SearchBar = ({ value, onChange, placeholder="Search...", id="search"}) => {
    return (
        <div className="relative w-80">
            <label htmlFor={id} className="sr-only">
                Search
            </label>
            <input 
                type="search"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full pl-10 pr-4 py-2 text-gray-700 bg-gray-100 rounded-md border border-gray-300 
                        focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors placeholder:text-gray-500"
                        aria-label="Search input"
            />
            {/* Search Icon */}
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-500">
                <Search className="h-5 w-5" aria-hidden="true" />
            </div>
        </div>
    );
};

export default SearchBar;