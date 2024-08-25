interface Patient {
  picture: string;
  gender: string;
  age: number;
  name: string;
}

const mockPatients: Patient[] = [
  {
    picture: "https://randomuser.me/api/portraits/men/1.jpg",
    gender: "male",
    age: 30,
    name: "John Doe",
  },
  {
    picture: "https://randomuser.me/api/portraits/women/1.jpg",
    gender: "female",
    age: 25,
    name: "Jane Smith",
  },
  {
    picture: "https://randomuser.me/api/portraits/men/2.jpg",
    gender: "male",
    age: 30,
    name: "John Doe",
  },
  {
    picture: "https://randomuser.me/api/portraits/women/2.jpg",
    gender: "female",
    age: 25,
    name: "Jane Smith",
  },
  {
    picture: "https://randomuser.me/api/portraits/men/3.jpg",
    gender: "male",
    age: 30,
    name: "John Doe",
  },
  {
    picture: "https://randomuser.me/api/portraits/women/3.jpg",
    gender: "female",
    age: 25,
    name: "Jane Smith",
  },
  {
    picture: "https://randomuser.me/api/portraits/men/4.jpg",
    gender: "male",
    age: 30,
    name: "John Doe",
  },
  {
    picture: "https://randomuser.me/api/portraits/women/4.jpg",
    gender: "female",
    age: 25,
    name: "Jane Smith",
  },
  {
    picture: "https://randomuser.me/api/portraits/men/5.jpg",
    gender: "male",
    age: 30,
    name: "John Doe",
  },
  {
    picture: "https://randomuser.me/api/portraits/women/5.jpg",
    gender: "female",
    age: 25,
    name: "Jane Smith",
  },
  {
    picture: "https://randomuser.me/api/portraits/men/6.jpg",
    gender: "male",
    age: 30,
    name: "John Doe",
  },
  {
    picture: "https://randomuser.me/api/portraits/women/6.jpg",
    gender: "female",
    age: 25,
    name: "Jane Smith",
  },
  {
    picture: "https://randomuser.me/api/portraits/men/7.jpg",
    gender: "male",
    age: 30,
    name: "John Doe",
  },
  {
    picture: "https://randomuser.me/api/portraits/women/7.jpg",
    gender: "female",
    age: 25,
    name: "Jane Smith",
  },
  {
    picture: "https://randomuser.me/api/portraits/men/8.jpg",
    gender: "male",
    age: 30,
    name: "John Doe",
  },
  {
    picture: "https://randomuser.me/api/portraits/women/8.jpg",
    gender: "female",
    age: 25,
    name: "Jane Smith",
  },
  {
    picture: "https://randomuser.me/api/portraits/men/9.jpg",
    gender: "male",
    age: 30,
    name: "John Doe",
  },
  {
    picture: "https://randomuser.me/api/portraits/women/9.jpg",
    gender: "female",
    age: 25,
    name: "Jane Smith",
  },
  {
    picture: "https://randomuser.me/api/portraits/men/10.jpg",
    gender: "male",
    age: 30,
    name: "John Doe",
  },
  {
    picture: "https://randomuser.me/api/portraits/women/10.jpg",
    gender: "female",
    age: 25,
    name: "Jane Smith",
  },
];

export const fetchPatients = async (): Promise<Patient[]> => {
  return new Promise((resolve) => {
    const timeoutId = setTimeout(() => {
      resolve(mockPatients);
    }, 3000);

    return () => clearTimeout(timeoutId);
  });
};
