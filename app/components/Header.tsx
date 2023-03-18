// src/components/Header.tsx

interface HeaderProps {
    onAddEntryClick: () => void;
  }
  
  export default function Header({ onAddEntryClick }: HeaderProps) {
    return (
      <header className="bg-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            <a href="#" className="text-lg font-bold text-white">
              Homeschool Tracker
            </a>
            <button
              className="text-white focus:outline-none"
              onClick={onAddEntryClick}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-current"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2a10 10 0 1 1-7.745 16.287l1.778-1.768A7.5 7.5 0 1 0 12 4.5a.5.5 0 0 1 1 0 8.5 8.5 0 1 1-5.385 7.985l-.217.16 1.148 1.149A10 10 0 0 1 12 2zm0 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    );
  }
  