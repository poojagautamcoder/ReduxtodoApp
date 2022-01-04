import React from "react";
import AllButtons from "../genericcomponent/AllButtons";
import styles from "../styles/Filter.css";

const FilterDynamic = () => {
  return (
    <div className="dynamic-filter">
      <div className="filter">
        <AllButtons
          className="btn toggle-btn"
          // onClick={() => handleFilter("all")}
          value="all"
        >
          ALL
          {/* All{items.status} */}
        </AllButtons>
        <AllButtons
          className="btn toggle-btn"
          // onClick={() => handleFilter("completed")}
          value="completed"
        >
          COMPLETE
          {/* Complete{items.status} */}
        </AllButtons>
        <AllButtons
          className="btn toggle-btn"
          // onClick={() => handleFilter("incomplete")}
          value="incomplete"
        >
          INCOMPLETE
          {/* Incomplete{items.status} */}
        </AllButtons>
      </div>
    </div>
  );
};
export default FilterDynamic;


