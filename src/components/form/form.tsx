import * as React from 'react';
import {FormattedMessage} from 'react-intl';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
} from '@material-ui/core';
import regionalData from '~/config/regional.yaml';

type FormProps = {
  regionValue: string;
  regionLabel: string;
};
type FormState = {
  [optionName: string]: ?('yes' | 'no');
};

const initialState = {};

function reducer(state, action): FormState {
  switch (action.type) {
    case 'changeRadio':
      return {...state, ...action.payload};
    default:
      throw new Error();
  }
}

const Form: React.FC = ({regionValue, regionLabel}: FormProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <form
      className="form"
      onSubmit={(event): void => {
        event.preventDefault();
        alert(JSON.stringify(state));
      }}
    >
      <FormattedMessage id="institutionName" values={{regionLabel}}>
        {(txt): React.FC => <h1 className="appTitle">{txt}</h1>}
      </FormattedMessage>
      <FormattedMessage id="formHeader">
        {(txt): React.FC => <h3 className="appSubtitle">{txt}</h3>}
      </FormattedMessage>
      {['A', 'B', 'C'].map((val) => {
        const optionName = `option${val}`;

        if (regionalData.disabledOptions[regionValue]?.includes(val)) {
          return null;
        }

        return (
          <FormControl component="fieldset" key={optionName}>
            <FormLabel component="legend">
              <FormattedMessage id={optionName} />
            </FormLabel>
            <RadioGroup
              aria-label={optionName}
              name={optionName}
              value={state[optionName]}
              onChange={(event): void => {
                dispatch({
                  type: 'changeRadio',
                  payload: {
                    [optionName]: event.target.value,
                  },
                });
              }}
            >
              <FormControlLabel
                value="yes"
                control={<Radio />}
                label={<FormattedMessage id="yes" />}
              />
              <FormControlLabel
                value="no"
                control={<Radio />}
                label={<FormattedMessage id="no" />}
              />
            </RadioGroup>
          </FormControl>
        );
      })}
      <Button variant="contained" color="primary" type="submit">
        <FormattedMessage id="submit" />
      </Button>
    </form>
  );
};

export default Form;
