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
          <Col className="dashboard-main-view" xs={10}>
            <div className="product-info">
              <div className="product-info-title-container">
                <h4 className="text-white product-info__title">Productos entregados</h4>
                <span className="text-white text-muted">últimos 30 dias</span>
              </div>
              <h3 className="text-white">0</h3>
              <svg className="product-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff" fill-opacity="1" d="M0,32L60,74.7C120,117,240,203,360,229.3C480,256,600,224,720,192C840,160,960,128,1080,122.7C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
              </svg>
            </div>
            <div className="product-info product-warning">
              <div className="product-info-title-container">
                <h4 className="text-white product-info__title">Productos pendientes</h4>
                <span className="text-white text-muted">últimos 30 dias</span>
              </div>
              <h3 className="text-white">0</h3>
              <svg className="product-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff" fill-opacity="1" d="M0,32L60,74.7C120,117,240,203,360,229.3C480,256,600,224,720,192C840,160,960,128,1080,122.7C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
              </svg>
            </div>
            <div className="product-info product-danger">
              <div className="product-info-title-container">
                <h4 className="text-white product-info__title">Productos sin entregar</h4>
                <span className="text-white text-muted">últimos 30 dias</span>
              </div>
              <h3 className="text-white">0</h3>
              <svg className="product-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff" fill-opacity="1" d="M0,32L60,74.7C120,117,240,203,360,229.3C480,256,600,224,720,192C840,160,960,128,1080,122.7C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
              </svg>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Dashboard;
