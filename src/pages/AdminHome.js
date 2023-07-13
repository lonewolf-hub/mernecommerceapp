import AdminProductList from "../features/admin/components/AdminProductList";
import Footer from "../features/common/Footer";
import NavBar from "../features/navbar/Navbar";

function AdminHome() {
    return ( 
        <div>
            <NavBar>
                <AdminProductList></AdminProductList>
            </NavBar>
            <Footer></Footer>
        </div>
     );
}

export default AdminHome;