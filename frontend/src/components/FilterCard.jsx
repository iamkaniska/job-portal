// import React, { useEffect, useState } from 'react'
// import { RadioGroup, RadioGroupItem } from './ui/radio-group'
// import { Label } from './ui/label'
// import { useDispatch } from 'react-redux'
// import { setSearchedQuery } from '@/redux/jobSlice'

// const fitlerData = [
//     {
//         fitlerType: "Location",
//         array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
//     },
//     {
//         fitlerType: "Industry",
//         array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
//     },
//     {
//         fitlerType: "Salary",
//         array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
//     },
// ]

// const FilterCard = () => {
//     const [selectedValue, setSelectedValue] = useState('');
//     const dispatch = useDispatch();
//     const changeHandler = (value) => {
//         setSelectedValue(value);
//     }
//     useEffect(()=>{
//         dispatch(setSearchedQuery(selectedValue));
//     },[selectedValue]);
//     return (
//         <div className='w-full bg-white p-3 rounded-md border border-gray-100'>
//             <h1 className='font-bold text-lg'>Filter Jobs</h1>
//             <hr className='mt-3' />
//             <RadioGroup value={selectedValue} onValueChange={changeHandler}>
//                 {
//                     fitlerData.map((data, index) => (
//                         <div>
//                             <h1 className='font-bold text-lg'>{data.fitlerType}</h1>
//                             {
//                                 data.array.map((item, idx) => {
//                                     const itemId = `id${index}-${idx}`
//                                     return (
//                                         <div className='flex items-center space-x-2 my-2'>
//                                             <RadioGroupItem value={item} id={itemId} />
//                                             <Label htmlFor={itemId}>{item}</Label>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                     ))
//                 }
//             </RadioGroup>
//         </div>
//     )
// }

// export default FilterCard

// import React, { useEffect, useState } from 'react'
// import { RadioGroup, RadioGroupItem } from './ui/radio-group'
// import { Label } from './ui/label'
// import { useDispatch, useSelector } from 'react-redux'
// import { setSearchedQuery } from '@/redux/jobSlice'

// const filterData = [
//     {
//         filterType: "Location",
//         array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
//     },
//     {
//         filterType: "Industry",
//         array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
//     },
//     {
//         filterType: "Salary",
//         array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
//     },
// ]

// const FilterCard = () => {
//     const [selectedValues, setSelectedValues] = useState([]);
//     const dispatch = useDispatch();

//     const changeHandler = (value) => {
//         // Check if value already exists in the array
//         setSelectedValues((prev) => {
//             if (prev.includes(value)) {
//                 return prev.filter((item) => item !== value);  // Remove the value
//             } else {
//                 return [...prev, value];  // Add the value
//             }
//         });
//     };

//     useEffect(() => {
//         dispatch(setSearchedQuery(selectedValues));
//     }, [selectedValues, dispatch]);

//     return (
//         <div className='w-full bg-white p-3 rounded-md border border-gray-100'>
//             <h1 className='font-bold text-lg'>Filter Jobs</h1>
//             <hr className='mt-3' />
//             <RadioGroup value={selectedValues} onValueChange={changeHandler}>
//                 {
//                     filterData.map((data, index) => (
//                         <div key={index}>
//                             <h1 className='font-bold text-lg'>{data.filterType}</h1>
//                             {
//                                 data.array.map((item, idx) => {
//                                     const itemId = `id${index}-${idx}`
//                                     return (
//                                         <div className='flex items-center space-x-2 my-2' key={itemId}>
//                                             <RadioGroupItem
//                                                 value={item}
//                                                 id={itemId}
//                                                 checked={selectedValues.includes(item)}  // To show if selected
//                                             />
//                                             <Label htmlFor={itemId}>{item}</Label>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                     ))
//                 }
//             </RadioGroup>
//         </div>
//     )
// }

// export default FilterCard;
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

const filterData = [
    {
        filterType: "Location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        filterType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
    {
        filterType: "Salary",
        array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
    },
]

const FilterCard = () => {
    const [selectedValues, setSelectedValues] = useState([]);
    const dispatch = useDispatch();

    const changeHandler = (value) => {
        setSelectedValues((prev) => {
            if (prev.includes(value)) {
                return prev.filter((item) => item !== value);  // Remove the value
            } else {
                return [...prev, value];  // Add the value
            }
        });
    };

    useEffect(() => {
        dispatch(setSearchedQuery(selectedValues)); // Update the Redux store with selected values
    }, [selectedValues, dispatch]);

    return (
        <div className='w-full bg-white p-3 rounded-md border border-gray-100'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3' />
            <div>
                {
                    filterData.map((data, index) => (
                        <div key={index}>
                            <h1 className='font-bold text-lg'>{data.filterType}</h1>
                            {
                                data.array.map((item, idx) => {
                                    const itemId = `id${index}-${idx}`
                                    return (
                                        <div className='flex items-center space-x-2 my-2' key={itemId}>
                                            <input
                                                type="checkbox"
                                                id={itemId}
                                                value={item}
                                                checked={selectedValues.includes(item)}  // To show if selected
                                                onChange={() => changeHandler(item)}  // Toggle selection on change
                                                className="form-checkbox h-4 w-4 text-blue-600"
                                            />
                                            <label htmlFor={itemId}>{item}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FilterCard;
