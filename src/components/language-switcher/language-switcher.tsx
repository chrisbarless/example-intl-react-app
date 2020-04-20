import * as React from 'react';

const languages = [
  {label: 'EN', value: 'en-US'},
  {label: 'ES', value: 'es-US'},
];

type LanguageSwitcherProps = {
  locale: 'en-US' | 'es-US';
};

const LanguageSwitcher: React.FC = ({
  locale,
  onChange,
}: LanguageSwitcherProps) => (
  <select
    className="language-switcher"
    name="locale"
    defaultValue={locale}
    id="locale"
    onChange={(event): void => onChange(event.target.value)}
  >
    {languages.map(({label, value}) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))}
  </select>
);

export default LanguageSwitcher;
