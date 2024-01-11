import { AddIcon } from "Icons";
import { createSignal } from "solid-js";

interface Props {
  addHandler: (name: string) => void;
}

function AddPlayer(props: Props) {
  const [value, setValue] = createSignal("");

  const addPlayerHandler = () => {
    if (!value()) return;
    props.addHandler(value());
    setValue("");
  };

  const inputHandler = (e: { currentTarget: HTMLInputElement }) => {
    setValue(e.currentTarget.value);
  };

  const enterHandler = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      addPlayerHandler();
    }
  };

  return (
    <>
      <input
        class="input join-item my-1 w-full max-w-xs flex-1 focus:outline-none"
        value={value()}
        onInput={inputHandler}
        onKeyDown={enterHandler}
      />
      <button
        class="btn-primary btn btn-square join-item"
        onClick={addPlayerHandler}
      >
        <AddIcon size={24} />
      </button>
    </>
  );
}

export default AddPlayer;
