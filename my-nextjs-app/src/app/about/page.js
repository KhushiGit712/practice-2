

// import Navbar from '../navbar/page';
// import React from 'react';

// // Fetch data on the server-side
// async function fetchUsers() {
//   const res = await fetch('http://localhost:8000/api/users', {
//     cache: 'no-store', // Prevent caching (optional, remove if caching is fine)
//   });

//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// }

// const About = async () => {
//   const users = await fetchUsers(); // Fetch users data

//   return (
//     <div>
//       <Navbar />
//       <div className="container mt-5">
//         <h1>About Page</h1>
//         <p>This is the About page content.</p>

//         <h2>Users List:</h2>
//         <ul>
//           {users.map((user) => (
//             <li key={user._id}>
//               {user.firstName} {user.lastName} - {user.email}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default About;
import Navbar from '../navbar/page';
import React from 'react';

// Fetch data on the server-side
async function fetchUsers() {
  const res = await fetch('http://localhost:8000/api/users', {
    cache: 'no-store', // Prevent caching (optional, remove if caching is fine)
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const About = async () => {
  const users = await fetchUsers(); // Fetch users data
console.log(users,"users");
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1>About Page</h1>
        <p>This is the About page content.</p>

        <h2>Users List:</h2>
        <ul>

  {users.map((user) => (
    <li key={user._id}>
      <div>
        <h3>{user.firstName} {user.lastName} - {user.email}</h3>
        <h4> {user.jobTitle}</h4>
        {/* Display user image if available */}
        {user.imageUrl ? (
          <img src={user.imageUrl} alt="User Profile" width="100" height="100" />
        ) : (
          <p>No image available</p>
        )}
      </div>
    </li>
  ))}
</ul>

      </div>
    </div>
  );
};

export default About;
