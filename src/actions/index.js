export const submitIdea = (title, body) => {
  return {
    type: "SUBMIT_IDEA",
    payload: {
      title: title,
      body: body
    }
  };
};
