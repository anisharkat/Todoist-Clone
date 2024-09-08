import { FaListUl } from "react-icons/fa";

export const KickStart = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center mt-16 px-4">
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-5">Kickstart your next project with Todoist Templates</h1>
        <p className="text-base sm:text-xl text-gray-500 mb-10">
          No need to create projects or setups from scratch when we have <br /> 50+ templates made for you.
        </p>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button className="bg-gray-100 px-4 py-2 hover:bg-gray-200 rounded-md font-bold text-sm sm:text-lg">Work</button>
          <button className="bg-gray-100 px-4 py-2 hover:bg-gray-200 rounded-md font-bold text-sm sm:text-lg">Personal</button>
          <button className="bg-gray-100 px-4 py-2 hover:bg-gray-200 rounded-md font-bold text-sm sm:text-lg">Education</button>
          <button className="bg-gray-100 px-4 py-2 hover:bg-gray-200 rounded-md font-bold text-sm sm:text-lg">Management</button>
          <button className="bg-gray-100 px-4 py-2 hover:bg-gray-200 rounded-md font-bold text-sm sm:text-lg">Marketing & Sales</button>
          <button className="bg-gray-100 px-4 py-2 hover:bg-gray-200 rounded-md font-bold text-sm sm:text-lg">Customer Support</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {Array(4).fill(null).map((_, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img className="w-full h-32 object-cover" src="https://via.placeholder.com/150" alt="Card Image" />
              <div className="p-4">
                <h2 className="text-base sm:text-lg font-bold">Accounting Tasks</h2>
                <p className="text-sm sm:text-gray-600 mt-2">Create a system to keep your books, receipts, and invoices organized.</p>
                <div className="flex items-center text-gray-400 text-xs sm:text-sm mt-4">
                  <FaListUl />
                  <p className="ml-2">List</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
