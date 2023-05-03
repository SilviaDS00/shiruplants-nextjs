import { ENV } from "@/utils";

export class User {
  async getMe() {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`;

      const params = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjgzMTQ1NDgyLCJleHAiOjE2ODU3Mzc0ODJ9.mQgKQGnmNZPJoBeLbcE9s4OqQU07MUHxzevFtl6Koto",
        },
      };
      const response = await fetch(url, params);
      const result = await response.json();
      if (response.status !== 200) {
        throw result;
      }
      return result;
    } catch (error) {
      console.error(error);
    }
  }
}
