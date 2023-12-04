import NaverMap from '@/components/NaverMap';
import NaverSearch from '@/components/NaverSearch';

export default function Home() {
  return (
    <main>
      <NaverMap lat={37.3595704} lng={127.105399} />
      <NaverSearch />
    </main>
  );
}
