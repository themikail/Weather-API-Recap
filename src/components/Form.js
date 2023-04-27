import { useState, useRef } from "react";

function Form({ onAddActivity }) {
  const [activityName, setActivityName] = useState("");
  const [isForGoodWeather, setIsForGoodWeather] = useState(false);
  const nameInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: activityName,
      isForGoodWeather: isForGoodWeather,
    };

    onAddActivity(data);

    setActivityName("");
    setIsForGoodWeather(false);
    nameInputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Activity</h2>
      <label>
        Activity Name:
        <input
          type="text"
          value={activityName}
          onChange={(event) => setActivityName(event.target.value)}
          ref={nameInputRef}
        />
      </label>
      <br />
      <label>
        Is it a good weather activity?
        <input
          type="checkbox"
          checked={isForGoodWeather}
          onChange={(event) => setIsForGoodWeather(event.target.checked)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
