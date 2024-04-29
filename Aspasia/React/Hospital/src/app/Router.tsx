import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Read from '../pages/Read/Read';
import Create from '../pages/Create/Create';
import UpdateAndDelete from '../pages/UpdateAndDelete/UpdateAndDelete';
import Layout from '../components/Layout/Layout';

const Router = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route index element={<Read />} />
                <Route path="/create" element={<Create />} />
                <Route path="/update/:id" element={<UpdateAndDelete/>} />
                <Route path="/update/*" element={<div>404 User Not Found</div>} />
            </Routes>
        </Layout>
    </BrowserRouter>
);

export default Router;