import * as React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider, FormattedDate} from 'react-intl';

import messages from './config/messages.yaml';

import Form from './components/form';

const languages = [
  {label: 'EN', value: 'en-US'},
  {label: 'ES', value: 'es-US'},
];

const regions = [
  {label: 'California', value: 'ca'},
  {label: 'Colorado', value: 'co'},
  {label: 'Arizona', value: 'az'},
];

const App: React.FC = () => {
  const [locale, setLocale] = React.useState('en-US');
  const [region, setRegion] = React.useState('ca');
  const date = React.useRef(new Date());

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Form region={regions.find(({value}) => region === value).label} />
      <section className="bottomBar">
        <FormattedDate
          className="date"
          value={date.current}
          year="numeric"
          month="long"
          day="2-digit"
        />
        <div className="switchers">
          <select
            className="switcher"
            name="region"
            defaultValue={region}
            id="region"
            onChange={(event): void => setRegion(event.target.value)}
          >
            {regions.map(({label, value}) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <select
            className="switcher"
            name="locale"
            defaultValue={locale}
            id="locale"
            onChange={(event): void => setLocale(event.target.value)}
          >
            {languages.map(({label, value}) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </section>
    </IntlProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
