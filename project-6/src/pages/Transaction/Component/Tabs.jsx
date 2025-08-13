import React, { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { id: "All",     label: "All",     content: "one!",   count: 349 },
    { id: "Deposit", label: "Deposit", content: "two!",   count: 114 },
    { id: "WithDraw",label: "WithDraw",content: "three!", count: 55 },
    { id: "Trade",   label: "Trade",   content: "three!", count: 19 },
  ];

  return (
    <div className="max-w-[1100px] p-6 my-8 mb-2 mx-2 bg-white text-gray-600 rounded-lg shadow-md">
      <div className="flex flex-col flex-wrap lg:overflow-hidden md:overflow-auto items-center w-1/2 mt-10">

        <div className="flex border-b border-gray-300 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-4 flex flex-row items-center text-sm font-medium focus:outline-none 
                ${ activeTab === tab.id
                  ? "border-b-2  border-blue-500 text-blue-500"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              <p>{tab.label}</p>
              <p className="bg-[#F3F3F7] px-2 py-1 rounded-xl">{tab.count}</p>
            </button>
          ))}
        </div>

        {/* ✅ Changed w-1/2 to w-full for consistent alignment */}
        {/* <div className="p-4 w-full text-center text-gray-700 border border-gray-300 border-t-0">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div> */}
      </div>
    </div>
  );
}
