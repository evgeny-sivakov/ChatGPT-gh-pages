import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthenticationPage, {
  action as authAction,
} from "./pages/Authentication";
import ChatPage from "./pages/Chat";
import {action as logoutAction} from "./pages/Logout"; 

const router = createBrowserRouter([
  {
    path: "/ChatGPT-gh-pages",
    children: [
      {
        index: true,
        element: <AuthenticationPage />,
        action: authAction,
      },
      { path: "chat", element: <ChatPage /> },
      { path: "logout", action: logoutAction },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
