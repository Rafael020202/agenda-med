import React from 'react';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import { Platform } from 'react-native';

import { InputArea, Container, InputLabel } from './styles';

export const SelectInput = ({ placeholder }) => {
  return (
    <Container>
      <InputLabel>{placeholder}</InputLabel>
      <InputArea
        style={Platform.select({ android: { zIndex: 1 }, ios: { zIndex: 1 } })}
      >
        <AutocompleteDropdown
          clearOnFocus={false}
          closeOnBlur={true}
          closeOnSubmit={false}
          direction={Platform.select({ android: 'up' })}
          containerStyle={{
            flex: 1,
            padding: 0,
          }}
          inputContainerStyle={{
            backgroundColor: 'transparent',
            padding: 0,
            flex: 1,
          }}
          initialValue={{ id: '2' }}
          onSelectItem={() => true}
          textInputProps={{
            placeholder: 'Estado',
            placeholderTextColor: '#626262',
            textAlign: 'left',
            style: {
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
              marginLeft: -10,
              padding: 0,
            },
          }}
          dataSet={[
            { id: '1', title: 'Alpha' },
            { id: '2', title: 'Beta' },
            { id: '3', title: 'Gamma' },
          ]}
        />
      </InputArea>
    </Container>
  );
};
