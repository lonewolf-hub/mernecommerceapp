import AdminOrders from "../features/admin/components/AdminOrders";
import Footer from "../features/common/Footer";
import NavBar from "../features/navbar/Navbar";

function AdminOrdersPage() {
    return ( 
        <div>
            <NavBar>
                <AdminOrders></AdminOrders>
            </NavBar>
            <Footer></Footer>
        </div>
     );
}

export default AdminOrdersPage;