import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Shared/Navbar/Navbar';
import Footer from '../Component/Shared/Footer/Footer';
import { useState } from 'react';

const MainLayout = () => {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <div className={darkMode ? "bg-black text-white": ""}>
            <Navbar setDarkMode={setDarkMode} darkMode={darkMode}/>
            <div className="min-h-[75vh]">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;