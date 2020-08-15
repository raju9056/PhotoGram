import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
const deepai = require("deepai");
const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  const filter = async (url) => {
    console.log(url);
    deepai.setApiKey("63510993-bfb9-4f95-bf1b-4be993b97259");
    var result = await deepai.callStandardApi("content-moderation", {
      image: url,
    });
    console.log(result);
  };
  return (
    <div className="img-grid">
      {docs &&
        docs.map(async (doc) => {
          console.log(result);
          console.log(doc.url);
          deepai.setApiKey("63510993-bfb9-4f95-bf1b-4be993b97259");
          var result = await deepai.callStandardApi("content-moderation", {
            image: doc.url,
          });
          return (
            <div>
              {/* <FilterVulgar /> */}
              <motion.div
                className="img-wrap"
                key={doc.id}
                whileHover={{ opacity: 1 }}
                onClick={() => setSelectedImg(doc.url)}
              >
                <motion.img
                  src={doc.url}
                  alt="uploaded pic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                />
              </motion.div>
              <div className="position">
                <a href={doc.url} target="_blank" download>
                  <i className="fa fa-download" style={{ fontSize: "20px" }} />
                </a>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
