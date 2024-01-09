import React,{useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Table = () => {
  const location : any = useLocation();
  //   location.state.data
  const [tableData, setTableData] = React.useState<any>([]);

  const itemsPerPage = 10; // Set the number of items to display per page
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selectedPage: any) => {
    setCurrentPage(selectedPage.selected);
  };

  const offset = currentPage * itemsPerPage;
  const paginatedData = tableData.slice(offset, offset + itemsPerPage);

  const filterData = () => {
    let data = location.state.data;
    var dataArray = Object.values(data);

    // Sort array based on popularity in descending order
    dataArray.sort(function (a: any, b: any) {
      return b.popularity - a.popularity;
    });

    console.log(dataArray);
    setTableData(dataArray);
  };

  useEffect(() => {
    filterData();
  }, []);

  return (
    <>
       <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full h-16 flex items-center justify-center text-2xl">
          Table Sorted with decreasing popularity
        </div>
        <div className="w-1/2 h-full">
          <table className="w-full divide-y divide-gray-200 m-10">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Price
                </th>
                 <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Popularity
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedData.map((item: any, index: any) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.price}</div>
                  </td>
                   <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {item.popularity}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ReactPaginate
            className="w-full flex justify-center mx-1"
            pageCount={Math.ceil(tableData.length / itemsPerPage)}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            onPageChange={handlePageChange}
            containerClassName="pagination flex justify-center mx-1"
            activeClassName="active"
            pageLinkClassName="mx-2 px-3 py-2 rounded border"
          />
        </div>
      </div>
    </>
  );
};

export default Table;