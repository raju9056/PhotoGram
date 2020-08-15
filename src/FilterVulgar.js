// import * as nsfwjs from "nsfwjs";

// const img = document.getElementById("img");

// // Load model from my S3.
// // See the section hosting the model files on your site.
// const model = await nsfwjs.load();

// // Classify the image
// const predictions = await model.classify(img);
// console.log("Predictions: ", predictions);

// const tf = require("@tensorflow/tfjs-node");
// // var nodePreGyp = require("node-pre-gyp");
// const nsfw = require("nsfwjs");
// const filterVulgar = async ({ pic }) => {
//   const model = await nsfw.load(); // To load a local model, nsfw.load('file://./path/to/model/')
//   // Image must be in tf.tensor3d format
//   // you can convert image to tf.tensor3d with tf.node.decodeImage(Uint8Array,channels)
//   const image = await tf.node.decodeImage(pic.data, 3);
//   const predictions = await model.classify(image);
//   image.dispose(); // Tensor memory must be managed explicitly (it is not sufficient to let a tf.Tensor go out of scope for its memory to be released).
//   console.log(predictions);
// };

// export default filterVulgar;

// const deepai = require("deepai"); // OR include deepai.min.js as a script tag in your HTML
// deepai.setApiKey("63510993-bfb9-4f95-bf1b-4be993b97259");
// const FilterVulgar = async () => {
//   var resp = await deepai.callStandardApi("nsfw-detector", {
//     image:
//       "https://firebasestorage.googleapis.com/v0/b/rey-photogram-93896.appspot.com/o/IMG_20200724_174253.jpg?alt=media&token=7494959f-cfce-442f-b418-81889db7e506",
//   });
//   console.log(resp);
// };

// export default FilterVulgar;
