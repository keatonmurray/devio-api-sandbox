import { useRef, useEffect } from "react";

const Searchbar = ({ theme }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="position-relative">
      <form action="">
        <input
          type="search"
          ref={inputRef}
          className={`form-control pe-5 ${theme === 'dark' ? 'bg-dark text-white border-secondary' : ''}`}
          placeholder="Global Search"
        />
        <div
          className="position-absolute top-50 end-0 translate-middle-y me-1 px-2 py-1 rounded small"
          style={{
            backgroundColor: theme === 'dark' ? '#2c2f36' : '#f1f3f5',
            color: theme === 'dark' ? '#ced4da' : '#6c757d',
            fontSize: '10px',
            borderColor: theme === 'dark' ? '#444' : '#ccc',
            pointerEvents: 'none',
          }}
        >
          Ctrl + K
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
