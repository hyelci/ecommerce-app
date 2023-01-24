import { PRICE_FILTER } from "../action";
import { useProductsContext } from "../context/ProductsContext";

export default function Filters() {
  const {
    handleSearch,
    query,
    fetchProducts,
    handleFilter,
    categoryFilter,
    companyFilter,
    colorFilter,
    price,
    priceFilter,
    clearFilter,
  } = useProductsContext();
  return (
    <div>
      <form
        className="m-5"
        onSubmit={(e) => {
          e.preventDefault();
          handleFilter();
        }}
      >
        <input
          type="text"
          placeholder="search"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </form>

      <div className="ml-5">
        <div>
          <h5 className="font-weight-bold">Category</h5>
        </div>
        <div className="category-btn">
          <button
            type="button"
            className="btn btn-light d-block p-7"
            name="category"
            onClick={() => categoryFilter("all")}
            // onClick={categoryFilter}
          >
            All
          </button>
          <button
            type="button"
            className="btn btn-light d-block p-7"
            name="category"
            onClick={() => categoryFilter("office")}
          >
            Office
          </button>
          <button
            type="button"
            className="btn btn-light d-block p-7"
            name="category"
            onClick={() => categoryFilter("living room")}
          >
            Living Room
          </button>
          <button
            type="button"
            className="btn btn-light d-block p-7"
            name="category"
            onClick={() => categoryFilter("kitchen")}
          >
            Kitchen
          </button>
          <button
            type="button"
            className="btn btn-light d-block p-7"
            name="category"
            onClick={() => categoryFilter("bedroom")}
          >
            Bedroom
          </button>
          <button
            type="button"
            className="btn btn-light d-block p-7"
            name="category"
            onClick={() => categoryFilter("dining")}
          >
            Dining
          </button>
          <button
            type="button"
            className="btn btn-light d-block p-7"
            name="category"
            onClick={() => categoryFilter("kids")}
          >
            Kids
          </button>
        </div>
      </div>

      <div className="ml-5 mt-5">
        <div>
          <h5 className="font-weight-bold">Company</h5>
        </div>
        <div>
          <select
            name="company"
            id=""
            onChange={(e) => companyFilter(e.target.value)}
          >
            <option value="all">all</option>
            <option value="marcos">marcos</option>
            <option value="liddy">liddy</option>
            <option value="ikea">ikea</option>
            <option value="caressa">caressa</option>
          </select>
        </div>
      </div>

      <div className="ml-5 mt-5">
        <div>
          <h5 className="font-weight-bold">Colors</h5>
        </div>
        <div>
          <button
            name="colors"
            type="button"
            className="img-btn"
            onClick={() => colorFilter("all")}
          >
            all
          </button>
          <button
            name="colors"
            type="button"
            className="img-btn"
            style={{ background: "red" }}
            onClick={() => colorFilter("#ff0000")}
          ></button>
          <button
            name="colors"
            type="button"
            className="img-btn"
            style={{ background: "green" }}
            onClick={() => colorFilter("#00ff00")}
          ></button>
          <button
            name="colors"
            type="button"
            className="img-btn"
            style={{ background: "blue" }}
            onClick={() => colorFilter("#0000ff")}
          ></button>
          <button
            name="colors"
            type="button"
            className="img-btn"
            style={{ background: "grey" }}
            onClick={() => colorFilter("#000")}
          ></button>
          <button
            name="colors"
            type="button"
            className="img-btn"
            style={{ background: "yellow" }}
            onClick={() => colorFilter("#ffb900")}
          ></button>
        </div>
      </div>

      <div className="pl-5 pt-5">
        <div>
          <h5 className="font-weight-bold">Price</h5>
        </div>
        <div>
          <h6 className="d-block">£{price / 100}</h6>
          <input
            className="d-block price-slider"
            type="range"
            id="price"
            name="price"
            min="0"
            max="309999"
            onChange={(e) => priceFilter(e.target.value)}
          />
        </div>
      </div>

      <div className="ml-5 mt-5">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => clearFilter()}
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
}
