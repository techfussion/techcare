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
      name: "John Doe"
    },
    {
      picture: "https://randomuser.me/api/portraits/women/1.jpg",
      gender: "female",
      age: 25,
      name: "Jane Smith"
    },
    {
        picture: "https://randomuser.me/api/portraits/men/1.jpg",
        gender: "male",
        age: 30,
        name: "John Doe"
      },
      {
        picture: "https://randomuser.me/api/portraits/women/1.jpg",
        gender: "female",
        age: 25,
        name: "Jane Smith"
      },
      {
        picture: "https://randomuser.me/api/portraits/men/1.jpg",
        gender: "male",
        age: 30,
        name: "John Doe"
      },
      {
        picture: "https://randomuser.me/api/portraits/women/1.jpg",
        gender: "female",
        age: 25,
        name: "Jane Smith"
      },
      {
        picture: "https://randomuser.me/api/portraits/men/1.jpg",
        gender: "male",
        age: 30,
        name: "John Doe"
      },
      {
        picture: "https://randomuser.me/api/portraits/women/1.jpg",
        gender: "female",
        age: 25,
        name: "Jane Smith"
      },
      {
        picture: "https://randomuser.me/api/portraits/men/1.jpg",
        gender: "male",
        age: 30,
        name: "John Doe"
      },
      {
        picture: "https://randomuser.me/api/portraits/women/1.jpg",
        gender: "female",
        age: 25,
        name: "Jane Smith"
      },
      {
        picture: "https://randomuser.me/api/portraits/men/1.jpg",
        gender: "male",
        age: 30,
        name: "John Doe"
      },
      {
        picture: "https://randomuser.me/api/portraits/women/1.jpg",
        gender: "female",
        age: 25,
        name: "Jane Smith"
      },
      {
        picture: "https://randomuser.me/api/portraits/men/1.jpg",
        gender: "male",
        age: 30,
        name: "John Doe"
      },
      {
        picture: "https://randomuser.me/api/portraits/women/1.jpg",
        gender: "female",
        age: 25,
        name: "Jane Smith"
      },
      {
        picture: "https://randomuser.me/api/portraits/men/1.jpg",
        gender: "male",
        age: 30,
        name: "John Doe"
      },
      {
        picture: "https://randomuser.me/api/portraits/women/1.jpg",
        gender: "female",
        age: 25,
        name: "Jane Smith"
      },
      {
        picture: "https://randomuser.me/api/portraits/men/1.jpg",
        gender: "male",
        age: 30,
        name: "John Doe"
      },
      {
        picture: "https://randomuser.me/api/portraits/women/1.jpg",
        gender: "female",
        age: 25,
        name: "Jane Smith"
      },
      {
        picture: "https://randomuser.me/api/portraits/men/1.jpg",
        gender: "male",
        age: 30,
        name: "John Doe"
      },
      {
        picture: "https://randomuser.me/api/portraits/women/1.jpg",
        gender: "female",
        age: 25,
        name: "Jane Smith"
      }
  ];
  
  export const fetchPatients = async (): Promise<Patient[]> => {
    return new Promise((resolve) => {
      const timeoutId = setTimeout(() => {
        resolve(mockPatients);
      }, 3000);
  
      return () => clearTimeout(timeoutId);
    });
  };