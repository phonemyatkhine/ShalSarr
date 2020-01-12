import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function Icon(props) {
  return (
    <Ionicons
      name={props.name}
      size={16}
      style={{ marginBottom: -3 }}
      color={Colors.tintColor}
    />
  );
}
