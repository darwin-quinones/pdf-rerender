import React from "react";

const ControlPanel = (props) => {
  const { pageNumber, numPages, setPageNumber, setScale, scale } = props;

  // control panel logic
  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber === numPages;

  const firstPageClass = isFirstPage ? "disabled" : " clickable";
  const lastPageClass = isLastPage ? "disabled" : "clickable";

  const goToFirstPage = () => {
    if (!isFirstPage) setPageNumber(1);
  };

  const goToPreviousPage = () => {
    if (!isFirstPage) setPageNumber(pageNumber - 1);
  };

  const goToNextPage = () => {
    if (!isLastPage) setPageNumber(pageNumber + 1);
  };

  const goToLastPage = () => {
    if (!isLastPage) setPageNumber(numPages);
  };

  const onPageChange = (e) => {
    const { value } = e.target;
    setPageNumber(Number(value));
  };


  const isMinZoon = scale <= 0.6
  const isMaxZoon = scale >= 2.0 

  const zoomOutClass = isMinZoon ? 'disabled' : 'clickable'
  const zoomInClass = isMaxZoon? 'disabled' : 'clickable'

  
  const zoomOut = () =>{
    if(!isMinZoon) setScale(scale - 0.1)
  }
  const zoomIn = () =>{
    if(!isMaxZoon) setScale(scale + 0.1)
  }
  
  return (
    <div className="control-panel m-5 p-3 d-flex align-items-baseline justify-content-between">
      <div className="d-flex justify-content-between align-items-baseline">
        <i
          className={`fas fa-fast-backward mx-3 ${firstPageClass}`}
          onClick={goToFirstPage}
        ></i>

        <i
          className={`fas fa-backward mx-3 ${firstPageClass}`}
          onClick={goToPreviousPage}
        ></i>

        <span>
          Page{" "}
          <input
            name="pageNumber"
            type="number"
            min={1}
            max={numPages | 1}
            className="p-0 pl-1 mx-2"
            value={pageNumber}
            onChange={onPageChange}
          />{" "}
          of {numPages}
        </span>
        <i
          className={`fas fa-forward mx-3 ${lastPageClass}`}
          onClick={goToNextPage}
        ></i>

        <i
          className={`fas fa-fast-forward mx-3 ${lastPageClass}`}
          onClick={goToLastPage}
        ></i>
      </div>

      <div className="d-flex justify-content-between align-items-baseline">
        <i className={`fas fa-search-minus mx-3 ${zoomOutClass}`} onClick={zoomOut}></i>
        <span>{(scale * 100).toFixed()}%</span>
        <i className={`fas fa-search-plus mx-3 ${zoomInClass}`} onClick={zoomIn}></i>
      </div>
    </div>
  );
};

export default ControlPanel;
