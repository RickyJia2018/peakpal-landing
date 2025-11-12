// src/lib/peakpalClient.ts
import { PeakPalClient } from '../pb/Service_peakpalServiceClientPb';
import { Request, UnaryResponse, ClientReadableStream } from 'grpc-web'; // Import Request type

const peakPalClient = new PeakPalClient(
  "http://localhost:8000",
  null,
  {
    unaryInterceptors: [
      {
        intercept: <REQ, RESP>(request: Request<REQ, RESP>, invoker: (request: Request<REQ, RESP>) => Promise<UnaryResponse<REQ, RESP>>) => {
          const token = localStorage.getItem('accessToken'); // Use 'accessToken'
          if (token) {
            request.getMetadata().Authorization = `Bearer ${token}`;
            console.log('Access token found and added to request metadata.'); // Update log message
          } else {
            console.log('Access token not found in localStorage.'); // Update log message
          }
          return invoker(request);
        },
      },
    ],
    streamInterceptors: [
      {
        intercept: <REQ, RESP>(request: Request<REQ, RESP>, invoker: (request: Request<REQ, RESP>) => ClientReadableStream<RESP>) => {
          const token = localStorage.getItem('accessToken'); // Use 'accessToken'
          if (token) {
            request.getMetadata().Authorization = `Bearer ${token}`;
            console.log('Access token found and added to request metadata.'); // Update log message
          } else {
            console.log('Access token not found in localStorage.'); // Update log message
          }
          return invoker(request);
        },
      },
    ],
  }
);

export default peakPalClient;