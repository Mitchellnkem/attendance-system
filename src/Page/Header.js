import React from 'react'

function Header ({ setIsAdding }) {
  return (
	<header>
		<h1>School Management || Attendance Software/App</h1>
		<div style = {{ marginTop: '30px', marginBottom: '18px' }}>
			<button onClick={() => setIsAdding(true)} classNAme='round-button'>Add Button</button>

		</div>

	  
	</header>
  )
}

export default Header

