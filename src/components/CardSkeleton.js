// import React from 'react';
// import { Card } from 'react-bootstrap';
// import Placeholder from 'react-bootstrap/Placeholder';

// const CardSkeleton = () => {
//   return (
//     <div className='container'>
//       <Card style={{
//         width: "140px",
//         height: "196px"
//       }}>
//         <Card.Body>
//           <Placeholder as={Card.Title} animation="glow">
//             <Placeholder xs={6} />
//           </Placeholder>
//           <Placeholder as={Card.Text} animation="glow">
//             <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
//             <Placeholder xs={6} /> <Placeholder xs={8} />
//           </Placeholder>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default CardSkeleton;
// import React from 'react';

// const CardSkeleton = () => {
//   return (
//     <div className="container mx-auto">
//       <div className="rounded shadow-lg bg-gray-700" style={{
//         width: "140px",
//         height: "196px"
//       }}>
//         <div className="animate-pulse">
//           <div className="bg-gray-800 h-6 w-3/4 mb-4"></div>
//           <div className="bg-gray-800 h-4 w-7/12 mb-2"></div>
//           <div className="bg-gray-800 h-3 w-1/2 mb-2"></div>
//           <div className="bg-gray-800 h-3 w-1/3 mb-2"></div>
//           <div className="bg-gray-800 h-4 w-2/3"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardSkeleton;
// CardSkeleton.js
// CardSkeleton.js
import React from 'react';

const CardSkeleton = () => {
  return (
    <div className="card-skeleton bg-gray-800 rounded-md overflow-hidden shadow-md mb-4 animate-pulse">
      <div className="skeleton-image bg-gray-600 h-40"></div>
      <div className="skeleton-text bg-gray-600 h-4 w-3/4 my-2"></div>
      <div className="skeleton-text bg-gray-600 h-4 w-2/3 my-2"></div>
    </div>
  );
};

export default CardSkeleton;



