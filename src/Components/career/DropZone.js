// import React, { useCallback } from "react";
// import { useState } from "react";
// import { useDropzone } from "react-dropzone";

// const DropUploader = ({setFile}) => {

//   const onDrop = useCallback((acceptedFiles) => {
//     // Handle the dropped files here
//        setFile(acceptedFiles);
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: "image/*", // Specify accepted file types
//   });

//   return (
//     <div
//       {...getRootProps()}
//       className={`bg-[#EFEFEF] border-2 border-dashed p-10 text-center flex justify-center items-center gap-3 w-full xl:w-[955px]  px-10 py-10 md:px-48 md:py-14 ${
//         isDragActive ? "border-green-500" : "border-gray-300"
//       } `}
//     >
//       <input {...getInputProps()} type="file" value={file}  onChange={()=>{handle}}  />
//       {isDragActive ? (
//         <h1
//           className={`text-base text-[#afafaf] ${
//             isDragActive ? "border-green-500" : "border-gray-300"
//           } font-sans font-bold leading-[100%] tracking-[2px] text-green-500`}
//         >
//           DROP TO UPLOAD YOUR RESUME{" "}
//           <span className="text-base   font-sans font-bold leading-[100%] tracking-[2px] text-black ">
//             {" "}
//             OR BROWSE
//           </span>
//         </h1>
//       ) : (
//         <h1
//           className={`text-base text-[#afafaf] ${
//             isDragActive ? "border-green-500" : "border-gray-300"
//           } font-sans font-bold leading-[100%] tracking-[2px]`}
//         >
//           DROP TO UPLOAD YOUR RESUME{" "}
//           <span className="text-base  font-sans font-bold leading-[100%] tracking-[2px] text-black ">
//             {" "}
//             OR BROWSE
//           </span>
//         </h1>
//       )}
//     </div>
//   );
// };

// export default DropUploader;
