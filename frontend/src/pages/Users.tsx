import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((r) => r.json())
      .then(setUsers);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Users</h1>

      {users.map((u) => (
        <div key={u.id}>
          <p className="text-blue-500">
            {u.id}: {u.name}
          </p>
        </div>
      ))}
    </div>
  );
}
