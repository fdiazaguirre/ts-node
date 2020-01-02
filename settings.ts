
export enum Settings {
    PORT = 4000
}

export const getConnectionString = (user: string, pass: string): string => {
  return `mongodb://${user}:${pass}@ds257698.mlab.com:57698/linkedin_apis`;
};