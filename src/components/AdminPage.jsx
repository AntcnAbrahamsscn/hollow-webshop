import "../stylesheets/admin-page.css"
import ShopContainer from './ShopContainer'
import AdminHeader from './AdminHeader'
import React, { useEffect, useState } from "react";


export default function AdminPage() {
  const [showButtons, setShowButtons] = useState(true);

  return (
      <section id='admin'>
        <AdminHeader />
        <ShopContainer showButtons={showButtons} />
      </section>
  )
}
