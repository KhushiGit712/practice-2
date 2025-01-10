
// import Navbar from '../navbar/page';
// import React from 'react';

// const Contact = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="container mt-5">
//         <h1>Contact Page</h1>
//         <p>This is the Contact page content.</p>
//       </div>
//     </div>
//   );
// };

// export default Contact;


// 'use client';  // This marks the file as a client component
// import Navbar from '../navbar/page';
// import React, { useEffect, useState } from 'react';

// const Contact = () => {
//   const [iceCreams, setIceCreams] = useState([]);

//   useEffect(() => {
//     // Fetch the ice cream data from the backend
//     const fetchIceCreams = async () => {
//       try {
//         const response = await fetch('http://localhost:8000/api/icecreams');
//         const data = await response.json();
//         setIceCreams(data);
//       } catch (error) {
//         console.error("Error fetching ice creams:", error);
//       }
//     };

//     fetchIceCreams();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <div className="container mt-5">
//         <h1>Contact Page</h1>
//         <p>This is the Contact page content.</p>
//         <div>
//           <h2>Ice Creams List</h2>
//           <ul>
//             {iceCreams.map((iceCream) => (
//               <li key={iceCream._id}>
//                 <h3>{iceCream.name}</h3>
//                 <img
//                   src={iceCream.imageUrl} // Use the imageUrl field from the backend
//                   alt={iceCream.name}
//                   style={{ width: '200px', height: 'auto' }}
//                 />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
"use client"; // Mark this file as a client-side component

import React, { useState } from 'react';
import Navbar from '../navbar/page';

const Contact = () => {
  // State to manage ice cream data
  const [iceCreams, setIceCreams] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loading state to show a spinner or message while fetching
  const [isVisible, setIsVisible] = useState(false); // State to control visibility of ice creams list

  // Function to fetch ice creams
  const fetchIceCreams = async () => {
    setIsLoading(true); // Set loading to true when fetching starts
    try {
      const response = await fetch('http://localhost:8000/api/icecreams');
      const data = await response.json();
      setIceCreams(data);
      setIsVisible(true); // Show the ice cream list after the data is fetched
    } catch (error) {
      console.error("Error fetching ice creams:", error);
    } finally {
      setIsLoading(false); // Set loading to false once fetching is complete
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1>Contact Page</h1>
        <p>This is the Contact page content.</p>
        <button onClick={fetchIceCreams} className="btn btn-primary">
          Ice Cream List
        </button>

        {/* Show loading state */}
        {isLoading && <p>Loading...</p>}

        {/* Show ice cream list only if isVisible is true */}
        {isVisible && (
          <div>
            <h2>Ice Creams List</h2>
            <ul>
              {iceCreams.map((iceCream) => (
                <li key={iceCream._id}>
                  <h3>{iceCream.name}</h3>
                  <img
                    src={iceCream.imageUrl} // Use the imageUrl from the backend
                    alt={iceCream.name}
                    style={{ width: '200px', height: 'auto' }}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact; // Make sure the default export i
