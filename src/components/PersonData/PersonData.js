import React from 'react';
import { Table } from 'react-bootstrap';

const PersonData = ({ personData, loading }) => {
    const renderPersonData = (person, index) => {
        return (
            <tr key={index}>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.company}</td>
                <td>{person.job}</td>
                <td>{person.city}</td>
                <td>{person.phone}</td>
            </tr>
        )

    }


    if (personData.length < 1) {
        return <h2 className="text-center">Loading...</h2>;
    }
    return (
        <Table class="table hover responsive-sm">
            <thead className="table-header">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Company</th>
                    <th>Job</th>
                    <th>City</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    personData.map(renderPersonData)
                }
            </tbody>
        </Table>
    );
};

export default PersonData;