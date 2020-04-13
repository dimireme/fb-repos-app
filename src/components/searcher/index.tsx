import React, { useState } from 'react';

type Props = {
  onSubmit: (value: string) => void;
  value?: string;
};

const Searcher: React.FC<Props> = ({ value, onSubmit }) => {
  const [search, setSearch] = useState(value ?? '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(search);
  };

  return (
    <div style={{ margin: '16px 0' }}>
      <input
        type="text"
        placeholder="Поиск..."
        value={search}
        onChange={handleChange}
        style={{ marginRight: '16px' }}
      />
      <button onClick={handleSubmit}>искать</button>
    </div>
  );
};

export default Searcher;
