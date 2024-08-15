import css from "./SearchBar.module.css";
const SearchBar = ({ onSearch }) => {
  function handleSearch(evt) {
    evt.preventDefault();
    const formElem = evt.currentTarget;
    const query = formElem.elements.name.value.trim("");
    console.log(query);
    onSearch(query);
    formElem.reset();
  }
  return (
    <header>
      <form className={css.form} onSubmit={handleSearch}>
        <input
          className={css.input}
          type="text"
          name="name"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
