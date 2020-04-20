import * as React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl';

import messages from './config/messages.yaml';

import Form from './components/form';
import LanguageSwitcher from './components/language-switcher';

const App: React.FC = () => {
  const [locale, setLocale] = React.useState('en-US');

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Form />
      <section className="bottomBar">
        <LanguageSwitcher onChange={setLocale} locale={locale} />
      </section>
    </IntlProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
