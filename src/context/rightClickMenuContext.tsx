import Icon from "@/components/Icon";
import useDownload from "@/hooks/useDownload";
import useShare from "@/hooks/useShare";
import { useEffect, useState } from "react";

const CustomContextMenu = () => {
  const { share } = useShare();
  const { download } = useDownload("/files/resume-ES.pdf");
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

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div
      id="custom-right-menu"
      style={{
        display: menuVisible ? "block" : "none",
        left: menuPosition.x,
        top: menuPosition.y,
      }}
    >
      <a
        href="#"
        onClick={() => {
          download();
          setMenuVisible(false);
        }}
      >
        <Icon name="download" color="var(--dark-gray)" />
        Download
      </a>
      <a
        href="#"
        onClick={() => {
          share();
          setMenuVisible(false);
        }}
      >
        <Icon name="link" color="var(--dark-gray)" />
        Share
      </a>
      <a href="/settings">
        <Icon name="settings" color="var(--dark-gray)" />
        Settings
      </a>
    </div>
  );
};

export default CustomContextMenu;
