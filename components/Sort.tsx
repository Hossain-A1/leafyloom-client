import React, { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";

export default function Sort() {
  const [grid_view, setGrid_view] = useState<boolean>(true);

  return (
    <section className='flex justify-between gap-10 items-center'>
      {/* sort options */}
      <div className='drop'>
        <form action='#' className='border-2 border-violet-700 rounded '>
          <label htmlFor='sort'></label>
          <select
            name='sort'
            id='sort'
            className='lg:px-5 px-2 py-1 space-y-5 lg:text-lg text-sm lg:w-32 w-20'
          >
            <option value='highest' className=''>
              Highest
            </option>
            <option value='#' disabled></option>
            <option value='lowest'>Lowest</option>
            <option value='#' disabled></option>

            <option value='A-Z'>A-Z</option>
            <option value='#' disabled></option>
            <option value='Z-A'>Z-A</option>
          </select>
        </form>
      </div>
      <div className='sort-list flex justify-center items-center border-none cursor-pointer gap-2.5'>
        <button onClick={() => setGrid_view(true)}>
          <BsFillGridFill
            className={
              grid_view
                ? "bg-black text-white lg:text-3xl text-lg  p-1"
                : "lg:text-3xl text-lg p-1"
            }
          />
        </button>
        <button onClick={() => setGrid_view(!grid_view)}>
          <BsList
            className={
              !grid_view
                ? "bg-black text-white lg:text-3xl text-lg p-1 "
                : "lg:text-3xl text-lg p-1"
            }
          />
        </button>
      </div>
    </section>
  );
}
