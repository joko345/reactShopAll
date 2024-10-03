import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {}, []);

  const [isOnline, setIsOnline] = useState(navigator.onLine); // Changed IsOnline to isOnline for consistency

  const statusInternet = () => {
    console.log('navigator = ', navigator.onLine);
    setIsOnline(navigator.onLine)
  }

  useEffect (() => {
    window.addEventListener("Online", statusInternet);
    window.addEventListener("Offlline", statusInternet);

    return () => {
      window.removeEventListener("Online", statusInternet);
      window.removeEventListener("Offline", statusInternet);
    }
  },[isOnline])

  return (
    <div>
      {isOnline ? ( // Conditional rendering based on online status
        <div className="alert alert-success" role="alert">
          You are online!
        </div>
      ) : (
        <div className="alert alert-danger" role="alert">
          Internet Offline
        </div>
      )}

    </div>
  );
}

export default App;
