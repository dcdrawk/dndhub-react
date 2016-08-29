import React, {Component} from 'react';

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { value : props.value ? props.value : '' };
  }

  componentDidMount() {
    if(this.props.value) {
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

      <div className={`input ${this.state.focus ? 'focus' : ''} ${this.props.value ? 'has-value' : ''} `}
           onFocus={ this.onFocus.bind(this) }
           onBlur={ this.onBlur.bind(this) }
           ref={(c) => { this.inputContainer = c}}>
        { this.props.children }
      </div>
    );

  }
}

export default InputContainer;