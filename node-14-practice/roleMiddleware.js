export function authoriseRole(requiredRole) {
  return (req, res, next) => {
    if (req.user.role !== requiredRole) {
      return res
        .status(403)
        .json({ message: "You don`t have access to this resourse" });
    }
    next();
  };
}
