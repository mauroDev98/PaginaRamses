export interface Student {
  id: number;
  name: string;
  major: string;
  grade: number;
}

export const mockDatabase: Student[] = [
  { id: 1, name: "Ana Huerta", major: "Software Engineering", grade: 95 },
  { id: 2, name: "Yadier Gonzalez", major: "Cybersecurity", grade: 88 },
  { id: 3, name: "Rene Trejo", major: "UI/UX Design", grade: 92 },
  { id: 4, name: "Luis Terrazas", major: "Software Engineering", grade: 78 },
  { id: 5, name: "Johan Bertrand", major: "Data Science", grade: 98 },
];
