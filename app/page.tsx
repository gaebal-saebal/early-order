import NaverMap from '@/components/NaverMap';
import NaverSearch from '@/components/NaverSearch';

export default function Home() {
  return (
    <main>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', zIndex: 1 }}>필터</div>
        <NaverMap lat={37.3595704} lng={127.105399} />
      </div>
      {/* <NaverSearch /> */}
    </main>
  );
}
