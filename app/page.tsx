import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-5 p-10">
        <Link href="/e-chart" className="font-bold hover:text-red-500">
          <h1>EChart</h1>
        </Link>
        <Link href="/google-chart" className="font-bold hover:text-red-500">
          <h1>Google Chart</h1>
        </Link>
        <Link href="/react-chart" className="font-bold hover:text-red-500">
          <h1>React Chart</h1>
        </Link>
      </div>
    </div>
  );
}
