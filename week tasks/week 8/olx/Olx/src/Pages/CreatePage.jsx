import React from 'react'
import Create from "../Components/Create/Create";
import Header from '../Components/Header/Header';
import { Fragment } from 'react';

const CreatePage = () => {
  return (
    <Fragment>
      <Header/>
        <Create />
    </Fragment>
  )
}

export default CreatePage