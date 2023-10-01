import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className=" text-center justify-center">
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;