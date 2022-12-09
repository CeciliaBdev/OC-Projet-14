import React from 'react'
import DataTable from 'react-data-table-component'
import { useSelector } from 'react-redux'

function List() {
  //colonnes du tableau
  const columns = [
    {
      name: 'Firstname',
      selector: (row) => row.firstname,
      sortable: true,
    },
    {
      name: 'Lastname',
      selector: (row) => row.lastname,
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: (row) => row.startdate,
      sortable: true,
    },
    {
      name: 'Department',
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: 'Date of Birth',
      selector: (row) => row.birthdate,
      sortable: true,
    },
    {
      name: 'Street',
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: 'City',
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: 'State',
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: 'Zip Code',
      selector: (row) => row.zipcode,
      sortable: true,
    },
  ]

  // données sur les lignes
  // test données mockées - ok
  // const data = [
  //   {
  //     id: 1,
  //     firstname: 'ceciliaTest ',
  //     lastname: 'bernardTest',
  //     startdate: '11/24/2022',
  //     department: 'Marketing',
  //     birthdate: '21/05/1989',
  //     street: 'st roch',
  //     city: 'Eyguieres',
  //     state: 'Alabam',
  //     zipcode: '150',
  //   },
  // ]

  //stylisation tableau
  // const customStyles = {}

  //selection user dans le reducer
  const userCreated = useSelector((state) => state.user.employeesKnown)

  //input de recherche

  return (
    <div className="w-full px-5">
      <div className="flex justify-end my-5 ">
        <label>Search</label>
        <input type="text" className="border rounded-xl ml-4" />
      </div>

      <DataTable
        columns={columns}
        data={userCreated}
        // customStyles={customStyles}
        striped
        highlightOnHover
        pagination
      />
    </div>
  )
}

export default List
