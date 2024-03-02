// import PropTypes from "prop-types";
import { StyledSearch } from "./StyledSearch.styled";
import icons from "../../assets/icons.svg";
import { StyledBtnSearch } from "./StyledBtnSearch.styled";

function Search() {
  return (
    <div
      style={{
        position: "relative",
        marginLeft: "48px",
        width: "100%",
        maxWidth: "598px",
      }}
    >
      <StyledSearch
        type="text"
        placeholder="Search"
        // value=""
        // onChange=""
      ></StyledSearch>
      <StyledBtnSearch>
        <svg style={{ width: "24px", height: "24px" }}>
          <use href={icons + "#search"}></use>
        </svg>
      </StyledBtnSearch>
    </div>
  );
}

export default Search;

// Search.propTypes = {};
