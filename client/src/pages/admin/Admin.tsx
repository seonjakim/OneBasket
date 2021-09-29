import React from 'react';
import { Box, Table, Text } from 'gestalt';

const TableContent = ({ content }) => {
  const { _id, type, name, address, duration, gender, plan, reason, birthday } =
    content;
  return (
    <Table.RowExpandable
      id="row"
      accessibilityExpandLabel="Expand"
      accessibilityCollapseLabel="Collapse"
      expandedContents={
        <div>
          <h6>Plan</h6>
          <span>{plan}</span>
          <h6>Reason</h6>
          <span>{reason}</span>
          <h6>Birthday</h6>
          <span>{birthday}</span>
        </div>
      }
    >
      <Table.Cell>
        <Text>{_id}</Text>
      </Table.Cell>
      <Table.Cell>
        <Text>{type}</Text>
      </Table.Cell>
      <Table.Cell>
        <Text>{name}</Text>
      </Table.Cell>
      <Table.Cell>
        <Text>{address}</Text>
      </Table.Cell>
      <Table.Cell>
        <Text>{duration}</Text>
      </Table.Cell>
      <Table.Cell>
        <Text>{gender}</Text>
      </Table.Cell>
    </Table.RowExpandable>
  );
};

const Admin = () => {
  const menu = ['', 'id', 'Type', 'Name', 'Address', 'Duration', 'Gender'];

  const [tableData, setTableData] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:4000/admin', { method: 'GET' })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTableData(data);
      })
      .catch(console.error);
  }, []);
  const tableMenu = menu.map((el, idx) => (
    <Table.HeaderCell key={idx}>
      <Text weight="bold">{el}</Text>
    </Table.HeaderCell>
  ));

  const filteredTableContents = (data, id) => {
    return data
      .filter((el) => el.type === id)
      .map((el, idx) => <TableContent key={idx} content={el} />);
  };
  const parentTableContents = filteredTableContents(tableData, 'GodParent');
  const childTableContents = filteredTableContents(tableData, 'GodChild');

  return (
    <div>
      <form>
        <h3>Match</h3>
        <span>GodParent : </span>
        <input type="text" />
        <span>GodChild : </span>
        <input type="text" />
        <input type="submit" value="Update" />
      </form>
      <h3>GodParent</h3>
      <Box padding={4} overflow="auto" width="100%" height="35vh">
        <Table>
          <Table.Header>
            <Table.Row>{tableMenu}</Table.Row>
          </Table.Header>
          <Table.Body>{parentTableContents}</Table.Body>
        </Table>
      </Box>
      <h3>GodChild</h3>
      <Box padding={4} overflow="auto" width="100%" height="35vh">
        <Table>
          <Table.Header>
            <Table.Row>{tableMenu}</Table.Row>
          </Table.Header>
          <Table.Body>{childTableContents}</Table.Body>
        </Table>
      </Box>
    </div>
  );
};

export default Admin;
