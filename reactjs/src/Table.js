import React from 'react';
import { Table } from 'reactstrap';

const Tabel = (props) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Email</th>
          <th>Telp</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Faundra Akbar</td>
          <td>faundraakbar@gmail.com</td>
          <td>0882123123</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Matthew Bellamy</td>
          <td>matt@gmail.com</td>
          <td>0123341284</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Dominic Howard</td>
          <td>dom@gmail.com</td>
          <td>2298323192</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tabel;