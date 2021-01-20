import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from 'redux/actions';
import { getFilter } from 'redux/selectors';
import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={s.filter}>
      Find contacts by name{' '}
      <input
        type="text"
        value={value}
        onChange={event => dispatch(actions.changeFilter(event.target.value))}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};

export default Filter;
