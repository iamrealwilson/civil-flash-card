/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import FlashCard from './FlashCard';
import './FlashCardList.css';

const FlashCardList = ( { flashcards } ) => {

  const flashcardsClone = Object.values(flashcards);

  const [currentPage, setCurrentPage] = React.useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(flashcardsClone.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFlashcards = flashcardsClone.slice(startIndex, endIndex);

  const renderPagination = () => {
    const pages = [];

    // First page link
    pages.push(
      <a
        key="first"
        href="#"
        onClick={() => handlePageChange(0)}
        className={currentPage === 0 ? 'disabled' : ''}
      >
        First
      </a>
    );

    // Previous page link
    pages.push(
      <a
        key="prev"
        href="#"
        onClick={() => handlePageChange(currentPage - 1)}
        className={currentPage === 0 ? 'disabled' : ''}
      >
        Prev
      </a>
    );

    // Ellipsis icon for skipped page numbers (start)
    if (totalPages > 10) {
      pages.push(<span key="ellipsis-start-spacer">&nbsp;&nbsp;&nbsp;</span>); // Add spacing before the ellipsis icon
      pages.push(
        <a
          key="ellipsis-start"
          href="#"
          onClick={() => handlePageChange(5)}
        >
          <i className="fas fa-ellipsis-h"></i> {/* FontAwesome icon for ellipsis */}
        </a>
      );
      pages.push(<span key="ellipsis-start-spacer-2">&nbsp;&nbsp;&nbsp;</span>); // Add spacing after the ellipsis icon
    }

    // Middle page numbers (if any)
    if (totalPages > 10) {
      const startMiddle = Math.max(5, currentPage - 2);
      const endMiddle = Math.min(totalPages - 5, currentPage + 3);
      for (let i = startMiddle; i < endMiddle; i++) {
        if (i === currentPage) continue;
        pages.push(
          <a
            key={i}
            href="#"
            onClick={() => handlePageChange(i)}
            className={i === currentPage ? 'active' : ''}
          >
            {i + 1}
          </a>
        );
      }
    }

    // Ellipsis icon for skipped page numbers (end)
    if (totalPages > 10) {
      pages.push(<span key="ellipsis-end-spacer">&nbsp;&nbsp;&nbsp;</span>); // Add spacing before the ellipsis icon
      pages.push(
        <a
          key="ellipsis-end"
          href="#"
          onClick={() => handlePageChange(totalPages - 5)}
        >
          <i className="fas fa-ellipsis-h"></i> {/* FontAwesome icon for ellipsis */}
        </a>
      );
      pages.push(<span key="ellipsis-end-spacer-2">&nbsp;&nbsp;&nbsp;</span>); // Add spacing after the ellipsis icon
    }

    // Next page link
    pages.push(
      <a
        key="next"
        href="#"
        onClick={() => handlePageChange(currentPage + 1)}
        className={currentPage === totalPages - 1 ? 'disabled' : ''}
      >
        Next
      </a>
    );

    // Last page link
    pages.push(
      <a
        key="last"
        href="#"
        onClick={() => handlePageChange(totalPages - 1)}
        className={currentPage === totalPages - 1 ? 'disabled' : ''}
      >
        Last
      </a>
    );

    return pages;
  };

  return (
    <>
      <div className="flashcard-container">
        {currentFlashcards.map((flashcard, index) => (
          <FlashCard
            key={index}
            question={flashcard.question}
            answer={flashcard.answer}
          />
        ))}
      </div>
      <div className="pagination">{renderPagination()}</div>
    </>
  );
};

export default FlashCardList;
