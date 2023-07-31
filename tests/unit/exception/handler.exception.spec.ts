import { Request, Response } from "express";
import HandlerException from "@exception/handler.exception";
import CustomException from "@exception/custom.exception";
import ErrorResponseBuilder from "@common/builder/error-response.builder";

describe("01. Unit : HandlerException", () => {
  // Mock Express Request and Response objects
  const mockRequest = {} as Request;
  const mockResponse = {
    status: jest.fn(() => mockResponse),
    send: jest.fn(),
  } as unknown as Response;

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("01. Trusted Errors", () => {
    it("01. should handle trusted errors and send error response", () => {
      // Create a trusted error for testing

      const trustedError = new CustomException({
        errorCode: 404,
        errorName: "TRUSTED_ERROR",
        errorMessage: "Message of TrustedError",
      });

      // Call the HandlerException constructor
      new HandlerException(trustedError, mockRequest, mockResponse);

      // Assert that the error response is sent with the correct data
      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockResponse.send).toHaveBeenCalledWith(
        ErrorResponseBuilder({
          statusCode: 404,
          payload: {
            errorCode: 404,
            errorName: "TRUSTED_ERROR",
            errorMessage: "Message of TrustedError",
          },
        }),
      );
    });
  });

  describe("02. Untrusted Errors", () => {
    it("01. should handle untrusted errors and send error response", () => {
      // Create an untrusted error for testing
      const untrustedError = new Error("Untrusted Error");

      // Call the HandlerException constructor
      new HandlerException(untrustedError, mockRequest, mockResponse);

      // Assert that the error response is sent with the correct data
      expect(mockResponse.status).toHaveBeenCalledWith(500); // Internal Server Error
      expect(mockResponse.send).toHaveBeenCalledWith(
        ErrorResponseBuilder({
          statusCode: 500,
          payload: {
            errorCode: 500,
            errorName: "INTERNAL_SERVER_ERROR",
            errorMessage:
              "A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.",
            errorRawMessage: "Untrusted Error",
          },
        }),
      );
    });
  });
});
