import { useState, useEffect } from "react";
import UserCard from "./components/userCard";

function App() {
  const [search, setSearch] = useState(""); // API থেকে আসা data
  const [users, setUsers] = useState([]); //search box-এর value
  const [loading, setLoading] = useState(true); // loading হচ্ছে কিনা

  // Component আসার পরে একবার API call
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false); // data আসলে loading বন্ধ
      });
  }, []); // [] মানে শুধু একবার

  // search দিয়ে filter করা
  const filtered = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div className="bg-gray-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <input
          placeholder="Search by name..."
          value={search}
          className="bg-gray-300 w-full md:w-1/2 p-4 border-2 border-blue-500 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all"
          onChange={(e) => setSearch(e.target.value)} // type করলেই state বদল
        />
        {loading && <p> Loading... </p>}

        {filtered.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            phone={user.phone}
            website={user.website}
            city={user.address.city}
            email={user.email}
          />
        ))}
      </div>
    </>
  );
}
export default App;
