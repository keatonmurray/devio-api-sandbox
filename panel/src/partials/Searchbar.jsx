
const Searchbar = ({theme}) => {
  return (
    <div>
      <form action="">
        <input
            type="search"
            className={`form-control ${theme === 'dark' ? 'bg-dark text-white border-secondary' : ''}`}
            placeholder="Global Search"
            />
      </form>
    </div>
  )
}

export default Searchbar
