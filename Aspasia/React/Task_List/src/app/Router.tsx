import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Tasks from '../pages/Tasks/Tasks';
import Layout from '../components/Layout/Layout';

const Router = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/tasks" element={<Tasks />} />
            </Routes>
        </Layout>
    </BrowserRouter>
);

export default Router;