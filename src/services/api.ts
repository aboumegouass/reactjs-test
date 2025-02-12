type APITypes = {
  setItems: (data: ItemType[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (errorMessage: string) => void;
};
export const fetchItems = async ({
  setItems,
  setLoading,
  setError,
}: APITypes) => {
  setLoading(true);
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    setItems(data);
  } catch (error) {
    let errorMessage = "An unknown error occurred";

    if (error instanceof Error) {
      errorMessage = error.message;
    }
    setError(errorMessage);
  } finally {
    setLoading(false);
  }
};
