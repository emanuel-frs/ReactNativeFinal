import { useContext } from "react";
import DrawerComponent from "./drawer";
import StackComponentPublico from "./stackPublico";
import { UserContext, UserContextType } from "../contexts/UserContext";

export default function Routes() {
    const { estaLogado } = useContext(UserContext) as UserContextType;

    return (
        <>{estaLogado ? <DrawerComponent /> : <StackComponentPublico />}</>
    )
}
