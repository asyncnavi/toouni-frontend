import React from 'react';

const DateInput = () => {
    return (
        <div className="flex flex-col my-2 ">
            <label htmlFor="a" className="mb-2">
                Date of birth
            </label>

            <input
                placeholder="Year"
                type="date"
                className={`p-2 outline-0 rounded border-2 border-black`}
            />
        </div>
    );
};
export default DateInput;
