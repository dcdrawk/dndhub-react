import React, {Component} from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { count : 1 };
  }

  componentDidMount() {
    // this._input.focus();
    console.log(this);
  }
  onFocus() {
    console.log('focus');
    console.log(this);
    let label = this.input.getElementsByTagName('label')[0];
    // this.setState({
    //   type: 'date'
    // });
    console.log(label);
    label.className = 'input-focus';
  }
  onBlur() {
    let label = this.input.getElementsByTagName('label')[0];
    label.className = '';
  }
  render() {
    return (

      <div className="input" onFocus={ this.onFocus.bind(this) } onBlur={ this.onBlur.bind(this) }  ref={(c) => {
        this.input = c}}>
        <label>{this.props.label}</label>
        <input type={this.props.type}/>
      </div>
    );

  }
}

export default Input;