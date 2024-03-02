import { useEffect, useRef, useState } from "react";
import { StyledNavHeder } from "./StyledNavHeder.styled";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import icons from "../../assets/icons.svg";

function NavHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [nameDataMenu, setNameDataMenu] = useState("");
  const dropdownMenuRef = useRef();

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const closeDropdown =
        isDropdownOpen &&
        !dropdownMenuRef.current.contains(event.target) &&
        event.target.dataset.type !== "nav-button";

      if (closeDropdown) setIsDropdownOpen(false);
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isDropdownOpen]);

  const handleClickBtnNav = (e) => {
    const typeBtn = e.currentTarget.dataset.type;
    const nameBtn = e.currentTarget.dataset.name;
    console.log("e.currentTarget: ", e.currentTarget);
    const isClickBtnActiveMenu =
      (isDropdownOpen && typeBtn === "nav-button")
       && nameBtn === nameDataMenu;

    if (isClickBtnActiveMenu) return;
    setIsDropdownOpen(true);
    setNameDataMenu(nameBtn);
    return console.log(nameBtn);
  };

  return (
    <>
      <StyledNavHeder>
        <ul>
          <li>
            <button
              type="button"
              data-name="brands"
              data-type="nav-button"
              onClick={handleClickBtnNav}
            >
              Brands
              <span className="icon-wrapp">
                <svg
                  style={{ width: "10px", height: "6px" }}
                  className={nameDataMenu === "brands" ? "active-menu" : ""}
                >
                  <use href={icons + "#nav-marker"}></use>
                </svg>
              </span>
            </button>
          </li>
          <li>
            <button
              type="button"
              data-name="category"
              data-type="nav-button"
              onClick={handleClickBtnNav}
            >
              Category
              <span className="icon-wrapp">
                <svg
                  style={{ width: "10px", height: "6px" }}
                  className={nameDataMenu === "category" ? "active-menu" : ""}
                >
                  <use href={icons + "#nav-marker"}></use>
                </svg>{" "}
              </span>
            </button>
          </li>
          <li>
            <button
              type="button"
              data-name="accessories"
              data-type="nav-button"
              onClick={handleClickBtnNav}
            >
              Accessories
              <span className="icon-wrapp">
                <svg
                  style={{ width: "10px", height: "6px" }}
                  className={
                    nameDataMenu === "accessories" ? "active-menu" : ""
                  }
                >
                  <use href={icons + "#nav-marker"}></use>
                </svg>
              </span>
            </button>
          </li>
          <li>Sale</li>
          <li>Contact</li>
          <li>F.A.Q.</li>
          <li>Our Company</li>
        </ul>
      </StyledNavHeder>
      {/* {isDropdownOpen && (
        <DropdownMenu
          nameDataMenu={nameDataMenu}
          isDropdownOpen={isDropdownOpen}
          dropdownMenuRef={dropdownMenuRef}
        ></DropdownMenu>
      )} */}
      <DropdownMenu
        nameDataMenu={nameDataMenu}
        isDropdownOpen={isDropdownOpen}
        dropdownMenuRef={dropdownMenuRef}
      ></DropdownMenu>
    </>
  );
}

export default NavHeader;
