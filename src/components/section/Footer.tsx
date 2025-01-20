import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-8 text-gray-700">
        <div className="flex flex-col md:flex-row justify-between gap-5 items-start md:items-end">
       
          <div className="mb-4 md:mb-0">
            <h3 className="text-sm font-semibold mb-2">
              Learn About AlterYouth
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Scholarship Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Get the app
                </a>
              </li>
            </ul>
          </div>
        
          <div className="text-center md:text-right">
          
          </div>
      
          <div className="mb-4 md:mb-0">
            <p className="text-xs text-center md:text-left">
              Towards a literate Bangladesh
            </p>
          </div>
        </div>
        <hr className="my-2 border-blue-gray-500" />
        <div className="text-center md:text-right space-y-4">
          <div>
            <div className="flex flex-col md:flex-row justify-between text-xs space-y-2 md:space-y-0 md:space-x-4 text-left">
              <div>
                <p>© 2025 AlterYouth Limited</p>
                <p className="text-xs">
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>{" "}
                  ·{" "}
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </div>
              <div>{/* Add content if necessary */}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
