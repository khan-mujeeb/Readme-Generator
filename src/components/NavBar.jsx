/* eslint-disable react/prop-types */

const NavBar = ({ title }) => {
    return (
        <div className=" flex flex-col p-2 shadow-md justify-center items-center bg-gray-50">
            <h1 className=" text-2xl text-blue-950 font-semibold">{title} README Generator</h1>
        </div>
    );
};

export default NavBar;
