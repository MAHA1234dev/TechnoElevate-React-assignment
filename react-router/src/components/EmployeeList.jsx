import React from 'react'

export default function EmployeeList() {
    return (
        <div>
            <h1>Employee List</h1>
            <table border rules="all" cellPadding="20px">
            <tr >
                <th>Employee Id</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Salary</th>
            </tr>
            <tr>
                <td>TY01</td>
                <td>Mahadev</td>
                <td>Developer</td>
                <td>50000</td>
            </tr>
            <tr>
                <td>TY02</td>
                <td>Arun</td>
                <td>tester</td>
                <td>50400</td>
            </tr>
            <tr>
                <td>TY03</td>
                <td>vijay</td>
                <td>HR</td>
                <td>60000</td>
            </tr>
            <tr>
                <td>TY04</td>
                <td>Kiran</td>
                <td>MGR</td>
                <td>100000</td>
            </tr>
           
            </table>
            
           
        </div>
    )
}


