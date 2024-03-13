export interface Character {
  id: number;
  name: string;
  status: string;
  gender: "Male" | "Female" | "unknown";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface BasicResponse<T> {
  info?: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results?: T[];
  error?: string;
}

const fetchData = async (input: string): Promise<BasicResponse<Character>> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${input}`
  );

  const data = await response.json();

  return data;
};

let timeoutId: number | null | undefined = null;

export function search(
  v: string,
  func: (val: Character[]) => void,
  setLoading: (val: boolean) => void
) {
  v = (v || "").trim().toUpperCase();

  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  setLoading(true);
  timeoutId = setTimeout(() => {
    (async () => {
      try {
        const autoCompleteResults = await fetchData(v);
        autoCompleteResults.results && func(autoCompleteResults.results);
        autoCompleteResults.error && func([]);
        setLoading(false);
        return autoCompleteResults;
      } catch (e) {
        setLoading(false);
        func([]);
        throw new Error(String(e));
      }
    })().catch(console.error);
  }, 500);
}
