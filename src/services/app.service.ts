import axios, { AxiosInstance } from "axios";
const BACKEND_SERVICE_HOST = process.env.REACT_APP_BACKEND_SERVICE_HOST;

export class AppService {
  private axiosInstnace: AxiosInstance;
  constructor() {
    this.axiosInstnace = axios.create({
      baseURL: `${BACKEND_SERVICE_HOST}`,
      withCredentials: true, // Set this to true to send cookies with the request
    });
  }

  public callGoogleLoginAPI(): string {
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const redirect_uri = `${BACKEND_SERVICE_HOST}/auth/google/callback`;
    return `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&response_type=code&state=google_login&scope=profile+email+openid&redirect_uri=${redirect_uri}`;
  }

  public async callUserMeAPI() {
    try {
      let response = await this.axiosInstnace({
        url: `${BACKEND_SERVICE_HOST}/users/me`,
        method: "GET",
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
