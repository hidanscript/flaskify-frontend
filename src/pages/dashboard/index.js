import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from '../../components/dashboard/navbar';
import SidebarButton from '../../components/dashboard/sidebar/button';

function Dashboard() {
  return (
    <>
      <Navigation />
      <Container className="dashboard-screen" fluid>
        <Row>
          <Col className="dashboard-sidebar">
            <div className="dashboard-user-company">
              <span className="text-white m-2">Heka</span>
            </div>
            <SidebarButton title="Home" faIcon="fas fa-home" />
            <SidebarButton title="Analytics" faIcon="fas fa-chart-pie" />
            <SidebarButton title="Products" faIcon="fas fa-box" />
            <SidebarButton title="Settings" faIcon="fas fa-cog" />
          </Col>
          <Col xs={10}></Col>
        </Row>
      </Container>
    </>
  )
}

export default Dashboard;
