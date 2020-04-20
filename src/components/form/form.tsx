import * as React from 'react';
import {FormattedMessage} from 'react-intl';

type FormProps = {
  region: string;
};

const Form: React.FC = ({region}: FormProps) => (
  <form className="form">
    <h1 className="formSection">
      <FormattedMessage id="institutionName" values={{region}} />
    </h1>
    {[1, 2, 3].map((val) => {
      const procedureName = `procedure${val}`;
      return (
        <section className="formSection" key={procedureName}>
          <FormattedMessage id={procedureName} values={{region}} />
          <div className="buttons">
            <label htmlFor={`${procedureName}-yes`}>
              <FormattedMessage id="yes" />
              <input type="radio" name={procedureName} />
            </label>
            <label htmlFor={`${procedureName}-no`}>
              <FormattedMessage id="no" />
              <input type="radio" name={procedureName} />
            </label>
          </div>
        </section>
      );
    })}
  </form>
);

export default Form;
