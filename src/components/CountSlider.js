import React, { useState } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

const CountSlider = props => {
  const [value, setValue] = useState(props.inputValue);

  const handleChange = value => {
    const cleanValue = Number(value) ? value : props.inputValue;
    setValue(cleanValue);
    // send the slider value back to parent component
    props.onCountSliderChange(value);
  };

  return (
    <Row>
      <Col span={12}>
        <Slider value={value} min={1} max={20} onChange={handleChange} />
      </Col>
      <Col span={4}>
        <InputNumber
          value={value}
          min={1}
          max={20}
          style={{ marginLeft: 16 }}
          onChange={handleChange}
        />
      </Col>
    </Row>
  );
};
export default CountSlider;
// import React from 'react';
// import { Slider, InputNumber, Row, Col } from 'antd';

// export class CountSlider extends React.Component {
//   state = {
//     // get value from parent component, i.e. DataViewContainer.
//     inputValue: this.props.value
//   };

//   onChange = value => {
//     const cleanValue = Number(value) ? value : this.state.inputValue;
//     this.setState({
//       inputValue: cleanValue
//     });
//     // send the slider value back to parent component
//     this.props.onCountSliderChange(cleanValue);
//   };

//   render() {
//     return (
//       <Row>
//         <Col span={12}>
//           <Slider
//             min={1}
//             max={20}
//             onChange={this.onChange}
//             value={this.state.inputValue}
//           />
//         </Col>
//         <Col span={4}>
//           <InputNumber
//             min={1}
//             max={20}
//             style={{ marginLeft: 16 }}
//             value={this.state.inputValue}
//             onChange={this.onChange}
//           />
//         </Col>
//       </Row>
//     );
//   }
// }
