import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h1>Learn Next</h1>
      </div>
      <div>
        <Link href="/">Home </Link>
        <Link href="/about"> About</Link>
        <Link href="contact"> Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
