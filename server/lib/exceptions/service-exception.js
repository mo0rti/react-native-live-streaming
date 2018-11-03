import AppException from "@lib/exceptions/app-exception";

class ServiceException extends AppException {
  constructor(message) {
    super(message);
    this.name = "Service Exception";
  }
}

export default ServiceException;