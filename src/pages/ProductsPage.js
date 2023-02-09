import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Chip, Container, Stack,Typography, ButtonGroup, Button } from '@mui/material';
// components
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar, InitiativeList } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';
import INITIATIVES from '../_mock/initiatives';


// ----------------------------------------------------------------------

export default function ProductsPage() {



  const [kpi, setKpi] = useState(true);
 
  const kpiHandler = () => {
      setKpi(true);
      setInitiative(false);
  };
  const [initiative, setInitiative] = useState(false);
  const initiativeHandler = () => {
      setKpi(false);
      setInitiative(true);
  };



const [overviewactive, setOverviewActive] = useState(false);
const handleOverviewClick = () => {
    setOverviewActive(true);
    setKpiActive(false);
    setInitActive(false);
  };

  const [kpiactive, setKpiActive] = useState(true);
  const handlekpiClick = () => {
    setKpiActive(true);
    setOverviewActive(false);
    setInitActive(false);
  };

  const [initactive, setInitActive] = useState(false);
  const handleinitClick = () => {
    setInitActive(true);
    setKpiActive(false);
    setOverviewActive(false);

  };







const [openFilter, setOpenFilter] = useState(false);
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  
  const handleCloseFilter = () => {
    setOpenFilter(false);
  };




  return (
    <>
      <Helmet>
        <title> QPR Dashboard | Strategy Objective </title>
      </Helmet>
     <Container >
     <ButtonGroup size='large' variant="outlined" aria-label="outlined button group">
      {/* <Button onFocus={handleOverviewClick}
        style={{backgroundColor: overviewactive ? "lightblue" : "white" }} >OVERVIEW</Button> */}
      <Button onClick={kpiHandler} onFocus={handlekpiClick}
       style={{backgroundColor: kpiactive ? "lightblue" : "white" }}>KPIs</Button>
      <Button onClick={initiativeHandler} onFocus={handleinitClick}
       style={{backgroundColor: initactive ? "lightblue" : "white" }}>INITIATIVES</Button>
      
     </ButtonGroup>


     <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
      <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
      
         <Chip label="GOOD" color="success" />
         <Chip label="AVERAGE" color="warning" />
         <Chip label="WEAK" color="error" />
      
        </Stack>
      </Stack>
     </Container>


<Container>

{kpi && ( <Container maxWidth="xl">
      <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <ProductFilterSidebar
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />
          <ProductSort />
        </Stack>
      </Stack>
     <ProductList  products={PRODUCTS} />
     <ProductCartWidget />
</Container>
      )}
      </Container>
      

      <Container>
     
      {initiative && ( <Container maxWidth="xl">
      <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <ProductFilterSidebar
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />
          <ProductSort />
        </Stack>
       
      </Stack>
      <InitiativeList  initiatives={INITIATIVES} />
      <ProductCartWidget />
      </Container>
      )}
    </Container>
    </>
  );
}
