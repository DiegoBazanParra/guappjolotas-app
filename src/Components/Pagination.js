import "Styles/Paginate.css";
import { useContext } from "react";
import ReactPaginate from "react-paginate";
import { DataContext } from "Context/DataProvider";

function Pagination() {
  const value = useContext(DataContext);
  const pageCount = value.pageCount;
  const changePage = value.changePage;

  return (
    <div className="Pagination">
      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Siguiente"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}
export default Pagination;
