import * as React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider, FormattedMessage, FormattedDate} from 'react-intl';
import {Select, MenuItem} from '@material-ui/core';
import messages from './config/messages.yaml';

import Form from './components/form';

const languages = new Map<string, string>([
  ['EN', 'en-US'],
  ['ES', 'es-US'],
]);

const regions = new Map<string, string>([
  ['California', 'ca'],
  ['Colorado', 'co'],
  ['Arizona', 'az'],
]);

const App: React.FC = () => {
  const [locale, setLocale] = React.useState('en-US');
  const [region, setRegion] = React.useState('ca');
  const date = React.useRef(new Date());

  return (
    <IntlProvider key={locale} locale={locale} messages={messages[locale]}>
      <Form region={[region, regions.get(region)]} />
      <section className="bottomBar">
        <FormattedDate
          className="date"
          value={date.current}
          year="numeric"
          month="long"
          day="2-digit"
        />
        <div className="switchers">
          <Select
            className="switcher"
            name="region"
            defaultValue={region}
            id="region"
            onChange={(event): void => setRegion(event.target.value)}
          >
            {[...regions].map(([label, value]) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
          <Select
            className="switcher"
            name="locale"
            defaultValue={locale}
            id="locale"
            onChange={(event): void => setLocale(event.target.value)}
          >
            {[...languages].map(([label, value]) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </div>
      </section>
    </IntlProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
