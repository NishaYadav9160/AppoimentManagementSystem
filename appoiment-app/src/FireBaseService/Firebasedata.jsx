import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Grid, GridColumn, GridRow, Header, Input, Segment, Table } from 'semantic-ui-react'
import firebase from 'firebase'
const Firebasedata = () => {
    const [hospitalname, setHospitalname] = useState("")
    const [hospitaladd, setHospitaladd] = useState("")
    const [depart, setDepartName] = useState("")
    const [drname, setHospitaldrname] = useState("")
    const [appoimentDate, setAppoimentDate] = useState("")
    const [user1, setUser1] = useState([])
    const [userid,setUserId]= useState([])
    useEffect(() => {
        const firestore = firebase.database().ref("/UserData")
        firestore.on('value', (res) => {
            const data = res.val();
            let userdata = [];
            for (let id in data) {
                userdata.push({
                    id: id,
                    Hname: data[id].hospitalname,
                    Hadd: data[id].hospitaladd,
                    depart: data[id].depart,
                    Dname: data[id].drname,
                    Adate: data[id].appoimentDate
                })

            }
            setUser1(userdata);
        })
    })
    const handleAdduser = (e) => {

        const firestore = firebase.database().ref("/UserData")
        let data = {
            Hname: hospitalname,
            Hadd: hospitaladd,
            depart: depart,
            Dname: drname,
            Adate: appoimentDate
        };
        firestore.push(data);
    };
    const handleUpdate = (data) =>{
        setHospitalname(data.hospitalname);
        setHospitaladd (data.hospitaladd);
        setDepartName(data.depart);
        setHospitaldrname(data.drname);
        setAppoimentDate(data.appoimentDate);
        setUserId(data.id);
    }
    const handledelete = (id) =>{
        const firestore = firebase.database().ref("/UserData").child(id);
        firestore.remove();
        
    }
    return (


        <div style={{ margin: "15px" }}>

            <Container>
                <Grid>
                    <Grid.Row columns="2">
                        <Grid.Column>
                            <Segment>
                                <Form>
                                    <Form.Field>
                                        <label>Hospital Name:</label>
                                        <Input placeholder="Enter Hospital Name" focus name="hospitalname" value={hospitalname} onChange={(e) => {
                                            setHospitalname(e.target.value);
                                        }}

                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Hospital addres:</label>
                                        <Input placeholder="Enter Hospital addres" focus name="hospitaladd" value={hospitaladd} onChange={(e) => {
                                            setHospitaladd(e.target.value);
                                        }} />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Department Name:</label>
                                        <Input placeholder="Enter Department Name" focus name="depart" value={depart} onChange={(e) => {
                                            setDepartName(e.target.value);
                                        }} />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Dr Name:</label>
                                        <Input placeholder="Enter DR. Name" focus name="drname" value={drname} onChange={(e) => {
                                            setHospitaldrname(e.target.value);
                                        }} />
                                    </Form.Field>
                                    <Form.Field>
                             <label>Appoinment Date:</label>
                             <Input placeholder="Enter Appoinment Date" focus name="appoimentDate" value={appoimentDate} onChange={(e) =>{
                              setAppoimentDate(e.target.value);
                             }}/>
                             </Form.Field> 
                                    <Form.Field>
                                        <Button onClick={(e) => { handleAdduser(e) }}>Add Appoiment</Button>
                                    </Form.Field>

                                </Form>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            Edit User
                        </Grid.Column>
                    </Grid.Row>
                    <GridRow columns="1">
                        <GridColumn>
                          {user1.length === 0 ?(
                              <Segment>
                                  <Header>
                                      Oops! There is no data aviable. Please Enter some data..
                                  </Header>
                              </Segment>
                              ):(
                                  <Segment>
                                      <Table>
                                          <Table.Header>
                                              <Table.Row>
                                                  <Table.HeaderCell>
                                                      Hospital Name
                                                  </Table.HeaderCell>
                                                  <Table.HeaderCell>
                                                      Hospital Address
                                                  </Table.HeaderCell>
                                                  <Table.HeaderCell>
                                                      Department Name
                                                  </Table.HeaderCell>
                                                  <Table.HeaderCell>
                                                      Dr Name
                                                  </Table.HeaderCell>
                                                  <Table.HeaderCell>
                                                      Appoiment Date
                                                  </Table.HeaderCell>
                                                  <Table.HeaderCell>
                                                      Uadate
                                                  </Table.HeaderCell>
                                                  <Table.HeaderCell>
                                                      Delete
                                                  </Table.HeaderCell>
                                              </Table.Row>
                                          </Table.Header>
                                          {
                                              user1.map((data,index)=>{
                                                  return(
                                                      <Table.Body>
                                                           <Table.Cell>
                                                       {data.hospitalname}
                                                   </Table.Cell>
<Table.Cell>
                                                       {data.hospitalname}
                                                   </Table.Cell>
                                                   <Table.Cell>
                                                       {data.hospitaladd}
                                                   </Table.Cell>
                                                   <Table.Cell>
                                                       {data.depart}
                                                   </Table.Cell>
                                                   <Table.Cell>
                                                       {data.drname}
                                                   </Table.Cell>
                                                   <Table.Cell>
                                                       {data.appoimentDate}
                                                   </Table.Cell>

                                                   <Table.Cell>
                                                       <Button primary onClick={()=>{handleUpdate()}}>
                                                           
                                                              Edit
                                                       </Button>
                                                   </Table.Cell>
                                                   <Table.Cell>
                                                   <Button onClick={(e) => { handledelete(e) }}>
                                                           
                                                    Delete
                                                    </Button>
                                                   </Table.Cell>
                                                      </Table.Body>
                                                  )
                                              })
                                          }
                                          
                                      </Table>
                                  </Segment>
                          )}
                        </GridColumn>
                    </GridRow>

                </Grid>
            </Container>

        </div>
    )
}
export default Firebasedata;