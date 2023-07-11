import React from "react";



interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'success';
  onClick: () => void;
}

const ButtonCom = ({ children,color='primary', onClick }: Props) => {
  return (
    <button className={'btn btn-'+ color} position-relative onClick={onClick} >
      {children}
    </button>
  );
};
export default ButtonCom;
