import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from '../../components/dashboard/navbar';
import SidebarButton from '../../components/dashboard/sidebar/button';
import ProductInfo from '../../components/dashboard/product-info';

import {
  PieChart, Pie, Legend, Tooltip,
} from 'recharts';

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
          <Col className="dashboard-main-view" xs={10}>
            <div className="dashboard-main-view-container">
              <ProductInfo title="Productos entregados" sort="últimos 30 días" />
              <ProductInfo title="Productos pendientes" variant="product-warning" sort="últimos 30 días" />
              <ProductInfo title="Productos sin entregar" variant="product-danger" sort="últimos 30 días" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Dashboard;
