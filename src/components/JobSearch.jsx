const JobSearch = (props) => {
  const { onSearch, setDesc, setLoc, desc, loc, fullTime, setFullTime } = props;
  return (
    <form
      onSubmit={onSearch}
      className="flex flex-col mx-24 items-center justify-center md:items-start md:flex-row gap-y-4 md:gap-y-0 gap-x-5 py-5 px-16 border shadow my-5 rounded"
    >
      <input
        className="rounded border w-full md:w-4/12 bg-gray-50 border-gray-200 p-3"
        type="search"
        placeholder="Description"
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
      />
      <input
        className="rounded border w-full md:w-4/12 bg-gray-50 border-gray-200 p-3"
        type="search"
        placeholder="Location"
        onChange={(e) => setLoc(e.target.value)}
        value={loc}
      />
      <div className="flex gap-2 self-center">

      <input checked={fullTime} onChange={(e) => setFullTime(e.target.checked)} name="fulltime" type="checkbox" className="self-center" />
      <label
        htmlFor="fulltime"
        className="self-center font-semibold text-gray-700"
        >
        Full-time
      </label>
        </div>
      <button
        type="submit"
        className="self-center whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 w-full md:w-min"
      >
        Search
      </button>
    </form>
  );
};

export default JobSearch;
