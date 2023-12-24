import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
    <div className="flex items-center justify-center space-x-4 mt-4">
        <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white cursor-pointer'}`}
        >
        이전
        </button>

        <span className="px-3 py-2 rounded-md bg-blue-500 text-white">
        {currentPage}
        </span>

        <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white cursor-pointer'}`}
        >
        다음
        </button>
    </div>
    );
}

export default Pagination;
