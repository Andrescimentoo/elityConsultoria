import React from "react";
export const InputCapturaMerchaintId = ({url,setUrl}) => {
   return (
    <input
      type="text"
      placeholder="Digite a URL"
      value={url}
      onChange={(e) => setUrl(e.target.value)} //?
    />
  );
};

 