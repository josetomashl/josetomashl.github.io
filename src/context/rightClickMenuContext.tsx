import Icon from '@/components/Icon';
import useDownload from '@/hooks/useDownload';
import useShare from '@/hooks/useShare';
import { useEffect, useState } from 'react';

const CustomContextMenu = () => {
  const { share } = useShare();
  const { download } = useDownload('/files/resume-ES.pdf');
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setMenuPosition({ x: e.pageX, y: e.pageY });
      setMenuVisible(true);
    };

    const handleClick = () => {
      setMenuVisible(false);
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div
      id='custom-right-menu'
      style={{
        display: menuVisible ? 'block' : 'none',
        left: menuPosition.x,
        top: menuPosition.y
      }}>
      <span
        onClick={() => {
          download();
          setMenuVisible(false);
        }}>
        <Icon name='download' />
        Download
      </span>
      <span
        onClick={() => {
          share();
          setMenuVisible(false);
        }}>
        <Icon name='link' />
        Share
      </span>
      <a href='/settings'>
        <Icon name='settings' />
        Settings
      </a>
    </div>
  );
};

export default CustomContextMenu;
