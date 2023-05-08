import { ENV } from "@/utils";

export class Category {
  async getAll() {
    try {
      const sort = "sort=order:asc";
      const populate = "populate=image";
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CATEGORIES}?${populate}&${sort}`;
      const response = await fetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }
  async getBySlug(slug) {
    try {
      const filters = `filters[slug][$eq]=${slug}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CATEGORIES}?${filters}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result.data[0];
    } catch (error) {
      throw error;
    }
  }
}
