/**
 * 2018-01-01 StanleyChen
 */

import React from 'react';
import { Link } from 'dva/router';
import Exception from '../../components/Exception/Exception';

export default () => (
  <Exception type="404" style={{ minHeight: 500, height: '80%' }} linkElement={Link} />
);
