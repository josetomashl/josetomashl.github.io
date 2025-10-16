import { Outlet } from 'react-router';

import Navigation from '@/components/common/Navigation';
import ProfileCard from '@/components/common/ProfileCard';

export default function DefaultLayout() {
  return (
    <div id='layout'>
      <ProfileCard />
      <div id='pages'>
        <Navigation />
        <Outlet />
      </div>
    </div>
  );
}
