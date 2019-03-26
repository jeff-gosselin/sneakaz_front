import React, {Component} from 'react';

class SizeSelector extends Component {

	render() {
		return (
			<div className="size">
				<select name="Size" onChange={(e) => this.props.changeSize(e)}>
					<option>Select Size</option>
					<option value="8">8</option>
					<option value="8.5">8 &frac12;</option>
					<option value="9">9</option>
					<option value="9.5">9 &frac12;</option>
					<option value="10">10</option>
					<option value="10.5">10 &frac12;</option>
					<option value="11">11</option>
					<option value="11.5">11 &frac12;</option>
					<option value="12">12</option>
					<option value="12.5">12 &frac12;</option>
					<option value="13">13</option>
					<option value="13.5">13 &frac12;</option>
					<option value="14">14</option>
					<option value="14.5">14 &frac12;</option>
					<option value="15">15</option>
					<option value="15.5">15 &frac12;</option>
					<option value="16">16</option>
				</select>
			</div>
		)
	}
}

export default SizeSelector
