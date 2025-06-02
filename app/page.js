import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
   <div>
      <Link href="/dailyTreats">
      <button className="primaryButton">Go to Daily Treats</button>
    </Link>
    </div>
  );
}
