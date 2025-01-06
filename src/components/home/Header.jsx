// Header
const Header = ({children}) => {
    return (
        <header className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
            <div className="px-4 h-16 flex items-center justify-between">
                {children}
            </div>
        </header>
    );
}

export default Header;