export type CompProps = {
  name: string;
  onClick: () => void;
};

export const Comp = ({ name, onClick }: CompProps) => {
  return (
    <>
      <button onClick={onClick}>{name}</button>
    </>
  );
};
