import { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import routers from '@/routers/routers';
import { SideBarProvider } from '@/contexts/SideBarprovider';
import SideBar from '@components/SideBar/SideBar';
import { ToastProvider } from '@/contexts/ToastProvider';

function App() {
    return (
        <ToastProvider>
            <SideBarProvider>
                <SideBar />
                <BrowserRouter>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            {routers.map((route, index) => {
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={<route.component />}
                                    />
                                );
                            })}
                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </SideBarProvider>
        </ToastProvider>
    );
}

export default App;
