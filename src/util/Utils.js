
export const stringToColor = (string) => {
  let hash = 0;
  let i;
  let color = '#';

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
};

export const stringAvatar = (name, size) => {
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: size,
      height: size,
      fontSize: size / 2
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}
