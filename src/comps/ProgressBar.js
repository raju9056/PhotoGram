import React, { useEffect } from "react";
import { Progress } from "antd";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile }) => {
  let { url, progress } = useStorage(file);
  console.log(progress, url);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  progress = Math.ceil(progress);
  return (
    <div className="progress-bar">
      <Progress percent={progress} status="active" />
    </div>
    // <motion.div
    //   className="progress-bar"
    //   intial={{ width: 0 }}
    //   animate={{ width: progress + "%" }}
    // ></motion.div>
  );
};

export default ProgressBar;
