import { useState } from "react";

const Form = () => {
  const [inputValues, setInputValues] = useState({
    nick: "",
    subMonths: 0,
    avatar: "",
    description: "",
  });

  const handleSubmmit = () => {};

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({
        ...inputValues,
        [evt.target.name]: evt.target.value
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmmit}>
        <input
        onChange={handleChange}
          type="text"
          name="nick"
          placeholder="nick"
          value={inputValues.nick}
        />
        <input
        onChange={handleChange}
          type="number"
          name="subMonths"
          placeholder="subMonths"
          value={inputValues.subMonths}
        />
        <input
        onChange={handleChange}
          type="text"
          name="avatar"
          placeholder="avatar"
          value={inputValues.avatar}
        />
        <textarea
        onChange={handleChange}
          name="description"
          placeholder="description"
          value={inputValues.description}
        />

        <button>Save new sub!</button>
      </form>
    </div>
  );
};

export default Form;
