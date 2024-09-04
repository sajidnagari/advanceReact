import React from "react";
import Navbar from "@/components/navbar/navbar";
import ProtectedRoute from "@/components/ProtectedRoute";

const NavbarPage = () => {
  return (
    <ProtectedRoute>
      <Navbar />
    </ProtectedRoute>
  );
};

export default NavbarPage;
