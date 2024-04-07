import React from 'react';
import { Outlet, useLocation } from '@remix-run/react';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';
import { HomePage } from "../routes/home";

export function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
      <Header />
        {isHomePage && <HomePage />}
        <Outlet />
      <Footer />
    </>
  );
}



