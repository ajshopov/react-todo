import React from 'react'
import PasswordInput from './PasswordInput'
import ToDo from './ToDo'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <ToDo
        listName="Grocery"
        todos={
          ['chips', 'beer']
        }
      />
    </div>
  }

}
