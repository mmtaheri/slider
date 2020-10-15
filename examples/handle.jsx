import '../assets/index.less';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import Tooltip from 'rc-tooltip';
import Slider from '../src';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const { Handle } = Slider;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={`${value} %`}
      visible
      placement="top"
      key={index}
      getTooltipContainer={node => node}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const wrapperStyle = { width: 400, margin: 50 };

export default () => (
  <div>
    <div style={wrapperStyle}>
      <p>Slider with custom handle</p>
      <Slider min={0} max={20} defaultValue={3} handle={handle} />
    </div>
    <div style={wrapperStyle}>
      <p>Reversed Slider with custom handle</p>
      <Slider min={0} max={20} reverse defaultValue={3} handle={handle} />
    </div>
    <div style={wrapperStyle}>
      <p>Slider with fixed values</p>
      <Slider min={20} defaultValue={20} marks={{ 20: 20, 40: 40, 100: 100 }} step={null} />
    </div>
    <div style={wrapperStyle}>
      <p>Range with custom tooltip</p>
      <Range min={0} max={20} defaultValue={[3, 10]} tipFormatter={value => `${value}%`} />
    </div>
  </div>
);
