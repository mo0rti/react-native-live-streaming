import AppException from "@lib/exceptions/app-exception";

class DbException extends AppException {
  constructor(message) {
    super(message);
    this.name = "Db Exception";
  }
}

export default DbException;