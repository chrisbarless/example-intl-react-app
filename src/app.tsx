import * as React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider, FormattedMessage} from 'react-intl';

import messages from './messages';

const App: React.FC = () => (
  <div>
    <h1>
      <FormattedMessage id="formHeader" />
    </h1>
  </div>
);

ReactDOM.render(
  <IntlProvider locale="en" messages={messages.en}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
