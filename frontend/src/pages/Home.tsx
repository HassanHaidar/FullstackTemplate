import { useEffect, useState } from 'react'

function Home() {
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, []);

  return (
    <>
      <div className="p-10 text-3xl font-bold">
        {msg || "Loading..."}
      </div>
    </>
  )
}

export default Home
