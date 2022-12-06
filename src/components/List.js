import React from 'react'
import DataTable from 'react-data-table-component'

function List() {
  //colonnes du tableau
  const columns = [
    {
      name: 'Firstname',
      selector: (row) => row.firstname,
    },
    {
      name: 'Lastname',
      selector: (row) => row.lastname,
    },
    {
      name: 'Start Date',
      selector: (row) => row.startdate,
    },
    {
      name: 'Department',
      selector: (row) => row.department,
    },
    {
      name: 'Date of Birth',
      selector: (row) => row.birthdate,
    },
    {
      name: 'Street',
      selector: (row) => row.street,
    },
    {
      name: 'City',
      selector: (row) => row.city,
    },
    {
      name: 'State',
      selector: (row) => row.state,
    },
    {
      name: 'Zip Code',
      selector: (row) => row.zipcode,
    },
  ]

  // données sur les lignes
  // test données mockées
  const data = [
    {
      id: 1,
      firstname: 'ceciliaTest ',
      lastname: 'bernardTest',
      startdate: '11/24/2022',
      department: 'Marketing',
      birthdate: '21/0/1989',
      street: 'st roch',
      city: 'Eyguieres',
      state: 'Alabam',
      zipcode: '150',
    },
  ]

  //stylisation tableau
  const customStyles = {}

  return (
    <div>
      <DataTable columns={columns} data={data} customStyles={customStyles} />
    </div>
  )
}

export default List