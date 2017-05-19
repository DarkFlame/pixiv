export function wrapBody(error,data) {
  let status = {code: 'E0'};
  if (error) {
    status = {
      code: error.code ? error.code : 'E300',
      message: error.message
    };
    return {
      status: status
    };
  }
  return {
    data: data,
    status: status
  };
}
