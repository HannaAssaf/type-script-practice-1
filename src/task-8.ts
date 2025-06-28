enum Role {
  Admin = "admin",
  User = "user",
  Guest = "guest",
}

const getPermissions = (role: Role): string[] => {
  if (role === Role.Admin) return ["create", "read", "update", "delete"];
  if (role === Role.User) return ["read", "update"];
  return ["read"];
};

getPermissions(Role.User);
