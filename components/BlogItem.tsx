import React from "react";
import Image from "next/Image";
import { useRouter, NextRouter } from "next/router";
import useLocale from "../utils/useLocale";

function BlogItem() {
  const router: NextRouter = useRouter();
  const { locale } = router;
  const t = useLocale(locale);

  return (
    <div className="mx-auto shadow-md lg:w-full lg:flex lg:flex-row lg:h-auto">
      <div className="w-full h-48 relative lg:h-auto lg:w-2/5">
        {/**
         * * Next/Image should be inside a relative div element,
         * * in this case width and height could be ignore by Image required prop
         */}
        <Image
          className="rounded-tr-md rounded-tl-md lg:rounded-bl-sm lg:rounded-tr-none"
          src="/images/drawers.jpg"
          alt="drawer"
          layout="fill"
          objectFit="cover" // <-- make image ratio strech instead image itself.
        />
      </div>
      <div className="dark:bg-slate-800 bg-slate-50 p-8 rounded-bl-md rounded-br-md lg:w-3/5 lg:rounded-bl-none lg:rounded-tr-md">
        <h2 className="dark:text-gray-200 text-gray-700 font-semibold">
          {t.postHeader}
        </h2>
        <p className="dark:text-slate-200 text-sm text-gray-600 mt-6">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting.
        </p>
        <div className="flex items-center mt-8">
          <div className="flex items-center">
            <div className="h-10 w-10 relative">
              {/**
               * * Next/Image should be inside a relative div element,
               * * in this case width and height could be ignore by Image required prop
               */}
              <Image
                className="rounded-full"
                src="/images/avatar-michelle.jpg"
                layout="fill"
              />
            </div>
            <div className="ml-4">
              <p className="dark:text-sky-400 text-gray-800 text-sm font-semibold">
                Michelle Appleton
              </p>
              <p className="dark:text-slate-500 text-gray-600 text-sm">
                28 June 2022
              </p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full dark:bg-gray-800 bg-gray-200 ml-auto flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
              <path
                fill="#6E8098"
                d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
