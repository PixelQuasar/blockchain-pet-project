import { RouterProvider } from "react-router-dom";
import router from "./components/router.tsx";
import { ContactsContextProvider } from "./context/contracts-context.tsx";

function App() {
    return (
        <ContactsContextProvider>
            <RouterProvider router={router} />
        </ContactsContextProvider>
    );
}

export default App;
