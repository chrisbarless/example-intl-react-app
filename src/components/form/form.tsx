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
  region: {
    label: string;
    value: string;
  };
};
type FormState = {
  [procedureName: string]: ?boolean;
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

const Form: React.FC = ({region}: FormProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        alert(JSON.stringify(state));
      }}
    >
      <h1 className="formSection">
        <FormattedMessage
          id="institutionName"
          values={{regionName: region.label}}
        />
      </h1>
      <h3 className="formSection">
        <FormattedMessage id="formHeader" />
      </h3>
      {['A', 'B', 'C'].map((val) => {
        const procedureName = `procedure${val}`;
        if (regionalData.disabledProcedures[region.value]?.includes(val)) {
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
              onChange={(event) => {
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
        Submit
      </Button>
    </form>
  );
};

export default Form;
