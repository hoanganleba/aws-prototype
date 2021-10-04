const ChatSection = () => {
  return (
      <div className="card bg-white shadow p-5 grid grid-cols-4 gap-x-4">
          <div>
              <div className="bg-gray-100 flex items-center py-2.5 px-4 rounded-2xl block text-gray-500 mb-5">
                  <input
                      className="placeholder-gray-500 w-full font-medium focus:outline-none bg-transparent"
                      aria-label="search"
                      placeholder="Search"
                  />
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                  </svg>
              </div>
              <div className="h-80 overflow-y-scroll overscroll-auto">

              </div>
          </div>
          <div className="col-span-3">
              <div className="bg-gray-100 rounded-2xl">

              </div>
              <form className="bg-gray-100 flex items-center py-2.5 px-4 rounded-2xl block text-gray-500 mt-3">
                  <input
                      className="placeholder-gray-500 w-full font-medium focus:outline-none bg-transparent"
                      aria-label="message"
                      placeholder="Type a message"
                  />
                  <button>
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="transform rotate-45 h-5 w-5 ml-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                      </svg>
                  </button>
              </form>
          </div>
      </div>
  );
};

export default ChatSection;
