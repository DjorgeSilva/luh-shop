export const getInputLabel = (name: string): string => {
  let label = name;
  if (label === "name") {
    label = "Nome";
  }
  if (label === "password") {
    label = "Senha";
  }
  if (label === "confirmPassword") {
    label = "Confirmar senha";
  }
  return label;
};

export const getInputIcon = (name: string): any => {
  let icon = "mail-outline";
  if (name === "name") {
    icon = "person-circle-outline";
  }
  if (name === "email") {
    icon = "mail-outline";
  }
  if (name === "password") {
    icon = "lock-closed-outline";
  }
  if (name === "confirmPassword") {
    icon = "lock-open-outline";
  }
  return icon;
};
