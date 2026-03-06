import React from "react";

function Card({userName, btnText}) {

    console.log(userName);
    

  return (
    <div class="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://abmmejbha.me/images/me.png"
        alt="Profile"
        className="z-0 h-full w-full rounded-md object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent"></div>

      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{userName}</h1>

        <p className="text-sm text-gray-300 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>

        <button className="inline-flex items-center cursor-pointer text-sm font-semibold text-white mt-2">
            {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;
