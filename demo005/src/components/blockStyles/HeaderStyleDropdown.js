// Componente que mostrará un menú desplegable con diferentes opciones de estilo de encabezado h1, h2, h3, h4, h5

import React from "react";

class HeaderStyleDropdown extends React.Component {
	onToggle = event => {
		let value = event.target.value;
		this.props.onToggle(value);
	};

	render() {
		return (
			<select value={this.props.active} onChange={this.onToggle}>
				{this.props.headerOptions.map(heading => {
					return <option key={heading.style} value={heading.style}>{heading.label}</option>;
				})}
			</select>
		);
	}
}

export default HeaderStyleDropdown;
