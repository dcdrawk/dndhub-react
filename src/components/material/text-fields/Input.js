import React, {Component} from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value : props.value ? props.value : '' };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  componentDidMount() {
    if(this.state.value) {
      let label = this.input.getElementsByTagName('label')[0];
      label.className = 'input-focus';
    }
  }

  onFocus() {
    this.setState({focus: true});
  }

  onBlur() {
    this.setState({focus: false});
  }

  render() {
    return (

      <div className={`input ${this.state.focus ? 'focus' : ''} ${this.state.value ? 'has-value' : ''} `}
           onFocus={ this.onFocus.bind(this) }
           onBlur={ this.onBlur.bind(this) }
           ref={(c) => { this.input = c}}>
        <label>{this.props.label}</label>
        <input type={this.props.type} value={this.state.value} onChange={ this.handleChange.bind(this) }/>
      </div>
    );

  }
}

export default Input;