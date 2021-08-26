export interface ICategoryListProps {
  categories: ICategory[]
}

interface ICategory {
  title: string,
  options: ICategoryOption[]
}

interface ICategoryOption {
  name: string,
  thumbnail: string
}