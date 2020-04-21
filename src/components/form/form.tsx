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
  [procedureName: string]: ?('yes' | 'no');
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
        const procedureName = `procedure${val}`;

        if (regionalData.disabledProcedures[regionValue]?.includes(val)) {
          return null;
        }

        return (
          <FormControl component="fieldset" key={procedureName}>
            <FormLabel component="legend">
              <FormattedMessage id={procedureName} />
            </FormLabel>
            <RadioGroup
              aria-label={procedureName}
              name={procedureName}
              value={state[procedureName]}
              onChange={(event): void => {
                dispatch({
                  type: 'changeRadio',
                  payload: {
                    [procedureName]: event.target.value,
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
