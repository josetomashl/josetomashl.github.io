import { useState } from "react";

const useShare = () => {
  const [sharedLink, setSharedLink] = useState(false);

  const share = () => {
    const url = window.location.href;
    if (navigator.canShare()) {
      navigator.share({ url });
    } else {
      setSharedLink(true);
      navigator.clipboard.writeText(url);
      setTimeout(() => {
        setSharedLink(false);
      }, 1500);
    }
  };

  return { isShared: sharedLink, share };
};

export default useShare;
