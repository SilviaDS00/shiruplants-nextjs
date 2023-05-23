import { ENV } from "@/utils";

export class Product {
  async getLastProduct() {
    try {
      const sort = "sort=publishedAt:desc";
      const pagination = "pagination[limit]=1";
      const populate = "populate=*";

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}?${sort}&${pagination}&${populate}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getLatestPublished({ limit = 9, categoryId = null }) {
    try {
      const filterCategory =
        categoryId && `filters[category][id][$eq]=${categoryId}`;
      const paginationLimit = `pagination[limit]=${limit}`;
      const sort = `sort=productId:asc`;
      const populate = `populate=*`;

      const urlParams = `${sort}&${paginationLimit}&${filterCategory}&${populate}`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}?${urlParams}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      console.error(error);
    }
  }
  async getProductByCategory(slug, page) {
    try {
      const filters = `filters[category][slug][$eq]=${slug}`;
      const pagination = `pagination[page]=${page}&pagination[pageSize]=9`;
      const populate = "populate=*";

      const urlParams = `${filters}&${pagination}&${populate}`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}?${urlParams}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getProductBySlug(slug) {
    try {
      const filters = `filters[slug][$eq]=${slug}`;
      const populate = "populate=*";

      const urlParams = `${filters}&${populate}`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}?${urlParams}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result.data[0];
    } catch (error) {
      throw error;
    }
  }

  async searchProducts(text, page) {
    try {
      const filters = `filters[title][$contains]=${text}`;
      const pagination = `pagination[page]=${page}&pagination[pageSize]=9`;
      const populate = `populate=*`;

      const urlParams = `${filters}&${pagination}&${populate}`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}?${urlParams}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      console.error(error);
    }
  }

  async getProductById(id) {
    try {
      const populate = `populate[0]=image&populate[1]=category`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}/${id}?${populate}`;
      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
