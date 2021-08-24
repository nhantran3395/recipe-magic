export interface ICategoryProps {
  title: string,
  options: IOption[],
}

interface IOption {
  name: string,
  thumbnail: string,
}