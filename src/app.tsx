import * as React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider, FormattedMessage} from 'react-intl';

import LanguageSwitcher from './components/language-switcher';
import messages from './messages.yaml';

const App: React.FC = () => {
  const [locale, setLocale] = React.useState('en-US');

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <LanguageSwitcher onChange={setLocale} locale={locale} />
      <h1>
        <FormattedMessage id="formHeader" />
      </h1>
    </IntlProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
