import { userByName, usersByName } from "./utils/users";

const ghClient = {};

ghClient.getUserByName = userByName;
ghClient.getUsersByName = usersByName;

export default ghClient;