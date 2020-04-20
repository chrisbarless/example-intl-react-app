import * as React from 'react';

type LanguageSwitcherProps = {
  region: 'ca' | 'co' | 'az';
};

export const RegionSwitcher: React.FC = ({
  region,
  onChange,
}: LanguageSwitcherProps) => (
  <select
    className="switcher"
    name="region"
    defaultValue={regions[0]}
    id="region"
    onChange={(event): void => onChange(event.target.value)}
  >
    {languages.map(({label, value}) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))}
  </select>
);
