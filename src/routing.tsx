import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

const { Header, Footer, Content } = Layout;

function RouteHandler(): JSX.Element {
  return (
    <Layout>
      <Header className="hidden sm:flex sticky top-0 w-full">
        Header
      </Header>
      <Content>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/projects"} element={<ProjectsPage />} />
          <Route path={"/contact"} element={<ContactPage />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </Content>
      <Footer className="flex sm:hidden sticky bottom-0 w-full">
        Footer
      </Footer>
    </Layout>
  );
}

export default RouteHandler;

