export type Actor = {
  id: number;
  name: string;
  gender: number;
  known_for_department: string;
  original_name: string;
};
export type Movie = {
  id: number;
  title: string;
  popularity: number;
  original_language: string;
};

export type SelectedProfile = {
  id: number;
  name: string;
};
