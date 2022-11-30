import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const Header = styled.header`
  display: flex;
  background-color: gray;
  padding: 10px;
`

function Layout () {
  return (
    <>
      <Header>
        <Link to="/">Home</Link>
        <SearchBar />
      </Header>
      <main>
        <Suspense fallback={'Loading...'}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default Layout;