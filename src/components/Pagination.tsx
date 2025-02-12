import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const maxVisiblePages = 5; // Max number of pages to show before adding ellipses

    const getPageNumbers = () => {
        const pages = [];
        const half = Math.floor(maxVisiblePages / 2);

        let start = Math.max(1, currentPage - half);
        let end = Math.min(totalPages, currentPage + half);

        if (start > 1) pages.push(1);
        if (start > 2) pages.push('...');

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (end < totalPages - 1) pages.push('...');
        if (end < totalPages) pages.push(totalPages);

        return pages;
    };

    return (
        <div className="flex flex-wrap justify-center items-center space-x-1 sm:space-x-2 mt-10 mb-6">
            {/* Previous Button */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 sm:px-4 py-2 rounded-md border text-sm sm:text-base ${
                    currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-700'
                }`}
            >
                Previous
            </button>

            {/* Page Numbers */}
            {getPageNumbers().map((page, index) => (
                <button
                    key={index}
                    onClick={() => typeof page === 'number' && onPageChange(page)}
                    disabled={page === '...'}
                    className={`px-3 sm:px-4 py-2 rounded-md border text-sm sm:text-base ${
                        currentPage === page
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white'
                    } ${page === '...' ? 'cursor-default' : ''}`}
                >
                    {page}
                </button>
            ))}

            {/* Next Button */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 sm:px-4 md:px-7 py-2 rounded-md border text-sm sm:text-base ${
                    currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-700'
                }`}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
