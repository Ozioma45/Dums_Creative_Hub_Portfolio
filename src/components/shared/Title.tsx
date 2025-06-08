interface TitleProps {
  children: React.ReactNode;
}

export const Title = ({ children }: TitleProps) => {
  return <h1 className="title text-2xl title"> {children} </h1>;
};
