import React from 'react';
import { Field } from 'redux-form';
import TextInput from './inputs/TextInput';

export const discounts = ({ fields }) => (
    <div className="custom-field-array-container">
      {fields.map((code, index) => (
        <div key={index} className="field-array-item">
          <Field
            name={code}
            type="text"
            component={TextInput}
            label={`discount Code #${index + 1}`}
            autoFocus
          />
          <button type="button" onClick={() => fields.remove(index)}>
            &times;
          </button>
        </div>
      ))}
      <button type="button" onClick={() => fields.push()}>
        add {!fields.length ? 'discount code(s)' : 'another discount code'}
      </button>
    </div>
  );