import React, { useState } from 'react';

const SettingsPage = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  const handleToggle1 = () => {
    setToggle1(!toggle1);
  };

  const handleToggle2 = () => {
    setToggle2(!toggle2);
  };

  const handleToggle3 = () => {
    setToggle3(!toggle3);
  };

  return (
    <div>
      <h1>Settings</h1>
      <div>
        <label>
          Toggle 1:
          <input type="checkbox" checked={toggle1} onChange={handleToggle1} />
        </label>
      </div>
      <div>
        <label>
          Toggle 2:
          <input type="checkbox" checked={toggle2} onChange={handleToggle2} />
        </label>
      </div>
      <div>
        <label>
          Toggle 3:
          <input type="checkbox" checked={toggle3} onChange={handleToggle3} />
        </label>
      </div>
    </div>
  );
};

export default SettingsPage;