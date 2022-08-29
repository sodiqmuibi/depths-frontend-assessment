import { NavLink } from "react-router-dom"

const links = [
    {url: "/pasta", text: "Pasta"},
    {url: "/rice", text: "Rice"},
    {url: "/chicken", text: "Chicken"},
    {url: "/cottage", text: "Cottage"}
]
const Links = () => {
    return (
        <div className="flex gap-10 mt-7  items-center border-b border-b-gray-700">
            {links.map(({url, text}) => (
                <NavLink to={url} className={(navData) => navData.isActive ? "text-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)] border-b-2 border-b-red-500 pb-2" : ""}>
                    {text}
                </NavLink>
            ))}
        </div>
    )
}
export default Links