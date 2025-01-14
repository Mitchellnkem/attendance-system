import React, { useState } from 'react'
import Swal from 'sweetalert2'


import Header from './Header'
import List from './List'
import Add from './Add'
import Edit from './Edit'

import { studentsData } from '../data';

function Page() {
 
	
	
	const [students, setStudents] = useState(studentsData);
	const [selectedStudent, setSelectedStudent] = useState(null)
	const [IsAdding, setIsAdding] = useState (false)
	const [isEditing, setIsEditing] = useState (false)


	const handleEdit = (id) => {
		const [student] = students.filter(student => student.id === id)

		setSelectedStudent(student);
		setIsEditing(true);
	}


	const handleDelete = (id) => {
		Swal.fire({
			icon: 'warning',
			title: 'Are you sure?',
			text: "You won't be able to reverese this!!",
			showCancelButton: true,
			confirmButtonText: 'Yes, delete it!!',
			cancelButtonText: 'No, cancel!!!',
		}).then(result => {
			if (result.value){
				const [student] = students.filter(student => student.id === id)


				Swal.fire({
					icon: 'success',
					title: 'Deleted!!',
					text: `${student.name} has been deleted!!`,
					showConfirmButton: false,
					timer: 1500,
				});

				setStudents(students.filter(student => student.id !== id));
			}
		});
	}



	
	return (
	<div className='container'> 

		{/* List */}
		{!IsAdding && !isEditing && (
			<>
				<Header 
					setIsAdding={setIsAdding}
				/>
				<List 
					students={students}
					handleEdit={handleEdit}
					handleDelete={handleDelete}
				/>

			</>
		)}


		{/* Add */}
		{IsAdding && (
			<Add 
				students={students}
				setStudents={setStudents}
				setIsAdding={setIsAdding}
			/>
		)}


		{/* Edit */}
		{isEditing && (
			<Edit 
				students={students}
				selectedStudent={selectedStudent}
				setStudents={setStudents}
				setIsEditing={setIsEditing}
			/>
		)}

	  
	</div>
  )
}

export default Page
