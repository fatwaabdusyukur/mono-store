import React from "react";

export default class Pagination extends React.Component {
  render() {
    return (
      <div className="mt-5 lg:self-start">
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <button
              type="button"
              onClick={() => this.props.onHandleChangePage(this.props.page - 1)}
              className={`${
                this.props.page === 1 ? "hidden" : "block"
              } py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          {[...Array(this.props.total)].map((_, index) => {
            ++index;
            return (
              <li>
                <button
                  type="button"
                  onClick={() => this.props.onHandleChangePage(index)}
                  className={`py-2 px-3 leading-tight ${
                    this.props.page === index
                      ? "text-blue-500 dark:text-blue-400 hover:text-blue-700"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-700"
                  } bg-white border border-gray-300 hover:bg-gray-100 dark:hover:text-white dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-700`}
                >
                  {index}
                </button>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              onClick={() => this.props.onHandleChangePage(this.props.page + 1)}
              className={`${
                this.props.page === this.props.total ? "hidden" : "block"
              } py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
