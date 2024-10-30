import Link from 'next/link';

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full backdrop-blur">
        <Link href="#home" scroll={false}>
          <a className="nav-item">Home</a>
        </Link>
        <Link href="#projects" scroll={false}>
          <a className="nav-item">Projects</a>
        </Link>
        <Link href="#about" scroll={false}>
          <a className="nav-item">About</a>
        </Link>
        <Link href="#contact" scroll={false}>
          <a className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
        </Link>
      </nav>
    </div>
  );
};
