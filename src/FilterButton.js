import  { useState } from 'react';
function FilterButton({ title, content, isActive, onClick, hideButtons }) {
   const [selected, setSelected] = useState([]);
   const selectedFilters = selected.length;
   const buttonStyle = isActive ? 'active' : '';
   const handleSelect = (id) => {
      if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
      } else {
      setSelected([...selected, id]);
      }
   }
   return(
      <div className="filter_wrapper">
         {selectedFilters >= 1 ? <div className="filter_button_badge">{selectedFilters}</div> : null}
         <button
            className={`filter_button___header ${buttonStyle}`}
            type="button"
            onClick={onClick}
            isActive={isActive}>{title}
         </button>
         {/* Выпадающее меню */}
            {isActive? (
            <div className="filter_button_header_box" onMouseLeave={() => hideButtons()}>
               <FilterButton content={content} onSelect={handleSelect} />
            </div>
            ) : null}
      </div>
   )
}
export default FilterButton;