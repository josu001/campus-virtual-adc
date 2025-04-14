
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-800 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">ADC Campus</Link>
      <div className="space-x-4">
        <Link href="/login">Login</Link>
        <Link href="/register">Registro</Link>
      </div>
    </nav>
  );
}
