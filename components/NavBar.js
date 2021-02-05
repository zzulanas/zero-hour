import React from "react";

export default function Menu({ fixed }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
    <div className="w-full bg-white">
      <nav className="flex items-center justify-between flex-wrap bg-grey-darkest p-6 bg-white">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <a className="text-black no-underline hover:text-gray-500 hover:no-underline" href="#">
            <span className="text-2xl pl-2"><i className="em em-grinning" />ZERO HOUR</span>
          </a>
        </div>
        <div className="block lg:hidden">
          <button id="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} className="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className={"w-full flex-grow lg:items-center lg:w-auto lg:block pt-6 lg:pt-0" + (menuOpen ? " lg:flex" : " hidden")}>
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a className="inline-block text-grey-dark no-underline hover:text-zhblue hover:text-underline py-2 px-4" href="#">WHO WE ARE</a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-grey-dark no-underline hover:text-zhblue hover:text-underline py-2 px-4" href="#">CHAPTERS</a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-grey-dark no-underline hover:text-zhblue hover:text-underline py-2 px-4" href="#">PLATFORM</a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-grey-dark no-underline hover:text-zhblue hover:text-underline py-2 px-4" href="#">ZERO HOUR 101</a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-grey-dark no-underline hover:text-zhblue hover:text-underline py-2 px-4" href="#"><b>DONATE</b></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    </>
  );
}
