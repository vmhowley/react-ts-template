import { createBrowserRouter } from "react-router-dom"
import AppLayout from "@/components/layout/AppLayout"
import Dashboard from "@/features/dashboard/pages/Dashboard"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { index: true, element: <Dashboard /> },
        ],
    },
])
