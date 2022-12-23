export const fieldWithValue = (
  field: string,
  values: Record<string, string>
) => {
  return field.replace(/{{([^{}]*)}}/g, (match, key) => values[key] || match);
};
