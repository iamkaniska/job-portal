// import React from 'react';
// import { Badge } from './ui/badge';
// import { useNavigate } from 'react-router-dom';

// const LatestJobCards = ({ job }) => {
//   const navigate = useNavigate();
  
//   return (
//     <div
//       onClick={() => navigate(`/description/${job._id}`)}
//       className='p-4 rounded-lg shadow-md bg-white border border-gray-100 cursor-pointer flex items-center space-x-4 hover:shadow-lg transition-shadow duration-200 ease-in-out'
//     >
//       {/* Company Image Section */}
//       <div className='w-16 h-16 flex-shrink-0 rounded-full overflow-hidden'>
//         <img
//           src={job?.company?.logo|| 'default-company-image-url.jpg'}
//           alt={job?.company?.name}
//           className='w-full h-full object-cover'
//         />
//       </div>

//       {/* Job Details Section */}
//       <div className='flex-1'>
//         {/* Company Name and Location */}
//         <div>
//           <h1 className='font-medium text-lg text-gray-800'>{job?.company?.name}</h1>
//           <p className='text-sm text-gray-500'>{job?.location || 'Location Not Available'}</p>
//         </div>

//         {/* Job Title and Description */}
//         <div className='mt-2'>
//           <h1 className='font-bold text-xl text-gray-900'>{job?.title}</h1>
//           <p className='text-sm text-gray-600 mt-1 truncate'>{job?.description}</p>
//         </div>

//         {/* Job Meta Information */}
//         <div className='flex items-center gap-2 mt-4'>
//           <Badge className='text-blue-700 font-bold' variant='ghost'>
//             {job?.position || '0'} Positions
//           </Badge>
//           <Badge className='text-[#F83002] font-bold' variant='ghost'>
//             {job?.jobType || 'Job Type'}
//           </Badge>
//           <Badge className='text-[#7209b7] font-bold' variant='ghost'>
//             {job?.salary ? `${job.salary} LPA` : 'Salary Not Disclosed'}
//           </Badge>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestJobCards;


import React from 'react';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();
  
  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className='p-6 rounded-xl shadow-lg bg-white border border-gray-100 cursor-pointer flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105'
    >
      {/* Company Image Section */}
      <div className='w-24 h-24 md:w-28 md:h-28 flex-shrink-0 rounded-full overflow-hidden'>
        <img
          src={job?.company?.logo || 'default-company-image-url.jpg'}
          alt={job?.company?.name}
          className='w-full h-full object-cover'
        />
      </div>

      {/* Job Details Section */}
      <div className='flex-1'>
        {/* Company Name and Location */}
        <div>
          <h1 className='font-semibold text-xl text-gray-800'>{job?.company?.name}</h1>
          <p className='text-sm text-gray-500'>{job?.location || 'Location Not Available'}</p>
        </div>

        {/* Job Title and Description */}
        <div className='mt-2'>
          <h2 className='font-bold text-2xl text-gray-900'>{job?.title}</h2>
          <p className='text-sm text-gray-600 mt-1 truncate'>{job?.description}</p>
        </div>

        {/* Job Meta Information */}
        <div className='flex items-center gap-3 mt-4'>
          <Badge className='text-blue-700 font-medium' variant='ghost'>
            {job?.position || '0'} Positions
          </Badge>
          <Badge className='text-[#F83002] font-medium' variant='ghost'>
            {job?.jobType || 'Job Type'}
          </Badge>
          <Badge className='text-[#7209b7] font-medium' variant='ghost'>
            {job?.salary ? `${job.salary} LPA` : 'Salary Not Disclosed'}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default LatestJobCards;
