import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./components/router.tsx";
import { ContactsContextProvider } from "./context/contracts-context.tsx";

function App() {
    return (
        <React.StrictMode>
            <ContactsContextProvider>
                <RouterProvider router={router} />
            </ContactsContextProvider>
        </React.StrictMode>
    );
}

export default App;
