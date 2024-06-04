declare module 'react-paginate' {
    import React from 'react';
  
    interface ReactPaginateProps {
      previousLabel?: React.ReactNode;
      nextLabel?: React.ReactNode;
      breakLabel?: React.ReactNode;
      pageCount: number;
      marginPagesDisplayed?: number;
      pageRangeDisplayed?: number;
      onPageChange?: (selectedItem: { selected: number }) => void;
      containerClassName?: string;
      activeClassName?: string;
    }
  
    const ReactPaginate: React.ComponentType<ReactPaginateProps>;
    export default ReactPaginate;
  }
  