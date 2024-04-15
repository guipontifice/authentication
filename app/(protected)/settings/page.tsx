import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = async () => {
    const user = useCurrentUser();

    const onClick = () => {
        console.log(user)
        logout();
    }
    return (
        <div className="bg-white p-10 rounded-xl">
            <button onClick={onClick} type="submit">
                Sign Out
            </button>
        </div>
    );
}
export default SettingsPage;