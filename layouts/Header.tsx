import React, { useState, useEffect } from "react";
import Image from "next/Image";
import Link from "next/Link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

function Header(): JSX.Element {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  /**
   * A handler is generally the name given to a function that handles an event
   * - it's a callback, not the event itself.
   * The event is a parameter to the handler function,
   * but the handler function is not the event parameter.
   * @param e does not implicitly set type but function itself.
   */
  const handleLightKeyPress: React.KeyboardEventHandler<HTMLLIElement> = (
    e
  ) => {
    if (e.key === "Enter") {
      setTheme("light");
    } else {
      return;
    }
  };
  const handleDarkKeyPress: React.KeyboardEventHandler<HTMLLIElement> = (e) => {
    if (e.key === "Enter") {
      setTheme("dark");
    } else {
      return;
    }
  };

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <li
          className="cursor-pointer"
          onClick={() => setTheme("light")}
          onKeyPress={handleLightKeyPress}
          tabIndex={0}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" className="w-6 h-6">
            <path
              fill="currentColor"
              d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"
            ></path>
          </svg>
        </li>
      );
    } else {
      return (
        <li
          className="cursor-pointer"
          onClick={() => setTheme("dark")}
          onKeyPress={handleDarkKeyPress}
          tabIndex={0}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" className="w-6 h-6">
            <path
              fill={
                router.route !== "/"
                  ? "dark:text-white text-gray-900"
                  : "#FFFFFF"
              }
              d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"
            ></path>
          </svg>
        </li>
      );
    }
  };

  const handleChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    /**
     * * update locale sub path without navigate back to homepage
     */
    router.push(`${locale}${router.asPath}`, `${locale}${router.asPath}`, {
      locale: false,
    });
  };

  return (
    <div className="z-10 flex pt-6 items-center justify-between px-4 sm:px-6 md:px-8">
      <div className="w-10 h-10 relative">
        <Image src="/favicon.ico" layout="fill" />
      </div>

      <div className="flex items-center">
        <nav>
          <ul className="flex items-center space-x-8">
            <li
              /**
               * Render tailwind classes depend on *route specifically.
               * * If route is not "/" apply dark mode otherwise apply only white text
               */
              className={
                router.route !== "/"
                  ? "dark:text-white text-gray-900"
                  : "text-white dark:text-white"
              }
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={
                router.route !== "/"
                  ? "dark:text-white text-gray-900"
                  : "text-white dark:text-white"
              }
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className={
                router.route !== "/"
                  ? "dark:text-white text-gray-900"
                  : "text-white dark:text-white"
              }
            >
              <Link href="/blog">Blog</Link>
            </li>

            <li>
              <select
                className="appearance-none px-3 dark:bg-white bg-white dark:text-gray-900 text-gray-900 rounded-md"
                onChange={handleChangeLang}
              >
                <option value="en">English</option>
                <option value="th">ไทย</option>
                <option value="ja">日本語</option>
              </select>
            </li>

            {renderThemeChanger()}

            <li
              className={
                router.route !== "/"
                  ? "dark:text-white text-gray-900"
                  : "text-white dark:text-white"
              }
            >
              <svg
                viewBox="0 0 16 16"
                className="w-5 h-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
