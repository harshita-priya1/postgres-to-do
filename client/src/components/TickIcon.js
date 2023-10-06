const TickIcon = () => {
  return (
    <svg
      className="tick"
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 512 512"
    >
      <title>ionicons-v5-e</title>
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" />
      <polyline className="tick" points="352 176 217.6 336 160 272" />
    </svg>
  );
};

export default TickIcon;

// const TickIcon = () => {
//   const iconStyle = {
//     fill: "none",
//     stroke: "#000",
//     strokeMiterlimit: 10,
//     strokeWidth: "32px",
//   };

//   const polylineStyle = {
//     fill: "none",
//     stroke: "#000",
//     strokeLinecap: "round",
//     strokeLinejoin: "round",
//     strokeWidth: "32px",
//   };

//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="25"
//       height="25"
//       viewBox="0 0 512 512"
//     >
//       <title>ionicons-v5-e</title>
//       <path
//         d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
//         style={iconStyle}
//       />
//       <polyline points="352 176 217.6 336 160 272" style={polylineStyle} />
//     </svg>
//   );
// };

// export default TickIcon;
