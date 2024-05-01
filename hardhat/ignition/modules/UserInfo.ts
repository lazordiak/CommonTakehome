import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const UserInfoModule = buildModule("UserInfoModule", (m) => {
  const lock = m.contract("UserInfo");

  return { lock };
});

export default UserInfoModule;
