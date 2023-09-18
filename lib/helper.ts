export const validateString = (value: unknown, maxLength: number) => {
  return !(!value || typeof value !== "string" || value.length > maxLength);
};

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error?.message;
  } else if (error && typeof error === "object" && "message" in error) {
    String(error.message);
  }
  return "Something Went Wrong";
};
