import React, { useId, useState } from "react";

//Hook 1 -""
//Hook2 - ID

function NewsletterForm({id}) {
  
  const [email, setEmail] = useState(""); 
  // const inputId = `${id}-email`;

  const idHook = useId();
  // console.log(idHook)
  // const inputId = `${idHook}-email`;

  let idProp = "";
  if(id) {
    idProp = id;
  } else {
    idProp = idHook; 
  }

  return (
    <form>
      <label htmlFor={idProp}>Registrate a nuestro newsletter</label>
      <input
        type="email"
        name="email"
        id={idProp}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
    </form>
  );
}

export default NewsletterForm;
