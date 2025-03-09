import { BrowserRouter, Route, Routes as RouteWrapper } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import DetailsPage from "./pages/DetailsPage";
import ServicePage from "./pages/ServicePage";

const Routes = () => {
  return (
    <BrowserRouter>
      <RouteWrapper>
        <Route path="/" element={<FirstPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/services" element={<ServicePage />} />
      </RouteWrapper>
    </BrowserRouter>
  );
};

export default Routes;
