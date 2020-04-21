import * as React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider, FormattedMessage, FormattedDate} from 'react-intl';
import {Select, MenuItem} from '@material-ui/core';

import Form from './components/form';
import messages from './config/messages.yaml';

const languages = new Map<string, string>([
  ['en-US', 'EN'],
  ['es-US', 'ES'],
]);

const regions = new Map<string, string>([
  ['ca', 'California'],
  ['co', 'Colorado'],
  ['az', 'Arizona'],
]);

const App: React.FC = () => {
  const [locale, setLocale] = React.useState('en-US');
  const [region, setRegion] = React.useState('ca');
  const date = React.useRef(new Date());

  return (
    <IntlProvider key={region} locale={locale} messages={messages[locale]}>
      <Form regionValue={region} regionLabel={regions.get(region)} />
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
            value={region}
            id="region"
            onChange={(event): void => setRegion(event.target.value)}
          >
            {[...regions].map(([value, label]) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
          <Select
            className="switcher"
            name="locale"
            value={locale}
            id="locale"
            onChange={(event): void => setLocale(event.target.value)}
          >
            {[...languages].map(([value, label]) => (
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
