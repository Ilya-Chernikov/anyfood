import { useSelector } from "react-redux";
import { selectUserById } from "../../store/entities/user/selectors";
import { User } from "../../components/User/User";

export const UserContainer = ({ id, className }) => {
  const user = useSelector((state) => selectUserById(state, { id }));

  if (!user) {
    return null;
  }

  return <User name={user.name} className={className} />;
};
