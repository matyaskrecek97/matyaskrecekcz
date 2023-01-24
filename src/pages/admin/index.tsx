import { ROUTES } from '@/constants/routes';
import Link from 'next/link';

export default function Admin() {
  return (
    <>
      <div>
        <h1>Admin</h1>
        <p>Sem smím jen já 😎.</p>
      </div>
      <Link href={ROUTES.HOME}>Jít zpět</Link>
    </>
  );
}
