import { Suspense, lazy } from "react";

const ProfileReadme = lazy(() => import("./pages/ProfileReadme.jsx"));

const App = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <ProfileReadme />
            </Suspense>
        </div>
    );
};

export default App;
