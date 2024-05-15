import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZFGRvVHiqPVpAV0OoIJRHuDNR9M8XxWk",
  authDomain: "hotstar-web-3950f.firebaseapp.com",
  projectId: "hotstar-web-3950f",
  storageBucket: "hotstar-web-3950f.appspot.com",
  messagingSenderId: "103455632347",
  appId: "Y1:103455632347:web:bae15d249ab0d0073a55fe",
  measurementId: "G-EQEVWJQS95",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      closeModal();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <aside className="w-1/4 absolute bg-gray-900 text-gray-400 h-full flex flex-col overflow-y-auto">
      <div className="p-7 z-10 flex items-center">
        <div className="absolute inset-0 mt-6 mb-6 ml-10">
          {user ? (
            <div>
              <div className="text-slate-300 text-lg font-semibold ">
                {user.email}
              </div>
              <button
                className="hover:bg-slate-300 border-2 hover:text-gray-700 hover:border-slate-300 border-gray-400 text-gray-400 font-bold py-2 px-4 rounded mt-4"
                onClick={() => auth.signOut()}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              className="hover:bg-slate-300 border-2 hover:text-gray-700 hover:border-slate-300 border-gray-400 text-gray-400 font-bold py-2 px-4 rounded"
              onClick={openModal}
            >
              Login
            </button>
          )}
        </div>
        <ul className="mt-40">
          <li className="group relative flex items-center p-4 transition duration-300 ease-in-out hover:text-white text-xl">
            <i className="fas fa-globe mr-2"></i> {/* FontAwesome globe icon */}
            <span className="ml-1 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 font-bold">
              My Space
            </span>
          </li>

          <li className="group relative flex items-center p-4 transition duration-300 ease-in-out hover:text-white hover:pl-5 text-xl">
            <i className="fas fa-search mr-2"></i>{" "}
            <span className="ml-1 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 font-bold">
              Search
            </span>
          </li>

          <li className="group relative flex items-center p-4 transition duration-300 ease-in-out hover:text-white hover:pl-5 text-xl">
            <i className="fas fa-home mr-2"></i>
            <span className="ml-1 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 font-bold">
              Home
            </span>
          </li>

          <li className="group relative flex items-center p-4 transition duration-300 ease-in-out hover:text-white hover:pl-5 text-xl">
            <i className="fas fa-tv mr-2"></i>
            <span className="ml-1 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 font-bold">
              Tv
            </span>
          </li>

          <li className="group relative flex items-center p-4 transition duration-300 ease-in-out hover:text-white hover:pl-5  text-xl">
            <i className="fas fa-film mr-2"></i>
            <span className="ml-1 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 font-bold">
              Movies
            </span>
          </li>

          <li className="group relative flex items-center p-4 transition duration-300 ease-in-out hover:text-white hover:pl-5 text-xl">
            <i className="fas fa-cog mr-2"></i>
            <span className="ml-1 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 font-bold">
              Settings
            </span>
          </li>
        </ul>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="bg-gray-900 p-8 w-3/5 h-2/3 rounded-xl z-50 relative flex flex-col justify-between">
            <button
              className="absolute top-0 right-0 mr-8 mt-4 text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              <i className="fas fa-times"></i>
            </button>
            <h2 className="text-2xl flex justify-center text-slate-300 font-semibold">
              Login with Google Account
            </h2>

            <button
              className="bg-gray-300 text-gray-900 font-semibold mb-56 ml-60 w-96 py-2 px-4 rounded text-xl"
              onClick={handleGoogleLogin}
            >
              Login with google
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
