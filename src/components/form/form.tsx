import * as React from 'react';
import {FormattedMessage} from 'react-intl';

const Form: React.FC = () => (
  <section className="form">
    <h1>
      <FormattedMessage id="formHeader" />
    </h1>
  </section>
);

export default Form;
