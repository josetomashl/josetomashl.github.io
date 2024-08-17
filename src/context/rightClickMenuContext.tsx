import Icon from "@/components/Icon";
import useShare from "@/hooks/useShare";
import { useEffect, useState } from "react";

const CustomContextMenu = () => {
  const { share } = useShare();
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
          share();
          setMenuVisible(false);
        }}
      >
        <Icon name="link" color="var(--dark-gray)" />
        Share
      </a>
      <a href="#" onClick={() => alert("Option 1 clicked")}>
        <Icon name="settings" color="var(--dark-gray)" />
        Settings
      </a>
    </div>
  );
};

export default CustomContextMenu;
