import React from "react";
import Image from "next/Image";

function CardOwner() {
  return (
    <div className="min-h-screen w-full h-screen flex justify-center items-center flex-col lg:flex-row-reverse lg:justify-between">
      <div className="h-full w-full flex justify-center items-start">
        {/*
         ** NOTE: Image component need heigh & width set
         ** otherwise layout fill and relative at its parent should be set to work properly
         ** And here, its parent is positioned relative with width and height set to full
         ** Because outer parent is flex.
         */}
        <div className="h-full w-full relative">
          <Image src="/SVG/7.svg" layout="fill" objectFit="contain" />
        </div>
      </div>

      <div className="h-full w-full  flex justify-center items-center">
        <article className="px-5 pt-10 text-lg">
          <h1 className="text-3xl font-bold mb-3 dark:text-gradient1">
            Say hello to research data
          </h1>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa.
          </p>
          <div>
            <ul className="flex flex-wrap gap-5 mt-3">
              <li className="flex justify-center items-center">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#22C55E"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                </svg>
                <span className="pl-3">Darkmode</span>
              </li>
              <li className="flex justify-center items-center">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#22C55E"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                </svg>
                <span className="pl-3">Multi-Langauges</span>
              </li>
              <li className="flex justify-center items-center">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#22C55E"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                </svg>
                <span className="pl-3">Responsive Design</span>
              </li>
              <li className="flex justify-center items-center">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#22C55E"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                </svg>
                <span className="pl-3">SEO friendly</span>
              </li>
              <li className="flex justify-center items-center">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#22C55E"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                </svg>
                <span className="pl-3">Life Time Support</span>
              </li>
            </ul>
          </div>

          <div className="mt-5 flex">
            <div className="relative w-10 h-10">
              <Image
                className="rounded-full"
                src="/images/avatar-michelle.jpg"
                layout="fill"
              />
            </div>
            <div className="ml-5 flex flex-col">
              <h1 className="text-base font-semibold dark:text-sky-400 text-gray-800">
                Nathapon B. Christain
              </h1>
              <p className="text-sm text-gray-600">Web Developer</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default CardOwner;
