import React, { createContext, useState, useContext } from "react";

interface CardContextProps {
  card: productProps[];
  setCard: React.Dispatch<React.SetStateAction<productProps[]>>;
}

interface productProps {
  id?: string;
  url?: string;
  price?: string;
  title?: string;
  button?: string;
  provider?: any;
  count?: any;
}

export const CardContext = createContext<productProps[] | undefined>(undefined);
export const setCardContext = createContext<
  React.Dispatch<React.SetStateAction<productProps[]>> | undefined
>(undefined);

export const useCardContext = (): [
  productProps[],
  React.Dispatch<React.SetStateAction<productProps[]>>
] => {
  const card = useContext(CardContext);
  const setCard = useContext(setCardContext);
  if (!card || !setCard) {
    throw new Error("context not in scope use CardContextProvider");
  }
  return [card, setCard];
};

const CardContextProvider = (props: any) => {
  const [card, setCard] = useState<productProps[]>([]);

  return (
    <CardContext.Provider value={card}>
      <setCardContext.Provider value={setCard}>
        {props.children}
      </setCardContext.Provider>
    </CardContext.Provider>
  );
};

export default CardContextProvider;
