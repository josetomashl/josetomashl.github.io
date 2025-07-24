import { Outlet } from 'react-router';

import Navigation from '@/components/Navigation';
import ProfileCard from '@/components/ProfileCard';

export default function DefaultLayout() {
  return (
    <div className='layout'>
      <ProfileCard />
      <div id='pages'>
        <Navigation />
        <Outlet />
      </div>
    </div>
  );
}
