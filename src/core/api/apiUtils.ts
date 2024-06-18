const baseUrl = import.meta.env.VITE_DOGSCEO_BASE_URL;

const baseFetch = async (path: string, init?: RequestInit): Promise<any> => {
  const response = await fetch(`${baseUrl}${path}`, init);
  return response.ok
    ? response.json()
    : Promise.reject(
        `Request failed with status: ${response.status} ${response.statusText}`
      );
};

export { baseFetch };
