import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-neutral-100">
      <div className="py-3 px-4 md:px-8">
        <p className="text-sm text-slate-600 mb-2 md:mb-3">India</p>
        <hr className="mb-3 md:mb-4" />
        <div className="flex flex-col md:flex-row md:justify-between">
          <ul className="flex flex-wrap mb-4 md:mb-0 text-sm text-slate-600">
            <li className="mb-1 mr-4">About</li>
            <li className="mb-1 mr-4">Advertising</li>
            <li className="mb-1 mr-4">Business</li>
            <li className="mb-1">How Search works</li>
          </ul>
          <ul className="flex flex-wrap text-sm text-slate-600">
            <li className="mb-1 mr-4">Privacy</li>
            <li className="mb-1 mr-4">Terms</li>
            <li className="mb-1 mr-4">Settings</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
