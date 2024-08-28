import { useEffect, useState } from "react";

const useDownload = (path: string) => {
  const [downloaded, setDownloaded] = useState(false);
  useEffect(() => {
    if (!path) {
      throw new Error("DEV Error: Path to file is required!");
    }
  }, [path]);

  const download = () => {
    setDownloaded(true);
    // FIXME download file
    setTimeout(() => {
      setDownloaded(false);
    }, 1500);
  };

  return { isDownloaded: downloaded, download };
};

export default useDownload;
