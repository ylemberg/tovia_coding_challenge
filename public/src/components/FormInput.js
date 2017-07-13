import React, { Component } from 'react'
import Input from 'react-toolbox/lib/input'

export default class FormInput extends Component {
  constructor() {
    super()
    this.state = {
      text: 'FormInput'
    }
  }

  handleChange(evt) {
    console.log('evt', evt)
  }

  render() {
    return (
      <div>
        <Input type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={16} />
      </div>
    )
  }
}

// import Input from 'react-toolbox/lib/input';

// export default class InputTest extends React.Component {
//   state = { name: '', phone: '', email: '', hint: '' };

//   handleChange = (name, value) => {
//     this.setState({...this.state, [name]: value});
//   };

//   render () {
//     return (
//       <section>
//         <Input type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={16 } />
//         <Input type='text' label='Disabled field' disabled />
//         <Input type='email' label='Email address' icon='email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
//         <Input type='tel' label='Phone' name='phone' icon='phone' value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')} />
//         <Input type='text' value={this.state.hint} label='Required Field' hint='With Hint' required onChange={this.handleChange.bind(this, 'hint')} icon={<span>J</span>} />
//       </section>
//     );
//   }
// }