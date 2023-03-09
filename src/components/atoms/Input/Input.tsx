import { LegacyRef, MouseEvent, useRef } from "react";

type InputProps = {};

/**
 * Input component
 */
function Input() {
  const movieNameRef = useRef<HTMLInputElement>(null);

  function handleClick(e: MouseEvent) {
    alert(movieNameRef.current?.value);
  }

  return (
    <>
      <input
        placeholder='Your favourite movie goes here...'
        ref={movieNameRef}
      />
      <button onClick={handleClick}>Print</button>
    </>
  );
}

export default Input;
