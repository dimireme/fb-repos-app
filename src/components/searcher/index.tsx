import React from 'react';

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

const Searcher: React.FC<Props> = ({ value, onChange, onSubmit }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <form style={{ margin: '16px 0' }} onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Поиск..."
        value={value}
        onChange={handleChange}
        style={{ marginRight: '16px' }}
      />
      <button type="submit" onClick={onSubmit}>
        искать
      </button>
    </form>
  );
};

export default Searcher;
