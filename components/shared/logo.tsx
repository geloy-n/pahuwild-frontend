import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/" className="flex items-center">
        <div className="text-2xl font-bold tracking-wider flex items-center">
          <span className="text-green-300">Pahu</span>
          <span className="text-amber-400">Wild</span>
          <svg
            className="ml-2 h-6 w-6 text-green-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
          </svg>
        </div>
      </Link>
    </>
  );
};

export default Logo;
