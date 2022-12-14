/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { IconButton, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searcher = (props) => {

  // eslint-disable-next-line react/prop-types
  const { setInputUser } = props;

  const [valueInput, setValueInput] = useState('');

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
  }

  const handleSubmit = () => {
    setInputUser(valueInput);
  }

  return (
    <Stack 
      direction= 'row'
      sx={{
        marginTop: '30px',
        width: '80%'
      }}
    >
      <TextField 
        id="oulined-basic"
        label="GitHub User"
        placeholder='Octocat'
        size='small'
        variant='outlined'
        value={valueInput}
        onChange={onSearchValueChange}
        sx={{
          width: '90%',
        }}
      />
      <IconButton 
        onClick={handleSubmit}
        size='small'
        sx={{
          left:'-45px'
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  )
}

export default Searcher;