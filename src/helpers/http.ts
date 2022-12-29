export const ok = (data) => {
  return {
    status: 200,
    body: data,
  };
};

export const badRequest = (error) => {
  return {
    status: 400,
    body: error,
  };
};
