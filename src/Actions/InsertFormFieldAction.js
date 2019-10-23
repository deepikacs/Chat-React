import * as ActionTypes from './types';
import {
    Dynamic_Onchange,
  } from './types';



export const DynamicOnchange = ({ prop, value }) => {
    return {
      type: Dynamic_Onchange,
      payload: { prop, value }
    }
  }

