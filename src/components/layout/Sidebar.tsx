import { NavLink } from "react-router-dom"

export default function Sidebar() {
    return (
        <aside className="w-64 bg-white shadow-md p-4">
            <h1 className="text-xl font-bold mb-6">MyApp</h1>

            <nav className="flex flex-col gap-2">
                <NavLink to="/" className="hover:text-blue-600">Dashboard</NavLink>
                <NavLink to="/users" className="hover:text-blue-600">Usuarios</NavLink>
            </nav>
        </aside>
    )
}
