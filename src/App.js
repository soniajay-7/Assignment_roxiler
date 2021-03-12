import { useEffect, useState } from "react";
import data from "./data";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./App.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 400,
    minHeight: 300,
  },
});
function App() {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const [loading, setLaoding] = useState(true);
  const [product2, setProduct2] = useState(data);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const getData1 = async () => {
      const response1 = await fetch(
        "http://jsonplaceholder.typicode.com/users"
      );
      const data1 = await response1.json();
      setProduct(data1);
      setProduct2(data);
      setLaoding(false);
    };
    getData1();
  }, []);
  if (loading) {
    return (
      <div>
        <h1>loading.....</h1>
      </div>
    );
  }
  const { name, email, id } = product[value];
  return (
    <>
      <section className="section">
        <div className="title">
          <h2>Assignment</h2>
          <div className="underline"></div>
        </div>
      </section>
      <div className="container">
        <div className="first">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Todo Id</StyledTableCell>
                  <StyledTableCell align="right">Title</StyledTableCell>

                  <StyledTableCell align="right">Status&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">Action&nbsp;</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {product2.map((item) => (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell component="th" scope="row">
                      {item.id}
                    </StyledTableCell>

                    <StyledTableCell align="right">
                      {item.title}
                    </StyledTableCell>

                    <StyledTableCell align="right">
                      {item.completed ? "Completed" : "Incomplete"}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <button onClick={() => setValue(item.id - 1)}>
                        {item.button}
                      </button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="second">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    ToDo ID
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {id}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    ToDo Title
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {product2[value].title}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    UserID
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {id}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Name
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {name}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Email
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {email}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default App;
