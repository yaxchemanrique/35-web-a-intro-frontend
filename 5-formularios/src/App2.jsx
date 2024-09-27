import React, { useEffect, useState } from "react";
import NewsletterForm from "./assets/componets/NewsletterForm";

function App2() {
  const [count, setCount] = useState(0)

  // useEffect(function, [])
  useEffect(
    () => {
      document.title = `(${count}) - Counter`
    }, 
    [count]
  )

  return (
    <>
      <header>
        <NewsletterForm id={'comp-1'}/>
        <button onClick={()=> {
          setCount(count + 1)
        }}>+1</button>
        <p>{count}</p>
      </header>
      <br />
      <br />
      <main>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, atque
        repellat eligendi, quam possimus minus quaerat dolorum praesentium non
        quia in fuga harum dolorem ex quibusdam tempora id distinctio aliquam!
      </main>
      <br />
      <br />
      <footer>
        <NewsletterForm />
      </footer>
    </>
  );
}

export default App2;
